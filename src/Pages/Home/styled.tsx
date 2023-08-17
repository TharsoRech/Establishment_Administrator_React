import styled from 'styled-components';

export const BodyHome = styled.div`
body {
    font-family: "Lato", sans-serif;
}

.ImgApp{
    width: 200px;
    margin-top: 10%;
    padding-left: 8%;
}

.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #1D3D5B;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 50%;
    }

    .register-form{
        margin-top: 20%;
    }
}
@media screen and (min-width: 451px) and (max-width: 767px){
    .login-form{
        margin-top: 20px;
    }
}
`;

export const LoginMainText = styled.div`
padding: 60px;
color: #fff;
h2{
    font-weight: 300;
}
`;

export const BtnHome = styled.button`
    background-color: #FBC108 !important;
    color: #fff;
.btn-login{
    margin-right:20px;
}
`;

export const ForgetComponent = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

export const LinkLogin = styled.a`
    margin-right:20px;
    color:#62a7cf;
    margin-bottom: 5px;
`;


