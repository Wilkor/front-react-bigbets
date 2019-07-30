import api from './authServices';
import decode from 'jwt-decode';


const getListComiteSolucoes  = async () =>{

let token =  null;

if(!!localStorage.getItem('@bigbets:token')){
  
  token = decode(localStorage.getItem('@bigbets:token'))

}




try {
     const response =  await api.get(`/projeto/list/${token.id}`);
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default getListComiteSolucoes;
