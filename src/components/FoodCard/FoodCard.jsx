const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
  
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
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400 d-block mx-auto uppercase">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
  