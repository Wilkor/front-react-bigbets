import api from './authServices'

const setProjectAnexo  = async (id_projeto) =>{

try {
     const response = await api.put('/projeto/comite/update',{
       id_projeto:id_projeto
       });
      const {  data } = response.data;
     return data
    } catch (err) {
      
     return  err.data.error 
    }

}
export default setProjectAnexo;


