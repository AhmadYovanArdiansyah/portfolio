import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
import PortfolioSection from "@/pages/PorfolioSection"
import ContactSection from "@/pages/ContactSection"
import { useEffect, useRef, useState} from "react";
import Script from 'next/script';

const Home = () => {

	var currentPage = 0;
	var scrolling = false;

	const [state, setState] = useState(false);
	const sections = useRef<HTMLElement[]>([]);
	const prevState = useRef()
	sections.current = [];

	const ref = (e: HTMLElement) => {
		if (e == null) return
		sections.current.push(e);
		console.log(sections.current);
	}

	const scrollTo = (n: number) => {
		scrolling = true;
		sections.current[currentPage].classList.remove('active');
		sections.current[n].classList.add('active');
		for (var i = 2; i < n + 1; i++) {
			console.log(i);
			if (n > 1) sections.current[i - 1].classList.remove('duration-1000');
			sections.current[i - 1].classList.add('-translate-y-full');
			sections.current[i - 1].classList.remove('translate-y-full');
		}
		setTimeout(() => {
			for (var i = 0; i < n; i++) {
				sections.current[n - i].classList.add('duration-1000');
			}
			scrolling = false
		}, 900);
		currentPage = n;
	}

	const scroll = (e: string) => {
		if (scrolling == false) {
			scrolling = true;
			sections.current[currentPage]?.classList.remove('active');
			if (e == 'up') {
				//setState(false)
				console.log(currentPage);
				sections.current[currentPage - 1]?.classList.add('active');
				sections.current[currentPage]?.classList.add('translate-y-full');
				sections.current[currentPage]?.classList.remove('-translate-y-full');	
			} else if (e == 'down') {
				//setState(true)
				console.log(currentPage);
				sections.current[currentPage + 1]?.classList.add('active');
				sections.current[currentPage]?.classList.add('-translate-y-full');
				sections.current[currentPage]?.classList.remove('translate-y-full');
			}
			setTimeout(() => scrolling = false, 900);
		}
	}

	const scrollUp = () => {
		if (currentPage == 0) {
			document.body.classList.remove('norefresh');
			return;
		}
		document.body.classList.add('norefresh');
		scroll('up')
		currentPage--;
	}

	const scrollDown = () => {
		if (currentPage === (sections.current.length - 1)) return;
		scroll('down')
		currentPage++;
	}

    useEffect(() => {
    	window.addEventListener('wheel', function(event) {
			if (scrolling) return;
				if (event.deltaY < 0) scrollUp();
				if (event.deltaY > 0) scrollDown();
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
				console.log(touchstartY - touchendY);
				if (scrolling) return;
				if (touchendY < touchstartY) scrollDown();
		  		if (touchendY > touchstartY) scrollUp();
			}
		}
		
    });

	return(
		<div>
			<main className="relative h-screen w-screen overflow-hidden bg-[rgb(20,20,20)]">	
				<HeroSection pageId={scrollTo} ref={ref} />
				<AboutSection ref={ref} />
				<PortfolioSection ref={ref} />
				<ContactSection ref={ref} />
			</main>
		</div>
	
	)
}

export default Home
