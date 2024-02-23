import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-10">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-45  items-center pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 09,2009</p>
          <p className="uppercase">Where can i get some ?</p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            optio autem omnis quidem distinctio laborum assumenda quia cum
            consequuntur ut.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 "> Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
