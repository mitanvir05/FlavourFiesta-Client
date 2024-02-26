import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCart()
  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts",cartItem)
      .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch the cart to update cart items
          refetch()
        }
      })



    } else {
      Swal.fire({
        title: "You are not logged in !",
        text: "Please log in to add cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login !",
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to log in page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl w-96 relative">
      <figure className="px-10 pt-10 relative">
        <img src={image} alt="img" className=" rounded-lg" />
        <p className="absolute top-0 right-0 bg-slate-950 text-white px-5 mt-2">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400 d-block mx-auto uppercase"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
