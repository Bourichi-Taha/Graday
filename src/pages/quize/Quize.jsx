import Navbar from '../../components/navbar/Navbar';
import './quize.scss';
import Quote from '../../components/quote/Quote';
import FormQuize from '../../components/form-quize/FormQuize';
import CardSelect from '../../components/cards-select/CardSelect';

const Quize = () => {
  function clicked(e) {
    const cards = document.querySelectorAll('.answer-card');
    cards.forEach((card) => {
      return card.classList.remove('active');
    });
    if (e.target.classList.contains('answer-card')) {
      e.target.classList.add('active');
    } else {
      e.target.parentElement.classList.add('active');
    }
  }
  return (
    <div className="quize">
      <Navbar progress />
      <div className="quize-container">
        <div className="quize-title">1- What is your nationality? </div>
        <div className="answers">
          {/* pictures select */}

          {/* <CardSelect clicked={clicked}/> */}

          {/*
          form */}
          <FormQuize/>

          {/* quote  */}

          {/* <Quote/> */}
        </div>
      </div>

      <div className="quize-buttons">
        <button className='prev btn'>previous</button>
        <button className='next btn'>next</button>
      </div>
    </div>
  )
}

export default Quize