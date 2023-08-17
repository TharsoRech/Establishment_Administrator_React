import {BodyProfile,BtnCustom,Fields,LabelCustom,FormContainer,Title,ContainerDuo,ContainerOne,ContainerThree,BtnInfo,ValidFeedback,InvalidFeedback} from './styled';
import {useState,useEffect} from 'react';
import {User} from '../../../Core/Models/user'
import Cookies from "js-cookie";
import MeshApi from '../../../Core/Services/AuthenticationService'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const ProfilePage = () => {
    const [CurrentUser, setCurrentUser] = useState<User | null>(null);
    const [validatedPassword, setvalidatedPassword] = useState(false);
    const [validatedUpdateProfile, setvalidatedUpdateProfile] = useState(false);
    const[ErrorPassword,setErrorPassWord] = useState('');
    const[SucessPassword,setSucessPassWord] = useState('');
    const[ErrorUpdateProfile,setErrorUpdateProfile] = useState('');
    const[SucessUpdateProfile,setSucessUpdateProfile] = useState('');
    const[CurrentPassword,setCurrentPassWord] = useState('');
    const[NewPassword,setNewPassWord] = useState('');
    const[RazaoSocial,setRazaoSocial] = useState<string | undefined>('');
    const[Endereco,setEndereco] = useState<string | undefined>('');
    const[Complemento,setComplemento] = useState<string | undefined>('');
    const[Numero,setNumero] = useState<string | undefined>('');
    const[Bairro,setBairro] = useState<string | undefined>('');
    const[Cidade,setCidade] = useState<string | undefined>('');
    const[Uf,setUf] = useState<string | undefined>('');
    const[Cep,setCep] = useState<string | undefined>('');
    const[PhoneNumber,setPhoneNumber] = useState<string | undefined>('');
    const api = MeshApi();
    useEffect(() => {
      GetUser();
    });
  
    const GetUser = () => {
      if(CurrentUser === null){
       var user:string | undefined= Cookies.get('currentUser') as string;
       var userConvert:User | null = JSON.parse(user);
       setRazaoSocial(userConvert?.razaoSocial);
       setPhoneNumber(userConvert?.phoneNumber);
       setBairro(userConvert?.bairro);
       setNumero(userConvert?.numero);
       setComplemento(userConvert?.complemento);
       setEndereco(userConvert?.endereco);
       setUf(userConvert?.uf);
       setCidade(userConvert?.cidade);
       setCep(userConvert?.cep);
       setCurrentUser(userConvert);
      }
    }

    const OnSubmitProfile = async (e:any) =>{
        e.preventDefault();
        if(!validatedUpdateProfile){
           return;
        }
        setErrorUpdateProfile('');
        const json  = await api.login(CurrentPassword,NewPassword);
        if(!json.success){
            setErrorUpdateProfile(json.message);
        }
        else{
            setSucessUpdateProfile('Senha alterada com sucesso')
        }
      }
      const OnSubmitPassword = async (e:any) =>{
        e.preventDefault();
        setErrorPassWord('');
        const json  = await api.login(CurrentPassword,NewPassword);
        if(!json.success){
          setErrorPassWord(json.message);
        }
        else{
          setSucessPassWord('Senha alterada com sucesso')
        }
      }
    return(
        <BodyProfile>
        <Title>Perfil</Title>
        <Fields>
        <FormContainer>
        <Form noValidate validated={validatedUpdateProfile} onSubmit={OnSubmitProfile} className='FormStyle'>
        <ContainerOne>
        <h3>Detalhes da Conta</h3>
        <LabelCustom id="RazaoSocial">Razão Social</LabelCustom>
        <input type="text"  id="RazaoSocial" name="RazaoSocial" value={RazaoSocial} ></input>
        <LabelCustom id="Telefone"> Telefone</LabelCustom>
        <input type="text"  id="Telefone" name="Telefone" value={PhoneNumber} />
        <LabelCustom id="Cep">Cep</LabelCustom>
        <input type="text"  id="Cep" name="Cep" value={Cep} />
        <LabelCustom  >Cidade</LabelCustom>
        <input type="text"  id="Cidade" name="Cidade" value={Cidade} />
         <LabelCustom id="Uf"> Uf</LabelCustom>
         <input type="text"   id="Uf" name="Uf" value={Uf} />
        </ContainerOne>
        <ContainerDuo>
            <LabelCustom id="Endereco">Endereco</LabelCustom>
            <input type="text"  id="Endereco" name="Endereco" value={Endereco}  />
            <LabelCustom id="Bairro">Bairro</LabelCustom>
            <input type="text"  id="Bairro" name="Bairro" value={Bairro} />
            <LabelCustom id="Numero">Numero</LabelCustom>
            <input type="number"  id="Numero" name="Numero" value={Numero} />
            <LabelCustom id="Complemento">Complemento</LabelCustom>
            <input type="text" id="Complemento" name="Complemento" value={Complemento} />
            <BtnInfo type="submit" >Salvar Alterações</BtnInfo>
            <ValidFeedback>{SucessUpdateProfile}</ValidFeedback>
            <InvalidFeedback>{ErrorUpdateProfile} </InvalidFeedback>
        </ContainerDuo>
        </Form>
        <Form noValidate validated={validatedPassword} onSubmit={OnSubmitPassword} className='FormStyle' >
            <ContainerThree>
                <h3>Senha</h3>
                <LabelCustom id="password">Senha Atual</LabelCustom>
                <input type="password" id="password" name="password"  />
                <LabelCustom id="passwordNew">Nova senha</LabelCustom>
                <input type="password" id="passwordNew" name="passwordNew" />
                <BtnCustom type="submit" >Alterar Senha</BtnCustom>
                <ValidFeedback>{SucessPassword}</ValidFeedback>
                <InvalidFeedback>{ErrorPassword} </InvalidFeedback>
            </ContainerThree>
        </Form>
        </FormContainer>
        </Fields>
        </BodyProfile>
    );
}
export default ProfilePage;