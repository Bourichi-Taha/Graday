import './progbar.scss';

const Progbar = ({percent}) => {
    
  return (
    <div className="progbar">
        <div className="linear" style={{width:`${percent}%`}}></div>
    </div>
  )
}

export default Progbar