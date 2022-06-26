import './quote.scss';
import img2 from '../../assaets/images/nature-img.png';

const Quote = () => {
    return (
        <div className="answer-card-quote">
            <img src={img2} alt="" />
            <span className="quote">The time is always right to do what is right.</span>
        </div>
    )
}

export default Quote