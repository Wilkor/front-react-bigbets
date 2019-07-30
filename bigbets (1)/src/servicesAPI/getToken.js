
const getToken =  () =>{

const token =  !!localStorage.getItem('@bigbets:token');

return token

}

export default getToken;