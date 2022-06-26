import BodyProfile from '../../../components/body-profile/BodyProfile';
import Leftbar from '../../../components/leftbar/Leftbar';
import Navbar from '../../../components/navbar/Navbar';
import './profile.scss';

const Profile = () => {
    return (
        <div className='profile'>
            <Navbar />
            <Leftbar/>
            <BodyProfile/>
        </div>
    )
}

export default Profile