import api from './authServices'

const loginService  = async (email,password) =>{

try {
     const response = await api.post('/createuser/login/getlogin', {
        email: email,
        password: password,
      });
      const { token, data } = response.data;
      localStorage.setItem('@bigbets:token',token,);
      localStorage.setItem('@bigbets:id',data.id)
      localStorage.setItem('@bigbets:idcustom',token)
     return data
    } catch (err) {
     
     return  err.data.status 
    }

}
export default loginService;


