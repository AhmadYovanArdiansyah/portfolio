import React from "react";
import { pages } from "@/components/page"
import { motion } from "framer-motion";

const Home = (props: {gotopage: (n: number | undefined) => void}) => {
    return(
        <>
			<motion.div
			initial={{ y: '-100%'}}
			animate={{ y: '0'}}
			exit={{ y: '-100%'}}
			transition={{
				duration: 1
			}}
			className="w-screen h-screen absolute bg-gradient-to-b from-black to-[rgb(20,20,20)] flex flex-col justify-center items-center gap-40 pt-40">
				<div className=" text-6xl font-noticia-text text-white text-center overflow-hidden">
					<motion.h1
					initial={{ y: "200%"}}
					animate={{ y: 0}}
					transition={{
						delay: .5,
						duration: 1
					}} 
					className=" overflow-hidden">AHMAD YOVAN</motion.h1>
					<motion.h1 
					initial={{ y: "100%"}}
					animate={{ y: 0}}
					transition={{
						delay: 1,
						duration: 1
					}}
					className=" text-4xl">PORTFOLIO</motion.h1>
				</div>
				<nav className="">
        		    <ul className="flex gap-20 font-monda text-white overflow-hidden">
						{pages.map((item, index) => {if (index > 0) 
							return <motion.li 
							initial={{ y: "100%"}}
							animate={{ y: 0}}
							transition={{
								delay: 1,
								duration: 1
							}} 
							key={index}><a onClick={() => props.gotopage(item.pageId)}>{item.page}</a></motion.li>
						})}
        		    </ul>
        		</nav>	
			</motion.div>
			
		</>
    )
}

export default Home;


        

