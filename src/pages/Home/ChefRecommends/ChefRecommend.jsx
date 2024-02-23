import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommend = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "salad");
        setMenus(popularItems);
      });
  }, []);

  // Slice the menus array to display only the first 3 items
  const displayedMenus = menus.slice(0, 3);

  return (
    <div>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommend"}
      ></SectionTitle>
      
      <div className="grid md:grid-cols-3 ">
        {displayedMenus.map((menu) => (
          <div key={menu._id}>
            <div className="card  ">
              <figure className="px-10 pt-10">
                <img src={menu.image} alt="img" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{menu.name}</h2>
                <p>{menu.recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-4 mt-4 d-block mx-auto uppercase"> Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
