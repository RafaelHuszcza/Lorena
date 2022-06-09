import React, { useState } from "react";


import "./styles.css";
import NewsDoc from "../../contentNews/news.json"



const News = () => {

  const [news, setNews] = useState(NewsDoc);
  


  return (
    <div className="wrap">
      <div className="cards-container">
      {news.map(card => <div className="card"><img src={card.image}></img></div>)}           
 

      </div>     
    </div>
  );
};

export default News;
