import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
import WorkSection from "@/pages/WorkSection"
import ContactSection from "@/pages/ContactSection"
import {useEffect, useRef, useState} from "react";

const Home = () => {

	var currentPage = 1;
	var scrolling = false;

	const pages = [
		{
			id : 1,
			page : HeroSection,
			clasName : "-translate-y-full active"
		},
		{
			id : 2,
			page : AboutSection,
			clasName : "translate-y-full"
		},
		{
			id : 3,
			page : WorkSection,
			clasName : "translate-y-full"
		},
		{
			id : 4,
			page : ContactSection,
			clasName : "translate-y-full"
		}
	]

	const sections = useRef<HTMLElement[]>([]);

	const scrollTo = (n: number) => {
		scrolling = true;
		sections.current[currentPage].classList.remove('active');
		sections.current[n].classList.add('active');
		for (var i = 1; i < n; i++) 
			if (i > 1) {
				sections.current[i].classList.remove('duration-1000');
				sections.current[i].classList.add('-translate-y-full');
				sections.current[i].classList.remove('translate-y-full');
			}
		setTimeout(() => {
			for (var i = 1; i < n; i++) if (i > 1) sections.current[i].classList.add('duration-1000');
			scrolling = false}, 900);
		currentPage = n;
	}

	const scroll = (e: string) => {
		scrolling = true
		if (e == 'up') {
			sections.current[currentPage].classList.remove('active');
			sections.current[currentPage - 1].classList.add('active');
			sections.current[currentPage].classList.add('translate-y-full');
			sections.current[currentPage].classList.remove('-translate-y-full');
			currentPage--;
		}
		
		if (e == 'down') {
			sections.current[currentPage].classList.remove('active');
			sections.current[currentPage + 1].classList.add('active');
			sections.current[currentPage].classList.add('-translate-y-full');
			sections.current[currentPage].classList.remove('translate-y-full');
			currentPage++;
		}
		setTimeout(() => scrolling = false, 900);
	}

    useEffect(() => {
		currentPage > 1? document.body.classList.remove('norefresh') : document.body.classList.add('norefresh');

    	window.addEventListener('wheel', function(event) {
			if (scrolling) return;
				if (event.deltaY < 0) 
					if (currentPage > 1) scroll('up')
				if (event.deltaY > 0) 
					if (currentPage < (sections.current.length - 1)) scroll('down')
				
        });

		let touchstartY = 0
		let touchendY = 0

		document.addEventListener('touchstart', e => touchstartY = e.changedTouches[0].screenY)

		document.addEventListener('touchend', e => {
			touchendY = e.changedTouches[0].screenY
		  	checkDirection()
		})

		function checkDirection() {
			if (touchstartY - touchendY > 100 || touchstartY - touchendY < -100) {
				if (scrolling) return;
					if (touchendY < touchstartY) 
						if (currentPage < (sections.current.length - 1)) scroll('down')
		  			if (touchendY > touchstartY) 
						if (currentPage > 1) scroll('up')
			}
		}
		
    });

	return(
		<div>
			<main className="relative h-screen w-screen overflow-hidden bg-[rgb(20,20,20)]">
				{pages.map(page => 
					<section 
					key={page.id} 
					className={"absolute h-screen w-screen ease-in-out duration-1000 " + page.clasName}
					ref={(element) => {sections.current[page.id] = element as HTMLElement}}>
						{<page.page pageId={scrollTo} />}
					</section>
				)}
				
			</main>
		</div>
	
	)
}

export default Home
