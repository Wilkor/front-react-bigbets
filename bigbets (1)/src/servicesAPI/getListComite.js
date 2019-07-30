import api from './authServices';


const getListComite  = async () =>{

try {
     const response =  await api.get('/problema/comite/list');
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default getListComite;
