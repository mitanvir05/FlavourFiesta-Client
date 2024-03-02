import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
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
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title> FlavourFiesta | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img="https://i.ibb.co/Hdc6b3L/banner3.png"
        title={"our menu"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Todays offer"}
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert item */}
      <MenuCategory
        items={desserts}
        title="dessert"
        coverImg="https://i.ibb.co/pbh60z5/Flavour-Fiesta-2.png"
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg="https://i.ibb.co/7bT6FLd/Flavour-Fiesta.png"
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg="https://i.ibb.co/HNnmpS4/Flavour-Fiesta-3.png"
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg='https://i.ibb.co/LdgrXp9/Flavour-Fiesta-5.png'
      ></MenuCategory>
      <MenuCategory
        items={drinks}
        title={"drinks"}
        coverImg='https://i.ibb.co/sQPqN8D/Flavour-Fiesta-4.png'
      ></MenuCategory>
    </div>
  );
};

export default Menu;
