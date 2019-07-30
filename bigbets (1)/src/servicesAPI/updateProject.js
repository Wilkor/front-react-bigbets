import api from './authServices'

const setProjectAnexo  = async (descricao,etapa,id) =>{

try {
     const response = await api.put('/projeto/update', {
        descricao,
        etapa,
        id_projeto:id
     
      });
      const {  data } = response.data;
     return data
    } catch (err) {
      
     return  err.data.error 
    }

}
export default setProjectAnexo;


