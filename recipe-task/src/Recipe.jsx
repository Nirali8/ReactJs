import React, { useState } from "react";

// let value;
const Recipe = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  //   let value = "Freezer Breakfast Burritos";
  const onSubmit = (e) => {
    //   value = document.getElementById("inputText").value;
    // e.preventDefault();
    // getRecipeInfo();
    const res = fetch("https://api.sampleapis.com/recipes/recipes")
      // const res = fetch("https://dummyjson.com/recipes")
      // const res = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
          setData(res);
          setValue(document.getElementById("inputText").value);
        console.log("Response ========> ", res);
        // console.log("Value ========> ", value);
      });
  };

  return (
    <div>
      <label>Enter Any Item To Cook : </label>
      <input
        type="text"
        id="inputText"
        // onChange={(e) => {
        //   setValue(e.target.value);
        // //   console.log(value);
        // }}
      ></input>
      <br></br>
      <button className="button" onClick={onSubmit}>
        Search Recipe
      </button>

      {data.map((item) => {
        return (
          <>
            <div>
              {/* {item.title === value ? console.log(item) : console.log(value)} */}
              {item.title === value ? <p>{item.title}</p> : <h1></h1>}
              {item.title === value ? (
                <img src={item.photoUrl} alt="" className="" />
              ) : (
                <h1></h1>
              )}
              {item.title === value ? <p>{item.ingredients}</p> : <h1></h1>}
              {/* <img src={item.photoUrl} alt="" className="" /> */}
              {/* <p>{item.title}</p> */}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Recipe;
