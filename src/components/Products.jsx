import React, { useEffect, useState } from "react";
import "../assets/products.css";
import axios from "axios";
import Pagination from "./Pagination";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [curruntPage, setCurruntPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(16);

  useEffect(() => {
    axios
      .get("https://dev.ahura.xyz:3002/api/product/user/filter/?false")
      .then((res) => setProducts(res.data.result.docs))
      .catch((error) => console.log("error api fatch", error));
  }, []);

  const lastProduct = curruntPage * productPerPage;
  const firstProduct = lastProduct - productPerPage;
  const curruntproducts = products.slice(firstProduct, lastProduct);
  return (
    <section className="products-section">
      <div className="container">
        <h1>Products</h1>
        <div className="products-wrap">
          {curruntproducts.map((product) => {
            const {
              _id,
              productBrandData,
              featuredProductImage,
              productName,
              productPrice,
            } = product;
            return (
              <div className="productcard" key={_id}>
                <div className="productimg">
                  <img
                    src={"https://" + featuredProductImage}
                    alt={productName}
                  />
                </div>
                <div className="brandname">
                  <h6>{productBrandData[0].brandName}</h6>
                </div>
                <div className="productname">
                  <h2>{productName}</h2>
                </div>
                <div className="action">
                  <div className="price">
                    <span>{productPrice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        productslength={products.length}
        productPerPage={productPerPage}
        setCurruntPage={setCurruntPage}
      />
    </section>
  );
}
