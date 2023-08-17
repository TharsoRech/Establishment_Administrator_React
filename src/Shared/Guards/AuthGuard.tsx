import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from "js-cookie";
import {User} from '../../Core/Models/user'
function Protected({children}:any) {
    let isSignedIn  =false;
    var cookieLogin = JSON.stringify(Cookies.get('currentUser')) as unknown as User;
    if(cookieLogin != null){
        isSignedIn = true;
    }
  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return children;
}
export default Protected;