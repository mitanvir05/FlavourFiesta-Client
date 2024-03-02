import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/bNhQtLJ/01.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/G5SSRHQ/02.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/QYfXCvj/03.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/5KLbBzf/04.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/4V1YZy6/05.png" alt="" />
        </div>
        <div>
          <img
            src="https://i.ibb.co/qDXm72n/06.png"alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
