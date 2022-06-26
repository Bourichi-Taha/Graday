import "./register.scss";
import logo from '../../../assaets/images/logo-png.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";


const Register = () => {


    return (

        <div className="container">

            <div className="right">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="form">
                    <div className="center">
                        <div className="title">REGISTER</div>
                        <div className="thing">
                            <span className="placeHolder">first name</span>
                        </div>
                        <div className="input email">
                            <input type="text" />
                        </div>
                        <div className="thing">
                            <span className="placeHolder">last name</span>
                        </div>
                        <div className="input email">
                            <input type="text" />
                        </div>
                        <div className="thing">
                            <span className="placeHolder">email</span>
                        </div>
                        <div className="input email">
                            <input type="email" />
                        </div>
                        <div className="thing">
                            <span className="placeHolder">password</span>
                        </div>
                        <div className="input pass">
                            <input type="password" />
                        </div>
                        <div className='loginBtn'>
                            <button>Register</button>
                        </div>
                        <div className="thing lg">
                            <span>easy register with</span>
                        </div>
                        <div className="thing">
                            <button className='fb'><GoogleIcon className='icon' /> google</button>
                            <button className='gg'><FacebookIcon className='icon' /> facebook</button>
                        </div>
                    </div>
                </div>
                <div className="login-div">
                    <span>Already have an account? <Link className="link" to={"/login"}>Login </Link></span>
                </div>
            </div>

        </div>
    )
}

export default Register