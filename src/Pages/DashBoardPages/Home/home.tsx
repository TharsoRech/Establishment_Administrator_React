import {BodyInic,Fields,FormContainer,ContainerFlex,Title,ValidFeedback,InvalidPoints,BtnInsert,SubTitle} from './styled';
import Cookies from "js-cookie";
import React,{useState,useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { mask } from "../../../Shared/Helpers/Mask"
import MeshApi from '../../../Core/Services/AuthenticationService'

const HomePage = () => {
  const [CpfCnpj, setCpfCnpj] = useState('');
  const [Points, setPoints] = useState(0);
  const [errorCpfCnpj, setErrorCpfCnpj] = useState<string | null>(null);
  const [validated, setValidated] = useState(false);
  const[ErroPoint,setErroPoint] = useState<string | null>(null);
  const[CountPoint,setCountPoint] = useState<string | null>(null);
  const[SucessPoint,setSucessPoint] = useState<string | null>(null);
  const api = MeshApi();
  
  const OnSubmit = async (e:any) =>{
    e.preventDefault();
    if(CountPoint != null || errorCpfCnpj != null) {
        return;
    } 
    setErroPoint(null);
    setSucessPoint(null);
    const json  = await api.AddPoints(CpfCnpj.replace(/[^0-9]/g, ''),Points);
    if(!json.success){
      setErroPoint('Erro:' + json.message);
    }
    else{
      setSucessPoint('Pontos Inseridos com sucesso');
    }
  }

  const handleChangeCpf = (event:any) => {
    if (event.target.value.length == 14 || event.target.value.length == 18) {
       setErrorCpfCnpj(null);
       setValidated(true);

    } else {
       setErrorCpfCnpj('Cpf/Cnpj inválido');
       setValidated(false);
    }

    setCpfCnpj(mask(event.target.value));
  };
  const handleChangePoints = (event:any) => {
    var number = Number(event.target.value);
    if(number <= 0 ){
      setCountPoint('O número precisa ser positivo')
      setValidated(false);
    }
    else{
      setCountPoint(null)
      setValidated(true);
    }
    setPoints(event.target.value);
  };
    return(
        <BodyInic>
<Title>Bem vindo ao DashBoard da MeshCode</Title>
<ContainerFlex>
<Fields>
<FormContainer>
<Form noValidate validated={validated} onSubmit={OnSubmit}>
<Fields>
<div>
<SubTitle>Registrar Pontos</SubTitle>
<label >CPF/CNPJ</label>
<Form.Control type="text" isInvalid  name="CpfCnpj" value={CpfCnpj} onChange={handleChangeCpf}  placeholder="Digite seu CPF/CNPJ" required  />
                     {errorCpfCnpj && (
                     <Form.Control.Feedback  type="invalid">
                     {errorCpfCnpj}
                     </Form.Control.Feedback>
                     )}
<label> Quantidade de pontos</label>
<Form.Control type='number' isInvalid  value={Points} onChange={handleChangePoints}   placeholder="Digite a quantidade de pontos desejada" required />
                     {CountPoint && (
                     <Form.Control.Feedback  type="invalid">
                     {CountPoint}
                     </Form.Control.Feedback>
                     )}
<BtnInsert type="submit" >Registrar Pontos</BtnInsert>
<ValidFeedback>{SucessPoint}</ValidFeedback>
<InvalidPoints>{ErroPoint} </InvalidPoints>
</div>
</Fields>
</Form>
</FormContainer>
</Fields>
</ContainerFlex>
</BodyInic>
    );
}
export default HomePage;