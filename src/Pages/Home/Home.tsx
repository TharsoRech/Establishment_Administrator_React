import React,{useState,useEffect} from 'react';
import {BodyHome,LoginMainText,BtnHome,ForgetComponent,LinkLogin} from './styled';
import { IMaskInput } from "react-imask";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { mask } from "../../Shared/Helpers/Mask"
import MeshApi from '../../Core/Services/AuthenticationService'


const Home = () => {
   const [validated, setValidated] = useState(false);
   const [CpfCnpj, setCpfCnpj] = useState('');
   const[password,setPassword] = useState('');
   const [errorCpfCnpj, setErrorCpfCnpj] = useState<any | null>(null);
   const[error,setError] = useState('');
   const api = MeshApi();

   const OnSubmit = async (e:any) =>{
      e.preventDefault();
      if(!validated){
         return;
      }
      setError('');
      const json  = await api.login(CpfCnpj.replace(/[^0-9]/g, ''),password);
      if(!json.success){
        setError(json.message);
      }
      else{
       window.location.href = "/DashBoard";
      }
    }

   const handleChangeCpf = (event:any) => {
      if (event.target.value.length == 14 || event.target.value.length == 18) {
         setErrorCpfCnpj(null);
      } else {
         setErrorCpfCnpj('Cpf/Cnpj inválido');
      }
  
      setCpfCnpj(mask(event.target.value));
      setValidated(true);
    };

    const handleChangePassword = (event:any) => {
      setPassword(event.target.value)
    };

    return(
      <BodyHome> 
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<div className="sidenav">
   <div className="ImgContainer">
      <img className="ImgApp" src ="assets/MeshCode.jpeg" alt=""/>
   </div>
         <LoginMainText>
            <h2>Mesh Code<br /></h2>
            <p>Entre com sua conta para acessar o Dashboard</p>
         </LoginMainText>
      </div>
      <div className="main">
      <Form noValidate validated={validated} onSubmit={OnSubmit}>
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
                  <Form.Group className="mb-3" controlId="CpfCnpj">
                     <label >CPF/CNPJ</label>
                     <Form.Control type="text" isInvalid name="CpfCnpj" value={CpfCnpj} onChange={handleChangeCpf} placeholder="Digite seu CPF/CNPJ"  required />
                     <Form.Control.Feedback type="invalid" ></Form.Control.Feedback>
                     {errorCpfCnpj && (
                     <Form.Control.Feedback  type="invalid">
                     {errorCpfCnpj}
                     </Form.Control.Feedback>
                     )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                     <label >Senha</label>
                     <Form.Control type="password" value={password} onChange={handleChangePassword} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="login-button">
                        <BtnHome type="submit" className="btn btn-login">Entrar</BtnHome>
                  </Form.Group>
                  {error && (<div className="alert alert-danger">{error}</div>)}
                     <ForgetComponent>
                        <LinkLogin href="/EsqueciSenha" > Esqueceu sua senha? </LinkLogin>
                        <LinkLogin href="/ContateNos"> Ficou com dúvidas? Contate-nos</LinkLogin>
                     </ForgetComponent>
            </div>
         </div>
         </Form>
      </div>
    </BodyHome>
    );
}
export default Home;