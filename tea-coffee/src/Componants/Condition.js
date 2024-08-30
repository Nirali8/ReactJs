import React from "react";

function Product({ name, inStock }) {
  // console.log(name);

  if (inStock) return <li>{name}</li>;
  else
    return (
      <li>
        <del>{name}</del>
      </li>
    );
}
// function Product(Props) {
//   // console.log(name);
//   return <li>{Props.inStock ? Props.name : <del>{Props.name}</del>}</li>;
// }
const Condition = ({ name, inStock }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        <Product name="Shoes" inStock="true" />
        <Product name="Bags" inStock={true} />
        <Product name="Shirt" inStock={false} />
        <Product name="Jeans" inStock={true} />
        <Product name="Belt" inStock={false} />
        <Product name="Perfumes" inStock={true} />
        <Product name="Cosmetics" inStock={true} />
        <Product name="Laptop" inStock={false} />
      </ul>
    </div>
  );
};

export default Condition;
