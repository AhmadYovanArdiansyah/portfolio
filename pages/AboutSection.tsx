import React from "react";

const About = ({},ref: React.LegacyRef<HTMLElement> | undefined) => {
    return(
        <section className="absolute h-full w-full text-white translate-y-full ease-in-out duration-1000" ref={ref} >
              <div className="h-[20%] flex justify-center items-end text-3xl font-light">
                  <h1>ABOUT ME</h1>
              </div>
              <div className=" h-[80%] text-2xl text-center font-thin px-[10%] pt-20">
                  <p>Hello, I am Ahmad Yovan Ardiansyah, I am an informatics engineering student who is interested in programming, my goal is to become a developer</p>    
              </div>
      	</section>
    )
}

const forwardRef = React.forwardRef<HTMLElement>(About)
export default forwardRef;


        

