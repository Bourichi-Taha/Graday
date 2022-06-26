import './cardSelect.scss';
import img from '../../assaets/images/chambre-img.png';


const CardSelect = ({clicked}) => {
    return (
        <>
            <div className="answer-card" onClick={(e) => { clicked(e) }}>
                <img src={img} alt="" />
                <span>Chambre</span>
            </div>
            <div className="answer-card" onClick={(e) => { clicked(e) }}>
                <img src={img} alt="" />
                <span>Chambre</span>
            </div>
            <div className="answer-card" onClick={(e) => { clicked(e) }}>
                <img src={img} alt="" />
                <span>Chambre</span>
            </div>
            <div className="answer-card" onClick={(e) => { clicked(e) }}>
                <img src={img} alt="" />
                <span>Chambre</span>
            </div>
        </>
    )
}

export default CardSelect