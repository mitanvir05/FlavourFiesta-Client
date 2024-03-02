import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-black pt-10 my-10">
      <SectionTitle
        subHeading="Check It Out"
        heading="featured item"
      ></SectionTitle>
      <div className="md:flex justify-center bg-gray-700 bg-opacity-35  items-center pb-20 px-36">
        <div>
          <img src='https://i.ibb.co/pZHgsXb/Thanks-Giving-2.png' alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 09,2009</p>
          <p className="uppercase">Where can i get some ?</p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            optio autem omnis quidem distinctio laborum assumenda quia cum
            consequuntur ut.
          </p>
          <Link to='/order/salad'> <button className="btn btn-outline border-0 border-b-4 mt-4 "> Order Now</button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default Featured;
