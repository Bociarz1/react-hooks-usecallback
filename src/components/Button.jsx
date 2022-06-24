import React from "react";

function Button({type, increase}) {
  console.log(`render ${type} button`)
  return ( 
    <>
      <button onClick={increase}>Add</button>
    </>
   );
}
export default React.memo(Button);