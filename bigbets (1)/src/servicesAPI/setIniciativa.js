import api from './authServices'

const iniciativaService  = async (titulo,descricao,perfil,id,area) =>{

try {
     const response = await api.post('/problema/create', {

       id_user:id,
       area:area,
       iniciativa:titulo,
       status:"Aprovacao",
       descricao:descricao,
       comite:false

      });
      const { data } = response.data;
     return data
    } catch (err) {
      
     return  err.data.error 
    }

}
export default iniciativaService;


