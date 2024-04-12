import Banner from "./Banner";
import Introduction from "./Introduction";
import NiogBiggopti from "./NiogBiggopti";
import Notice from "./Notice";
import ShebaSomuho from "./ShebaSomuho";
import Sochetonota from "./Sochetonota";

const Home = () => {
    return (
        <div className="px-3">
            <Banner></Banner>
            <Introduction></Introduction>
            <Notice></Notice>
            <NiogBiggopti></NiogBiggopti>
            <ShebaSomuho></ShebaSomuho>
            <Sochetonota></Sochetonota>
            
        </div>
    );
};

export default Home;