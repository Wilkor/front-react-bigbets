import api from './authServices';


const getListProjectTimeLine  = async () =>{

try {
     const response =  await api.get('/projeto/list');
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default getListProjectTimeLine;
