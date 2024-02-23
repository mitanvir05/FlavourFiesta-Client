import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommends/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <ChefRecommend></ChefRecommend>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;