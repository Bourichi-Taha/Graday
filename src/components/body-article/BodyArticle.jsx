import './bodyArticle.scss';
import img from '../../assaets/images/VTC.jpg';
import DescriptionIcon from '@mui/icons-material/Description';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import img1 from '../../assaets/images/a1.png';
import img2 from '../../assaets/images/b2.png';
import img3 from '../../assaets/images/c3.png';
const BodyArticle = () => {
    return (
        <div className="body-article">
            <div className="article-header-wrap">
                <div className="article-type-abs">Ecole</div>
                <div className="article-header-title">PROFESSIONAL TRAINING PROFESSIONAL OPPORTUNITY ABROAD</div>
            </div>
            <div className="single-article-wrap">
                <div className="single-article-item-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam dolore asperiores error, cupiditate sequi animi a magni cumque architecto reiciendis? Deleniti voluptatem aliquam assumenda odit provident! Perspiciatis, reiciendis impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid ducimus, eum vel vitae quibusdam? Officiis earum id provident incidunt laudantium voluptate similique totam possimus, voluptatem quas, ipsam placeat maxime.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequatur dignissimos odio consequuntur excepturi odit dolor laborum magnam nihil, suscipit ex distinctio porro aperiam recusandae, numquam rem, eius inventore consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam dolore asperiores error, cupiditate sequi animi a magni cumque architecto reiciendis? Deleniti voluptatem aliquam assumenda odit provident! Perspiciatis, reiciendis impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid ducimus, eum vel vitae quibusdam? Officiis earum id provident incidunt laudantium voluptate similique totam possimus, voluptatem quas, ipsam placeat maxime.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequatur dignissimos odio consequuntur excepturi odit dolor laborum magnam nihil, suscipit ex distinctio porro aperiam recusandae, numquam rem, eius inventore consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam dolore asperiores error, cupiditate sequi animi a magni cumque architecto reiciendis? Deleniti voluptatem aliquam assumenda odit provident! Perspiciatis, reiciendis impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid ducimus, eum vel vitae quibusdam? Officiis earum id provident incidunt laudantium voluptate similique totam possimus, voluptatem quas, ipsam placeat maxime.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequatur dignissimos odio consequuntur excepturi odit dolor laborum magnam nihil, suscipit ex distinctio porro aperiam recusandae, numquam rem, eius inventore consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam dolore asperiores error, cupiditate sequi animi a magni cumque architecto reiciendis? Deleniti voluptatem aliquam assumenda odit provident! Perspiciatis, reiciendis impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid ducimus, eum vel vitae quibusdam? Officiis earum id provident incidunt laudantium voluptate similique totam possimus, voluptatem quas, ipsam placeat maxime.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequatur dignissimos odio consequuntur excepturi odit dolor laborum magnam nihil, suscipit ex distinctio porro aperiam recusandae, numquam rem, eius inventore consectetur!

                </div>
                <div className="single-article-item-right">
                    <div className="item-right-buttons">
                        <button className="apply">apply</button>
                        <button className="save">save</button>
                    </div>
                    <div className="item-right-article-card">
                        <div className="top-article-card-item">
                            <img src={img} alt="" />
                            <div className="top-article-card-item-desc">
                                <span className="title-card-item-article">Vacational training corporation</span>
                                <span className="sub-title-card-item-article">Vacational institution</span>
                            </div>
                        </div>
                        <div className="bottom-article-card-item">
                            <h2 className="bottom-article-card-item-title">Opportunity criteria</h2>
                            <div className="bottom-article-card-item-list">
                                <div className="item-article-card-bottom">
                                    <AddLocationAltIcon className='item-article-card-bottom-icon' />
                                    <div className="item-article-card-bottom-container">
                                        <h3>job location</h3>
                                        <span>jordan</span>
                                    </div>
                                </div>
                                <div className="item-article-card-bottom">
                                    <DescriptionIcon className='item-article-card-bottom-icon' />
                                    <div className="item-article-card-bottom-container">
                                        <h3>needed documents</h3>
                                        <span>others</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="articles-similar">
                <h2 className="header-article-similar">ARTICLES SIMILAR</h2>
                <div className="articles-similar-wrap">
                    <div className="articles-similar-card-item">
                        <img src={img1} alt="" className='article-similar-card-item-img' />
                        <div className="article-similar-card-header">
                            <span>product updates</span>
                            <span className='article-similar-card-header-type'>courses</span>
                        </div>
                        <div className="article-similar-card-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, debitis nostrum fugiat voluptatem vel, iusto voluptas quae soluta voluptates repellat adipisci quisquam labore reprehenderit, nihil incidunt unde autem!</div>
                    </div>
                    <div className="articles-similar-card-item">
                        <img src={img1} alt="" className='article-similar-card-item-img' />
                        <div className="article-similar-card-header">
                            <span>product updates</span>
                            <span className='article-similar-card-header-type'>courses</span>
                        </div>
                        <div className="article-similar-card-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, debitis nostrum fugiat voluptatem vel, iusto voluptas quae soluta voluptates repellat adipisci quisquam labore reprehenderit, nihil incidunt unde autem!</div>
                    </div>
                    <div className="articles-similar-card-item">
                        <img src={img1} alt="" className='article-similar-card-item-img' />
                        <div className="article-similar-card-header">
                            <span>product updates</span>
                            <span className='article-similar-card-header-type'>courses</span>
                        </div>
                        <div className="article-similar-card-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, debitis nostrum fugiat voluptatem vel, iusto voluptas quae soluta voluptates repellat adipisci quisquam labore reprehenderit, nihil incidunt unde autem!</div>
                    </div>
                    <div className="articles-similar-card-item">
                        <img src={img1} alt="" className='article-similar-card-item-img' />
                        <div className="article-similar-card-header">
                            <span>product updates</span>
                            <span className='article-similar-card-header-type'>courses</span>
                        </div>
                        <div className="article-similar-card-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, debitis nostrum fugiat voluptatem vel, iusto voluptas quae soluta voluptates repellat adipisci quisquam labore reprehenderit, nihil incidunt unde autem!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyArticle