import api from './authServices';


const deleteProblem  = async (id) =>{

try {
     const response =  await api.delete(`/projeto/delete/${id}`);
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default deleteProblem;
