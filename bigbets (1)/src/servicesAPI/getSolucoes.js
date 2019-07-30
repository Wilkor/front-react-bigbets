import api from './authServices';


const getListComiteSolucoes  = async () =>{

try {
     const response =  await api.get('/projeto/comite/list');
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return   err
    }

}
export default getListComiteSolucoes;
