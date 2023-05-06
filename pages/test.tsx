import { useEffect, useRef, useState } from "react"

const Test = () => {
    
    const [state, setState] = useState('');
    const prevS = useRef('')
    
    const el = useRef<HTMLHeadingElement[]>([]) ;
	el.current = [];

    const ref = (e: HTMLHeadingElement) => {
		el.current.push(e);
	}

    const prevH = useRef<HTMLHeadingElement[]>([])

    useEffect(() => {
        console.log(el);
        prevS.current = state;
        var scrolling = false;        
        window.addEventListener('wheel', function(event) {
            if (event.deltaY < 0) {
                
                scrolling = true;
                setState('up')
                setTimeout(() => scrolling = false, 1000) 
                
            }
            if (event.deltaY > 0) {
                
                    scrolling = true;
                    setState('down')
                    setTimeout(() => scrolling = false, 1000) 
                
            }
        });
    })

    return(
        <div className=" bg-red-300 h-screen flex justify-center items-center text-4xl">
            <h1 ref={ref}>previous state is {prevS.current} <br /> curent state is {state}</h1>
            <br />
            <h2 ref={ref}>H2</h2>
            <br />
            <h3 ref={ref}>H3</h3>
        </div>
    )
}

export default Test