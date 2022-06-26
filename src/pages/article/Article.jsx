import BodyArticle from '../../components/body-article/BodyArticle';
import Navbar from '../../components/navbar/Navbar';
import './article.scss';


const Article = () => {
  return (
    <div className="article">
        <Navbar/>
        <BodyArticle/>
    </div>
  )
}

export default Article