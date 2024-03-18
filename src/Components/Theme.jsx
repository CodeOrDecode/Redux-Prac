import React from "react";
import { useDispatch } from "react-redux";
import { DARKTHEME, LIGHTTHEME } from "../Redux/action";
import { useSelector } from "react-redux";

const Theme = () => {
  const dispatch = useDispatch();

  const {theme} = useSelector((store)=>{
    return store.themereducer
  })

  // console.log(theme);

  function handleDark() {
    dispatch({ type: DARKTHEME, payload: "dark theme " });
  }

  function handleLight() {
    dispatch({ type: LIGHTTHEME, payload: "light theme" });
  }

  return (
    <div>
      <h3>theme : {theme}</h3>
      <button onClick={handleDark}>Dark Theme</button>
      <button onClick={handleLight}>Light Theme</button>
    </div>
  );
};

export default Theme;
