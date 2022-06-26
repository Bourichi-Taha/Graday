import './rightbar.scss';
import bitch from '../../assaets/images/woman-sitting.png';
import leaves from '../../assaets/images/Leaves.png';
import books from '../../assaets/images/Books.png';

const Rightbar = () => {
  return (
    <div className="rightbar">
      
      <div className="container-right">
        <div className="right">
          <div className="img-flex">
            <img className='img-small' src={leaves} alt="" />
            <img className='img-big' src={bitch} alt="" />
            <img className='img-small' src={books} alt="" />
          </div>
          <div className='desc'>Choisir ton parcours</div>
          <div className='desc'>ideal des maintenant !</div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar