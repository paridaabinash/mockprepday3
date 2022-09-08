import React, { useState } from 'react';
import Child from "./Child"

function Parent(){
   
  const[data, setData] = useState(" Send Data");

  const parentToChild = () =>{
     setData("this is data sending from parent to child");
     console.log("Sent successfully");
  }

  return(
    <div>
    <h1>2- What is UseState Hook ?(Implementation)</h1>
      <h3>Data transfer from Parent to Child</h3>
      <Child parentToChild={data}/>
      <button type="button" class="btn btn-danger" onClick={() =>parentToChild()}>Click Parent</button>
    </div>
  )
}

export default Parent;