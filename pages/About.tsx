import { Variants, motion } from "framer-motion";
import React from "react";

const About = (props: { variants: Variants | undefined, direction: number }) => {
    return(
        <motion.div
        variants={props.variants} 
        initial="enter"
		animate="onview"
		exit="exit"
        transition={{
            duration: 1
        }}
        className="h-screen w-screen bg-[rgb(20,20,20)] absolute">
            <div className="h-[20%] flex justify-center items-end text-3xl font-light text-white">
                <h1>ABOUT ME</h1>
            </div>
            <div className=" h-[80%] text-2xl text-center font-thin px-[10%] pt-20 text-white">
                <p>Hello, I am Ahmad Yovan Ardiansyah, I am an informatics engineering student who is interested in programming, my goal is to become a developer</p>    
            </div>
      	</motion.div>
    )
}

export default About;


        

