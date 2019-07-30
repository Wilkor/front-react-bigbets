import api from './authServices'

const loginService  = async (email) =>{

try {
     const response = await api.post('/forgotbigbets', {
        email: email
      });
       
     return response.data.message
    } catch (err) {
      
     return  err.data.error 
    }

}
export default loginService;


