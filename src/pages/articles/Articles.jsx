import BodyArticles from '../../components/body-articles/BodyArticles';
import Navbar from '../../components/navbar/Navbar';
import './articles.scss';


const Articles = () => {
  return (
    <div className="articles">
        <Navbar/>
        <BodyArticles/>
    </div>
  )
}

export default Articles