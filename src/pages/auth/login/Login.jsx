import './login.scss';
import logo from '../../../assaets/images/logo-png.png';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import {LoginCall} from '../../../context/login/ApiCalls';
import { AuthContext } from '../../../context/login/AuthContext';

const Login = () => {
    const {dispatch} = useContext(AuthContext);

    const [form,setForm] = useState(()=>{
        return {
            email:'',
            password:''
        }
    });

    function submitHandler(e) {
        e.preventDefault();
        LoginCall(form,dispatch);
    }

    return (

        <div className="container">

            <div className="right">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <form className="form" onSubmit={submitHandler}>
                    <div className="center">
                        <div className="title">LOGIN</div>
                        <div className="thing">
                            <span className="placeHolder">email</span>

                        </div>
                        <div className="input email">
                            <input type="email" onChange={(e)=>{setForm(prev=>{return{...prev,email:e.target.value}})}}/>
                        </div>
                        <div className="thing">
                            <span className="placeHolder">password</span>

                            <div className="forget">forget password ?</div>
                        </div>
                        <div className="input pass">
                            <input type="password" onChange={(e)=>{setForm(prev=>{return{...prev,password:e.target.value}})}}/>
                        </div>
                        <div className='loginBtn'>
                            <button type='submit'>Login</button>
                        </div>
                        <div className="thing lg">
                            <span>easy login with</span>
                        </div>
                        <div className="thing">
                            <button className='fb'><GoogleIcon className='icon' /> google</button>
                            <button className='gg'><FacebookIcon className='icon' /> facebook</button>
                        </div>
                    </div>
                </form>
                <div className="register-div">
                    <span>dont have an account yet ? <Link className='link' to={"/register"}>register now </Link></span>
                </div>
            </div>

        </div>
    )
}

export default Login