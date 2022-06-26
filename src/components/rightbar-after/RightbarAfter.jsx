import './rightbarAfter.scss';
import man from '../../assaets/images/man-img.png';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';

const RightbarAfter = () => {
  const [startClientX, setStartClientX] = useState(0);
  const [endClientX, setEndClientX] = useState(0);
  const [swiped, setSwiped] = useState(false);
  const swipeHandler = () => {
    if (startClientX !== endClientX) {
      if (startClientX > endClientX) {
        setSwiped(true);
      } else {
        setSwiped(false);
      }
    } else {
      setSwiped(prev => !prev);
    }
  }
  return (
    <div className={swiped ? "rightbar-after mobile" : "rightbar-after"} onTouchStart={(touchStartEvent) => setStartClientX(touchStartEvent.changedTouches[0].clientX)} onTouchMove={(touchMoveEvent) => setEndClientX(touchMoveEvent.changedTouches[0].clientX)} onTouchEnd={() => swipeHandler()}>
      <div className="nav-toggle-right" >
        {swiped ? <ArrowForward className='icon-arrow' /> : <ArrowBack className='icon-arrow' />}
      </div>
      <div className="container-right-after">
        <div className="right-after">
          <div className="img-after-right">
            <img src={man} alt="" />
          </div>
          <div className="result-graph-right">
            <div className="graph-right"><span>78%</span></div>
            <div className="text-result-right">Créatif</div>
          </div>
          <div className="result-types-right">
            <span className="result-right-title"><b>Voici tes centres d'interet :</b></span>
            <div className="result-types-choices">
              <div className="interest-card">Arts</div>
              <div className="interest-card">Lecture</div>
              <div className="interest-card">Voyage</div>
            </div>
          </div>
          <div className="right-after-footer">
            <div className="right-after-desc">Il est temps de découvrir</div>
            <div className="right-after-desc">plus d'opportunités</div>
            <div className="right-after-link">En savoire plus</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightbarAfter