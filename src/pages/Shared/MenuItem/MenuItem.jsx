const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return <div className="flex space-x-5">
    <img className="w-[120px]" src={image} alt="" />
    <div >
        <h3 className="uppercase">{name} -----------------</h3>
    <p>{recipe}</p>
    </div>
    <p>${price}</p>
  </div>
};

export default MenuItem;
