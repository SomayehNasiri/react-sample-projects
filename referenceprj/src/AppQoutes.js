import React,{useState} from "react";
import Categories from "./components/Categories";

import Quote from "./components/Quote";
import { getCategories,getQoute } from "./qoutesService";

const AppQoutes = () => {
    const [categories,setCategories]=useState([])
  return (
    <div className="quote-master">
      <Categories
        categories={["Brainy", "Funny"]}
        selected={"Funny"}
        onSelected={category => {}}
      />
      <Quote
        quote={"The first five days after the weekend are always the hardest."}
        author={"A Lazy Cat"}
      />
    </div>
  );
};

export default AppQoutes;
