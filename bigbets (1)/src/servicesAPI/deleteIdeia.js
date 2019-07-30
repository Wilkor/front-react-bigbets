import api from './authServices';


const deleteProject  = async (id) =>{

try {
     const response =  await api.delete(`/problema/delete/${id}`);
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default deleteProject;
