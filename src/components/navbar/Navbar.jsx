import './navbar.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assaets/images/logo-png.png';
import pic from '../../assaets/images/login-img-1.png';
import { Link } from 'react-router-dom';
const Navbar = ({progress}) => {
    return (
        <div className="main-navbar">
            <div className="navbar">
                <Link to={'/home'}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="search">
                    <input type="text" className="search-bar" />
                    <SearchIcon className='search-icon' />
                </div>
                <div className="right">
                    <div className="icons">
                        <NotificationsIcon className='first' />
                        <MessageIcon className='first' />
                    </div>
                    <Link to={'/profile'} className="profile-icons" >
                        <img src={pic} alt="" className="profile-img" />
                        <span className="username">taha bourichi</span>
                    </Link>
                </div>
                {progress && <div className="progress-bar"></div>}
                
            </div>
        </div>
    )
}

export default Navbar