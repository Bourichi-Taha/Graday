import axios from "axios";


export const LoginCall = async (cridentials,dispatch) => {
    dispatch({ type : "LOGIN_START"});
    try {
        const res = await axios.post("http://app.graday.com/api/auth/login/",{email:cridentials.email,password:cridentials.password,username:'string9'});
        // dispatch({ type : "LOGIN_SUCCESS" , payload : res.data });
        console.log(res.data);
    } catch (error) {
        dispatch({ type : "LOGIN_FAILURE" , payload : error});
    }
}

export const UserUpdateCall = async ({id,jwt},dispatch) => {
    try {
        const user = await axios.get(`/user/find/${id}`,{headers:{token:`bearer ${jwt}`}});
        const {password, ...info} = user.data;
        const finalUser = {...info,jwt};
        dispatch({ type : "LOGIN_UPDATE" , payload : finalUser });
        return finalUser;
    } catch (error) {
        // dispatch({ type : "LOGIN_FAILURE" , payload : error});
        console.log(error)
    }
}