import api from './authServices'

const setProjectAnexo  = async (iniciativa,descricao,etapa,titulo,id_user,id_problema) =>{

try {
     const response = await api.post('/projeto/create', {
        iniciativa,
        descricao,
        etapa,
        titulo,
        id_user,
        comite:false,
        id_problema
      });
      const {  data } = response.data;
     return data
    } catch (err) {
      
     return  err.data.error 
    }

}
export default setProjectAnexo;


