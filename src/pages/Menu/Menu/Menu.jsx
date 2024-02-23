import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/Usemenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title> FlavourFiesta | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Dont Miss"}
        heading={"Todays offer"}
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert item */}
      <MenuCategory 
      items={desserts}
      title="Dessert"
      coverImg={dessertImg}

      ></MenuCategory>
      <MenuCategory 
      items={pizza}
      title={"Pizza"}
      coverImg={pizzaImg}

      ></MenuCategory>
      <MenuCategory 
      items={salad}
      title={"salad"}
      coverImg={saladImg}

      ></MenuCategory>
      <MenuCategory 
      items={salad}
      title={"soup"}
      coverImg={soupImg}

      ></MenuCategory>
    </div>
  );
};

export default Menu;
