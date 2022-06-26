import './bodyArticles.scss';
import img1 from '../../assaets/images/a1.png';
import img2 from '../../assaets/images/b2.png';
import img3 from '../../assaets/images/c3.png';

const BodyArticles = () => {
    return (
        <div className="bodyArticles">
            <div className="articles-filters-wrap">
                <div className="articles-filters">
                    <div className="article-filter-item">
                        <div className="article-icon"></div>
                        <div className="article-type">type</div>
                    </div>
                    <div className="article-filter-item">
                        <div className="article-icon"></div>
                        <div className="article-type">location</div>
                    </div>
                    <div className="article-filter-item">
                        <div className="article-icon"></div>
                        <div className="article-type">job</div>
                    </div>
                    <button className="article-filter-item button-art">
                        <div className="article-icon"></div>
                        <div className="article-type">filter</div>
                    </button>
                </div>
            </div>
            <div className="articles-wrap">

                <div className="article-card-item">
                    <img src={img1} alt="" className='article-card-item-img' />
                    <div className="article-card-header">
                        <span>product updates</span>
                        <span className='article-card-header-type'>courses</span>
                    </div>
                    <div className="article-card-title">introducing recordings</div>
                </div>
                <div className="article-card-item">
                    <img src={img2} alt="" className='article-card-item-img' />
                    <div className="article-card-header">
                        <span>product updates</span>
                        <span className='article-card-header-type'>courses</span>
                    </div>
                    <div className="article-card-title">introducing recordings</div>
                </div>
                <div className="article-card-item">
                    <img src={img3} alt="" className='article-card-item-img' />
                    <div className="article-card-header">
                        <span>product updates</span>
                        <span className='article-card-header-type'>courses</span>
                    </div>
                    <div className="article-card-title">introducing recordings</div>
                </div>
                <div className="article-card-item">
                    <img src={img1} alt="" className='article-card-item-img' />
                    <div className="article-card-header">
                        <span>product updates</span>
                        <span className='article-card-header-type'>courses</span>
                    </div>
                    <div className="article-card-title">introducing recordings</div>
                </div>
                <div className="article-card-item">
                    <img src={img2} alt="" className='article-card-item-img' />
                    <div className="article-card-header">
                        <span>product updates</span>
                        <span className='article-card-header-type'>courses</span>
                    </div>
                    <div className="article-card-title">introducing recordings</div>
                </div>
                <div className="article-card-item">
                    <img src={img3} alt="" className='article-card-item-img' />
                    <div className="article-card-header">
                        <span>product updates</span>
                        <span className='article-card-header-type'>courses</span>
                    </div>
                    <div className="article-card-title">introducing recordings</div>
                </div>

            </div>
            <div className="articles-button-wrap">
                <div className="button-articles">
                    <button>Show more</button>
                </div>
            </div>
        </div>
    )
}

export default BodyArticles