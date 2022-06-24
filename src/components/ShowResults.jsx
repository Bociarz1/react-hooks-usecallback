import React from "react";

function ShowResults({type, value}) {
  console.log(`render ${type} result`)
  return ( 
    <>
      Amount of {type}: {value}
    </>
   );
}
// 1. use React.memo to do not rerender ShowResults when useState value is te same
export default React.memo(ShowResults);