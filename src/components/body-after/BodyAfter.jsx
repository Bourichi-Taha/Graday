import Filters from '../filters/Filters';
import './bodyAfter.scss';
import img from '../../assaets/images/blue-img.png';
import woman from '../../assaets/images/woman-img.png';
import nature from '../../assaets/images/nature-img.png';

const BodyAfter = () => {
    return (
        <div className="body">
            <div className="img-container">
                <img src={img} alt="" />
                <div className="img-abs">
                    <img src={woman} alt="" />
                    <span>hello back to us, Manal </span>
                </div>
            </div>
            <div className="filters-comp">
                <Filters />
            </div>
            <div className="body-articles">
                <div className="article-card">
                    <div className="article-card-left">
                        <div className="article-card-title">Comment améliorer son orthographe ?</div>
                        <div className="article-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita magni dolorum eaque, quae quod, ipsum quasi, molestias maiores recusandae accusantium! Commodi et ipsa velit.</div>
                        <button className="article-card-button"><span>voir plus</span><span>{'>'}</span></button>
                    </div>
                    <div className="article-card-right">
                        <img src={nature} alt="" />
                    </div>
                </div>
                <div className="article-card">
                    <div className="article-card-left">
                        <div className="article-card-title">Comment améliorer son orthographe ?</div>
                        <div className="article-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita magni dolorum eaque, quae quod, ipsum quasi, molestias maiores recusandae accusantium! Commodi et ipsa velit.</div>
                        <button className="article-card-button"><span>voir plus</span><span>{'>'}</span></button>
                    </div>
                    <div className="article-card-right">
                        <img src={nature} alt="" />

                    </div>
                </div>
                <div className="article-card">
                    <div className="article-card-left">
                        <div className="article-card-title">Comment améliorer son orthographe ?</div>
                        <div className="article-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita magni dolorum eaque, quae quod, ipsum quasi, molestias maiores recusandae accusantium! Commodi et ipsa velit.</div>
                        <button className="article-card-button"><span>voir plus</span><span>{'>'}</span></button>
                    </div>
                    <div className="article-card-right">
                        <img src={nature} alt="" />

                    </div>
                </div>
                <div className="article-card">
                    <div className="article-card-left">
                        <div className="article-card-title">Comment améliorer son orthographe ?</div>
                        <div className="article-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita magni dolorum eaque, quae quod, ipsum quasi, molestias maiores recusandae accusantium! Commodi et ipsa velit.</div>
                        <button className="article-card-button"><span>voir plus</span><span>{'>'}</span></button>
                    </div>
                    <div className="article-card-right">
                        <img src={nature} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyAfter