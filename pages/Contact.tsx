import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
    return(
        <motion.div 
        initial={{ y: '100%', opacity: 0}}
		animate={{ y: '0', opacity: 1}}
		exit={{ y: '100%', opacity: 0}}
        transition={{
            duration: 1
        }}
        className="h-screen w-screen bg-[rgb(20,20,20)] absolute">
            <div className="h-[20%] flex justify-center items-end text-3xl font-light text-white">
                <h1>CONTACT ME</h1>
            </div>
            <div className="h-[80%] text-white text-2xl text-center font-thin pt-20">
                <p>ahmadyovanardiansyah@gmail.com</p>
            </div>
        </motion.div>
    )
}

export default Contact;