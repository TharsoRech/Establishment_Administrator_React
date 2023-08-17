import {BodyDash,SideBar,Home_Content,ImgApp} from './styled';
import Cookies from "js-cookie";
import {User} from '../../Core/Models/user'
import React,{useState,useEffect} from 'react';
import HomePage from '../DashBoardPages/Home/home'
import PointsPage from '../DashBoardPages/Points/points'
import ProfilePage from '../DashBoardPages/Profile/profile'
import StorePage from '../DashBoardPages/Store/store'

const DashBoard = () => {
  const [CurrentRoot, setCurrentRoot] = useState('');
  const [Home, setHome] = useState(true);
  const [Points, setPoints] = useState(false);
  const [Profile, setProfile] = useState(false);
  const [Store, setStore] = useState(false);
  const [Configuracoes, setConfiguracoes] = useState(false);
  const [SideBarExpanded, setSideBarExpanded] = useState('');
  const [SideBarCollapse, setSideBarCollapse] = useState('');
  const [CurrentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    GetUser();
  });

  const GetUser = () => {
    if(CurrentUser === null){
     var user:string | undefined= Cookies.get('currentUser') as string;
     var userConvert:User | null = JSON.parse(user);
     setCurrentUser(userConvert);
    }
  }
  const toggleSidebar= () =>{
    if(SideBarExpanded == ''){
      setSideBarExpanded('active');
      setSideBarCollapse('uncollapse')
    }
    else{
      setSideBarExpanded('');
      setSideBarCollapse('')
    }
 }

 const Logout = () => {
  Cookies.remove('currentUser');
}
 
 const MudarRotaDash = (rootpath:any,path:any) =>  {
   rootpath.preventDefault()
   setCurrentRoot(path);
   switch(path) { 
    case "Inicio": { 
      setHome(true);
      setPoints(false);
      setProfile(false);
      setStore(false);
      setConfiguracoes(false);
       break; 
    } 
    case "Pontos": { 
      setHome(false);
      setPoints(true);
      setProfile(false);
      setStore(false);
      setConfiguracoes(false); 
       break; 
    } 
    case "Perfil": { 
      setHome(false);
      setPoints(false);
      setProfile(true);
      setStore(false);
      setConfiguracoes(false);
       break; 
    } 
    case "Loja": { 
      setHome(false);
      setPoints(false);
      setProfile(false);
      setStore(true);
      setConfiguracoes(false);
       break; 
    } 
    default: { 
      setHome(true);
      setPoints(false);
      setProfile(false);
      setStore(false);
      setConfiguracoes(false);
       break; 
    } 
 } 
 }
    return(
        <BodyDash>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.css" />
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" ></script>
   <link
   href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
   rel="
   stylesheet"
 />
<SideBar className={SideBarExpanded}>
 <div className="logo_content">
   <div className="logo">
       <ImgApp src="assets/MeshCode.jpeg" alt=""></ImgApp>
     <div className="logo_name">MeshCode</div>
   </div>
 </div>
 <i className="bx bx-menu" id="btn-menu" onClick={toggleSidebar} ></i>
 <ul className="nav_list no-bullets">
   <li >
     <a href="#" onClick={(e:any)=>{MudarRotaDash(e,'Inicio')}}>
       <i  className="bx bx-grid-alt"></i>
       <span  className="links_name">Inicio</span>
     </a>
     <span className="tooltip">Inicio</span>
   </li>
   <li >
     <a href="#" onClick={(e:any)=>{MudarRotaDash(e,'Loja')}} >
       <i  className="bx bx-store"></i><span className="links_name">Loja</span>
     </a>
     <span  className="tooltip">Loja</span>
   </li>
   <li >
     <a href="#" onClick={(e:any)=>{MudarRotaDash(e,'Pontos')}} >
       <i  className="bx bx-heart"></i><span className="links_name">Pontos</span>
     </a>
     <span  className="tooltip">Pontos</span>
   </li>
   <li >
       <a href="#" onClick={(e:any)=>{MudarRotaDash(e,'Perfil')}}  >
         <i className="bx bx-user"></i><span  className="links_name">Perfil</span>
       </a>
       <span className="tooltip">Perfil</span>
     </li>
 </ul>
 <div className="profile_content" >
   <div className="profile">
     <div className="profile_details">
       <div className="name_job">
         <div className="cpfCnpj" >
           Cpf/Cpnj: {CurrentUser?.cnpj}
         </div>
         <div className="name" >
         {CurrentUser?.razaoSocial}
         </div>
       </div>
     </div>
     <a href= "/"  onClick={Logout} className="bx bx-log-out" id="log_out"></a>
   </div>
 </div>
</SideBar>
<Home_Content className={SideBarCollapse}>
  {Home && <HomePage/> }
  {Points && <PointsPage/>}
  {Profile && <ProfilePage/>}
  {Store && <StorePage/>}
</Home_Content>
</BodyDash>
    );
}
export default DashBoard;