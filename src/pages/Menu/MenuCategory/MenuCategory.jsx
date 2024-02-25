import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="p-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-14 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="card-actions">
          <button className="btn btn-outline  bg-slate-200 border-orange-400 border-0 border-b-4 mt-4 d-block mx-auto uppercase">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
