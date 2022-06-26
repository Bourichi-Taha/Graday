import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Test = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="test">
            {/* <div className="left">
                    <div className="row bottom">
                        <div className={isFirst ? "capsule full" : "capsule"}>
                            <img src={MAD1} alt="" />
                            <div className="title">SUCCESS</div>

                        </div>
                    </div>
                    <div className="row top">
                        <div className={isFirst ? "capsule full" : "capsule"}>
                            <img src={MAD2} alt="" />
                            <div className="title">SUCCESS</div>
                        </div>
                    </div>
                    <div className="row bottom">
                        <div className={isFirst ? "capsule full" : "capsule"}>
                            <img src={MAD3} alt="" />
                             <div className="title">SUCCESS</div>

                        </div>
                    </div>
                </div> */}
        </div>
    );
};
export default Test