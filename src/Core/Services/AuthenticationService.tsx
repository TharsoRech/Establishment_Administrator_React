import Cookies from "js-cookie";
import qs from 'qs';
import {User} from '../../Core/Models/user'
import {LoginDto} from '../../Core/Models/LoginDto'
import {PontosDto} from '../../Core/Models/PontosDto'
import {Result} from '../../Core/Models/Result'
import * as CryptoJS from "crypto-js";


const BASEAPI = 'http://gralha.nuvemidc.com:6402/api/';

const apiFetchPost = async(endpoint:any,body:any,token:any) => {
    try {
           const res = await fetch(BASEAPI + endpoint,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(body)
           });
           const json = await res.json();
           return json;
      } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
        const Error:Result = {
            data: null,
            success: false,
            errorCode:0,
            message:'Houve um erro na sua requisição,por favor tente novamente'
          }
        return Error;
      }
};

const apiFetchGet = async(endpoint:any,body:any = [],token:any) => {
    try {
           const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`,{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(body)
           });
           const json = await res.json();
           return json;
      } catch (error) {
        const Error:Result = {
            data: null,
            success: false,
            errorCode:0,
            message:'Houve um erro na sua requisição,por favor tente novamente'
          }
        return Error;
      }
};


const MeshApi = {
    login:async(username:string,password:string) =>{
        let PasswordHashed = CryptoJS.MD5(password).toString();
        const rememberUser:LoginDto = {
            cnpj: username,
            passwordHash: PasswordHashed
          }
        const json =  await apiFetchPost('Establishment/authenticate',rememberUser,null)
        if(json.success){
            Cookies.set('currentUser', JSON.stringify(json.data));
        }
        return json;
    },
    getPoints:async () => {
        //Mock
        let list = [];

        for (let index = 0; index < 74; index++) {
          list.push({Cliente : "Tharso Francisco Rech Curia:" + index.toString(), Cpf :"03029666093"+ index.toString(), Pontos: "30" + index.toString(), ValorCompra: "40" + index.toString(),EfetividaEm:"04/01/000"+ index.toString()});
        }
        return list;
    },
    AddPoints:async(cpfCnpj: string, pontos: number) => {
        var user:string | undefined= Cookies.get('currentUser') as string;
        var userConvert:User | null = JSON.parse(user);
        const Points:PontosDto = {
            cpf: cpfCnpj,
            valueNf: pontos
          }
        const json =  await apiFetchPost('Establishment/create-point-balance',Points,userConvert?.token)
        return json;
    },
    getCategories:async () => {
        const json =  await apiFetchGet('/categories',null,null)
        return json;
    },
    getAds:async (options:any) => {
        const json =  await apiFetchGet('/ad/list',options,null)
        return json;
    },
    getAd:async (id:any,other = false) => {
        const json =  await apiFetchGet('/ad/item',{id,other},null)
        return json;
    }
};


export default () => MeshApi;