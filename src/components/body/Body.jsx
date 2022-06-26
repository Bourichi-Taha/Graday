import './body.scss';
import img from '../../assaets/images/blue-img.png';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="body">
        <div className="first-container">
            <img src={img} alt="" />
            <div className="first-container-abs">
              <span className="title">Trouver ta <b>vibe</b> avec <b>Graday !</b></span>
              <span className="desc"><b>Découvres</b> le métier qui</span>
              <span className="desc">correspond a ton personnalité</span>
              <button><Link to={'/quize'} className='link-quize'>Commencer</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Body