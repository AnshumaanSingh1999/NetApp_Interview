import React from "react";
import { useState } from "react";

const Counterpage=()=>{

    var i=0;

    const[value,setvalue]=useState(0)

    const l=[1,2,3,4,5,6]

    const updatedNums = l.map((number)=>{
        if(number%2==0){
            return <li>{number}</li>;
        }
        
    });

    


    // const buttonclick=()=>{
    //     i=i+1;
    //     console.log(i);
    //     setvalue(i);
    // }

    return(
        <div className="container">
            <button onClick={() => setvalue(value+1)}>Counter</button>


            <p>Count value is {value}</p>

            <p>Values Multiplied is {value*value}</p>

            <p>Even Nos in the List are {updatedNums}</p>
        </div>

    )

}
export default Counterpage;