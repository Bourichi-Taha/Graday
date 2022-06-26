import './bodyProfile.scss';
import img from '../../assaets/images/man-img.png';
// import { Link } from 'react-router-dom';

const BodyProfile = () => {
  return (
    <div className="bodyProfile">
      <div className="card-profile">
        <div className="profile-top">
          <div className="avatar-profile">
            <span>your avatar</span>
            <div className="avatar-border">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="upload-avatar">
            <button>upload new</button>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-form-item">
            <div className="placeHolder-profile">First Name</div>
            <div className="input-profile">
              <input type="text" />
            </div>
          </div>
          <div className="profile-form-item">
            <div className="placeHolder-profile">Last Name</div>
            <div className="input-profile">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-profile expended">
        <div className="profile-item">
          <div className="profile-form-item">
            <div className="placeHolder-profile-item">Phone</div>
            <div className="input-profile-item">
              <input type="text" />
            </div>
          </div>
          <div className="profile-form-item">
            <div className="placeHolder-profile-item">Email</div>
            <div className="input-profile-item">
              <input type="email" />
            </div>
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-form-item">
            <div className="placeHolder-profile-item">City</div>
            <div className="input-profile-item">
              <input type="text" />
            </div>
          </div>
          <div className="profile-form-item">
            <div className="placeHolder-profile-item">Country</div>
            <div className="input-profile-item">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-form-item">
            <div className="placeHolder-profile-item">Street</div>
            <div className="input-profile-item">
              <input type="text" />
            </div>
          </div>
          <div className="profile-form-item">
            <div className="upload-avatar-item">
              <button>update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyProfile
