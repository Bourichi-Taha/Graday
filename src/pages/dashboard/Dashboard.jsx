import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Body from '../../components/body/Body';
import './dashboard.scss';
import BodyAfter from '../../components/body-after/BodyAfter';
import RightbarAfter from '../../components/rightbar-after/RightbarAfter';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar/>
            <Leftbar/>
            {/* <Rightbar/> */}
            <RightbarAfter/>
            {/* <Body/> */}
            <BodyAfter/>
        </div>
    )
}


export default Dashboard