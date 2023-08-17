import styled from 'styled-components';

export const BodyInic = styled.div`
font-family: Arial;
font-size: 17px;
padding: 8px;
color: white;

* {
    box-sizing: border-box;
  }
  label {
    margin: 15px;
  }
  input[type="text"] {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  input[type="number"] {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  label {
    margin-left: 20px;
    display: block;
  }
  a {
    color: black;
  }
  
  
`;

export const Fields = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
  .Fields div {
    margin-right: 10px;
  }
  @media (max-width: 657px) {
       flex-direction: column-reverse;
  }
`;

export const FormContainer = styled.div`
margin: 10px;
background-color: #1d3d5b;
padding: 5px 20px 15px 20px;
border: 5px solid #FBC108;
justify-content: space-around;
border-radius: 3px;
`;

export const ContainerFlex = styled.div`
  display: flex;
`;

export const SubTitle = styled.h3`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`;

export const Title = styled.h1`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  margin-top: 20px;
  text-align: left;
  margin-left: 2%;
`;

export const ValidFeedback = styled.div`
  margin-top: 10px;
`;

export const InvalidPoints = styled.div`
  color: red;
  margin-top: 20px;
`;

export const BtnInsert = styled.button`
background-color: #FBC108 !important;
color: #fff;
padding: 4%;
border: none;
margin-right:20px;
margin-top: 20px;
`;



