import React, { useState } from "react";
import KakaoMap from "./KakaoMap";
import StsGnb from "../src/component/stsGnb";

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    console.log("inputText-= " + inputText);
    console.log("place-= " + place);
  };

  return (
    <>
      <StsGnb></StsGnb>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">검색</button>
      </form>
      <KakaoMap searchPlace={place} />
    </>
  );
};

export default SearchPlace;
