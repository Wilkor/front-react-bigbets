import api from './authServices'

const setProjectAnexo  = async (id_projeto) =>{
const token = await localStorage.getItem('@bigbets:token');
try {
     const response = await api.put('/problema/update',{
       id_projeto:id_projeto
       });
      const {  data } = response.data;
     return data
    } catch (err) {
      
     return  err.data.error 
    }

}
export default setProjectAnexo;


