import React from "react";
import HeroBackground from "@/components/hero-background";

interface strucProps {
	pageId(n: number): void
}

const data = [
	{
		page: "ABOUT ME",
		pageId: 2,
	},
	{
		page: "MY WORK",
		pageId: 3
	},
	{
		page: "CONTACT ME",
		pageId: 4
	}
]

const Hero = (props:strucProps) => {
    return(
        <>
			<div className="w-full h-full text-white flex flex-col justify-center gap-40 items-center absolute z-50 pt-40">
				<div className=" text-6xl font-noticia-text text-center">
					<h1>AHMAD YOVAN</h1>
					<h1 className=" text-4xl">PORTFOLIO</h1>
				</div>
				<nav className="">
        		    <ul className="flex gap-20 font-monda">
						{data.map(item => (
							<li key={item.pageId}><a onClick={() => {props.pageId(item.pageId)}}>{item.page}</a></li>
						))}
        		    </ul>
        		</nav>	
			</div>
			<HeroBackground />
		</>
    )
}

export default Hero;


        

