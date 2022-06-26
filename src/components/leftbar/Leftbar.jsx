import './leftbar.scss';

import i1 from '../../assaets/icons/home.png';
import i2 from '../../assaets/icons/web.png';
import i3 from '../../assaets/icons/comment.png';
import i4 from '../../assaets/icons/letter.png';
import i5 from '../../assaets/icons/static.png';
import i6 from '../../assaets/icons/setting.png';
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';
const Leftbar = () => {
    const [startClientX,setStartClientX] = useState(0);
    const [endClientX,setEndClientX] = useState(0);
    const [swiped, setSwiped] = useState(false);
    const swipeHandler = () => {
        if (startClientX !== endClientX) {
            if (startClientX < endClientX) {
                setSwiped(true);
            }else{
                setSwiped(false);
            }
        }else{
            setSwiped(prev => !prev);
        }
    }
    return (
        <div className={swiped ? "leftbar mobile" : "leftbar"} onTouchStart={(touchStartEvent) => setStartClientX(touchStartEvent.changedTouches[0].clientX)} onTouchMove={(touchMoveEvent) => setEndClientX(touchMoveEvent.changedTouches[0].clientX)} onTouchEnd={() => swipeHandler()}>
            <div className="nav-toggle-left" >
                {
                    swiped ? <ArrowBack className='icon-arrow'/> : <ArrowForward className='icon-arrow'/>
                }
            </div>
            <div className='container-left'>
                <ul>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }} className='item '>
                        <li className='item active'>
                            <img src={i1} alt="" className='ic' />
                            <span className="text">Dashboard</span>
                        </li>
                    </Link>
                    <Link to={'/profile'} style={{ textDecoration: 'none', color: 'black' }} className='item '>

                        <li className='item'>
                            <img src={i3} alt="" className='ic' />
                            <span className="text">Profile</span>
                        </li>
                    </Link>
                    <Link to={'/articles'} style={{ textDecoration: 'none', color: 'black' }} className='item '>

                        <li className='item'>
                            <img src={i4} alt="" className='ic' />
                            <span className="text">Articles</span>
                        </li>
                    </Link>
                    <Link to={'/profile'} style={{ textDecoration: 'none', color: 'black' }} className='item '>

                        <li className='item'>
                            <img src={i5} alt="" className='ic' />
                            <span className="text">Settings</span>
                        </li>
                    </Link>
                    <Link to={'/quize'} style={{ textDecoration: 'none', color: 'black' }} className='item '>

                        <li className='item'>
                            <img src={i6} alt="" className='ic' />
                            <span className="text">Results</span>
                        </li>
                    </Link>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }} className='item '>

                        <li className='item'>
                            <img src={i2} alt="" className='ic' />
                            <span className="text">Help</span>
                        </li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Leftbar