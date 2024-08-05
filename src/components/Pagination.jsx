import React from "react";

export default function Pagination({ productslength, productPerPage , setCurruntPage}) {
  let pages = [];

  for (let i = 1; i < Math.ceil(productslength / productPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return <button key={index} onClick={()=>setCurruntPage(page)}>{page}</button>
      })}
    </div>
  );
}
