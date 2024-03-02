import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/Usemenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu,setMenu]=useState([])
  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         const popularItems = data.filter(item=>item.category==='popular')
  //         setMenu(popularItems)
  //     })
  // },[])
  return (
    <div className="mb-10">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Choice"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to='/menu'><button className="btn btn-outline border-0 border-b-4 mt-4 d-block mx-auto">
          View Full Menu
        </button></Link>
      </div>
    </div>
  );
};

export default PopularMenu;
