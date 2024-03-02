import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/Usemenu";

const ChefRecommend = () => {
  const [menu] = useMenu();

  // const [menus, setMenus] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "salad");
  //       setMenus(popularItems);
  //     });
  // }, []);

  // Slice the menus array to display only the first 3 items
  const displayedMenus = menu.slice(0, 3);

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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to='/order/salad'><button className="btn btn-outline border-0 border-b-4 mt-2 d-block mx-auto uppercase">
          Order now
        </button></Link>
      </div>
    </div>
  );
};

export default ChefRecommend;
