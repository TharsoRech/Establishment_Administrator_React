import styled from 'styled-components';

export const BodyProfile = styled.div`
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
* {
  box-sizing: border-box;
}

input[type="text"],input[type="password"],input[type="number"]{
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color:black;
}
.FormStyle{
  padding: 20px;
display: flex;
margin-right: 20px;
@media (max-width: 990px) {
  padding: 20px;
  display: grid;
  margin-right: 20px;
}
}
`;

export const BtnCustom = styled.button`
margin-top: 3%;
background-color: #FBC108 !important;
color: #fff;
padding: 4%;
border: none;
width: 65%;
`;

export const Fields = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
background-color: transparent;
 div {
  margin-right: 10px;
}
`;

export const LabelCustom = styled.label`
margin: 15px;
margin-left: 20px;
display: block;
`;

export const FormContainer = styled.div`
margin: 10px;
background-color: #1d3d5b;
padding: 5px 20px 15px 20px;
border: 3px solid #FBC108;
border-radius: 3px;
display: flex;
@media (max-width: 990px) {
  display: block;
}
`;

export const Title = styled.h1`
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
margin-top: 20px;
text-align: left;
margin-left: 2%;
`;

export const ContainerDuo = styled.div`
display: flex;
width: 100%;
flex-direction: column;
flex-wrap: wrap;
margin-top: 6.5%;
margin-left: 20px;
@media (max-width: 990px) {
  margin-left: 0;
}
`;

export const ContainerOne = styled.div`
display: flex;
width: 100%;
flex-direction: column;
flex-wrap: wrap;
`;

export const ContainerThree = styled.div`
display: flex;
width: 100%;
flex-direction: column;
flex-wrap: wrap;
margin-top: 6%;
@media (max-width: 990px) {
    margin-bottom: 20px;
}
`;

export const BtnInfo = styled.button`
background-color: #FBC108 !important;
color: #fff;
padding: 4%;
border: none;
width: 65%;
margin-top: 23%;
height: 7%;
width: 100%;
@media (max-width: 990px) {
  margin-top: 10%;
  height: auto;
  width: 100%;
}
`;


export const ValidFeedback = styled.div`
  margin-top: 10px;
`;

export const InvalidFeedback = styled.div`
  color: red;
  margin-top: 20px;
`;







