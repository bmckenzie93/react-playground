import React from 'react';

const sprayPaint = (props) => {
  return(
    <div>
      <h2>{props.brand}</h2>
      <p>Price: {props.price}</p>
      <p>{props.children}</p>
    </div>
  )  
};

export default sprayPaint;