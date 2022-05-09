import React, { useEffect, useState } from "react";
import "./store.css";
// import ReactPaginate from 'react-paginate'

function Store() {
  const [content, setContent] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6",
        {
          method: "GET",
        }
      );
      const products = await response.json();
      // setContent(JSON.stringify(products.data.products));
      setContent(products.data.products);
    };
    getProducts();
  }, []);


  return (
    <div className="Store" id="Store">
     
      <div>
        {/* {console.log(JSON.stringify(content))}
        {content.length > 0 &&
          content.map((product) => (
            <div key={content._id}>
              <ul>
                <li>{product}</li>
                </ul>
            </div>
          ))} */}

      </div>
  
    </div>
  );
}

export default Store;
