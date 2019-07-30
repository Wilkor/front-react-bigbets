import api from './authServices'

const changePassword  = async (password,token) =>{


console.log(token,password)


try {
     const response = await api.post('/forgotbigbets/reset', {
        password: password,
        token:token
      });
      const {data } = response.data;
      

     return data
    } catch (err) {
     
     return  err.data.status 
    }

}
export default changePassword;