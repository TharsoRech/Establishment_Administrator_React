import styled, { keyframes } from 'styled-components';

export const BodyPoints = styled.div`
.htEUCh {
	background-color: #1d3d5b;
}
table { 
  width: 100%; 
  border-collapse: collapse; 
}
/* Zebra striping */
tr:nth-of-type(odd) { 
  background: #1d3d5b; 
}
th { 
  background: #333; 
  color: white; 
  font-weight: bold; 
}
td, th { 
  padding: 6px; 
  border: 3px solid #FBC108; 
  text-align: left; 
}
.table>:not(caption)>*>*{
background-color:#1d3d5b;
color:#FFF;
}

 .pagination {
  flex-wrap: wrap;
}
@media screen and (max-width: 600px) {
	table {
	  border: 0;
	}
  
	table caption {
	  font-size: 1.3em;
	}
	
	table thead {
	  border: none;
	  clip: rect(0 0 0 0);
	  height: 1px;
	  margin: -1px;
	  overflow: hidden;
	  padding: 0;
	  position: absolute;
	  width: 1px;
	}
	
	table tr {
	  border-bottom: 3px solid #ddd;
	  display: block;
	  margin-bottom: .625em;
	}
	
	table td {
	  border-bottom: 1px solid #ddd;
	  display: block;
	  font-size: .8em;
	  text-align: right;
	}
	
	table td::before {
	  /*
	  * aria-label has no advantage, it won't be read inside a table
	  content: attr(aria-label);
	  */
	  content: attr(data-label);
	  float: left;
	  font-weight: bold;
	  text-transform: uppercase;
	}
	
	table td:last-child {
	  border-bottom: 0;
	}
}
.d-flex{
	display:flex;
	text-align: center ;
	.page-item.active .page-link{
		background-color: #1d3d5b;
		border: 3px solid #FBC108;
		color: #FBC108;
	}
	.ul > li > a
	{
		background-color: #1d3d5b;
		border: 3px solid #FBC108;
		color: #FBC108;
	}
	
	.ul > li > a:focus,
	.ul > li > a:hover,
	.ul > li > span:focus,
	.ul > li > span:hover
	{
		color: purple;
		background-color: #eee;
		border-color: #ddd;
	}
	
	.ul > .active > a
	{
		color: white;
		background-color: purple;
		border: solid 1px purple;
	}
	
	.ul > .active > a:hover
	{
		background-color: purple;
		border: solid 1px purple;
	}
}
`;

export const Title = styled.h1`
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
margin-top: 20px;
text-align: left;
margin-left: 2%;
`;

export const Subtitle = styled.p`
margin-left: 3%;
font-family: "Poppins", sans-serif;
color: #fff;
padding-top: 10px;
padding-bottom: 10px;
`;

export const FormControl = styled.input`
margin-left: 3%;
width: 50%;
display: block;
padding: 0.375rem 0.75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
border-radius: 0.375rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const rotate360 = keyframes`
 from {
   transform: rotate(0deg);
 }

  to {
    transform: rotate(360deg);
  }`;
export const Spinner = styled.div`
	margin: 16px;
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 80px;
	height: 80px;
	border-radius: 50%;`;




