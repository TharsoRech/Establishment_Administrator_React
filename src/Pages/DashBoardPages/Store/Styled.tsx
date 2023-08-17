import styled from 'styled-components';

export const BodyDash = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: #fff;
}

/* ul.no-bullets {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
} */

  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #62a7cf;

`;

export const SideBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 78px;
    background: #1d3d5b;
    padding: 6px 14px;
    transition: all 0.5s ease;
    border-right: 5px solid #FBC108;
    border-radius: 3px;

    &.active {
    width: 240px;
  }
  
  .logo_content .logo {
    color: #fff;
    display: flex;
    height: 50px;
    /* width: 100%; */
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
  }
  
  &.active .logo_content .logo {
    opacity: 1;
    pointer-events: none;
  }
    .logo_content .logo i {
    font-size: 28px;
    margin-right: 5px;
  }
  .logo_content .logo .logo_name {
    font-size: 20px;
    font-weight: 400;
  }
  
   #btn-menu {
    color: #fff;
    position: absolute;
    top: 8px;
    left: 50%;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 45px;
    /* align-items: center; */
    transform: translateX(-50%);
  }
  
  &.active #btn-menu {
    left: 90%;
  }
  
   ul {
    margin-top: 20px;
  }
  
   ul li .tooltip {
    position: absolute;
    left: 122px;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    height: 35px;
    width: 122px;
    background: #fff;
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
    display: block;
  }
  
  &.active ul li .tooltip {
    display: none;
  }
  
   ul li:hover .tooltip {
    transform: all 0.5s ease;
    opacity: 1;
    top: 50%;
  }
  
   ul li {
    position: relative; /* ? */
    height: 50px;
    list-style: none;
    width: 100%;
    margin: 0 5px;
    line-height: 50px;
  }
  
   ul li input {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    background: #62a7cf;
    padding-left: 50px;
    font-size: 18px;
    color: #fff;
  }
  
   ul li .bx-search {
    color: #fff;
    position: absolute;
    z-index: 99;
    line-height: 50px;
    font-size: 22px;
  }
  
   ul li .bx-search:hover {
    background: #fff;
    color: #1d1b31;
  }
  
   ul li a {
    border-radius: 12px;
    color: #fff;
    display: flex; /* ? */
    height: 50px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    white-space: nowrap;
  }
  
   ul li a:hover {
    color: #1d3d5b;
    background: #FBC108;
  }
  
   ul li i {
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
  }
  
   .links_name {
    opacity: 0;
    pointer-events: auto;
  }
  &.active .links_name {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.5s ease;
  }
  
   .profile_content {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    /* display: flex; */
    width: 100%;
  }
  
   .profile_content a {
    color: #fff;
    text-decoration: none;
  }
  
   .profile_content .profile {
    position: relative;
    padding: 10px 6px;
    height: 80px;
    transition: all 0.5 ease;
    background: none;
  }
  
  &.active .profile_content .profile {
    background: #1d1b31;
  }
  
  .profile_content .profile .profile_details {
    display: flex;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    /* justify-content: center; */
  }
  
  &.active .profile_content .profile .profile_details {
    opacity: 1;
    pointer-events: auto;
  }
  .profile .profile_details .name_job {
    margin-left: 5px;
  }
  
  .profile .profile_details .name_job .name {
    font-size: 12px;
    font-weight: 400;
    white-space: break-spaces;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 1000;
    width: 95%;
  
  }
  .profile .profile_details .name_job .cpfCnpj {
    font-size: 12px;
    font-weight: 400;
    white-space: break-spaces;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 1000;
    width: 95%;
    padding-bottom: 5px;

  }
  
  
  .profile .profile_details .name_job .job {
    font-size: 12px;
  }
  
  .profile #log_out {
    position: absolute;
    left: 50%;
    /* left: 88%; */
    bottom: 5px;
    transform: translateX(-50%);
    min-width: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    border-radius: 12px;
    transition: all 0.5 ease;
    background: #1d1b31;
  }

  &.active .profile #log_out {
    left: 88%;
    background: none;
  }
  
`;

export const Home_Content = styled.div`
    position: fixed;
    height: 100%;
    width: calc(100% - 78px);
    left: 78px;
    transition: all 0.5s ease;
    background: #62a7cf;
    top: 0;
    
    
  
  
    &.uncollapse {
    width: calc(100% - 240px);
    left: 240px;
  }
  
.text {
    font-size: 25px;
    font-weight: 500;
    color: #1d1b31;
    margin-top: 12px;
    margin-left: 2%;
  }
}
`;

export const ImgApp = styled.img`
width: 15%;
margin-right: 10%;
`;

export const LinkLogin = styled.a`
    margin-right:20px;
    color:#62a7cf;
    margin-bottom: 5px;
`;


