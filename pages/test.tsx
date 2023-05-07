import { log } from "console";
import { useEffect, useRef, useState } from "react"

const Test = () => {

    var a = false;

    function Click() {
        if (a) return
        console.log('hallo');
        console.log('hey');
        for (var i = 1; i < 4; i++) {
            if (i > 1) {
                console.log(i);
            }
            
            
        }
        
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center text-7xl">
            <button onClick={() => Click()}>Click Me!</button>
        </div>
    )
}
export default Test