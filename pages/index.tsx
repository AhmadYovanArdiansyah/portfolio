import {  useEffect, useRef, useState} from "react";

export default function Home() {

	var currentPage = 0;
	var scrolling = false;

	const sections = useRef<HTMLElement[]>([]) ;
	sections.current = [] ;

	const ref = (e: HTMLElement) => {
		sections.current.push(e);
	}

	const scrollTo = (n: number) => {
		scrolling = true;
		sections.current[currentPage]?.classList.remove('active');
		sections.current[n]?.classList.add('active');
		for (var i = 2; i < n + 1; i++) {
			console.log(i);
			if (n > 1) sections.current[i - 1]?.classList.remove('anim');
			sections.current[i - 1]?.classList.add('hideup');
			sections.current[i - 1]?.classList.remove('hidedown');
		}
		setTimeout(() => {
			sections.current[n - 1]?.classList.add('anim');
			sections.current[n - 2]?.classList.add('anim');
			scrolling = false
		}, 900);
		currentPage = n;
	}

	const scroll = (e: string) => {
		scrolling = true;
		sections.current[currentPage]?.classList.remove('active');
		if (e == 'up') {
			sections.current[currentPage - 1]?.classList.add('active');
			sections.current[currentPage]?.classList.add('hidedown');
			sections.current[currentPage]?.classList.remove('hideup');	
		} else if (e == 'down') {
			sections.current[currentPage + 1]?.classList.add('active');
			sections.current[currentPage]?.classList.add('hideup');
			sections.current[currentPage]?.classList.remove('hidedown');
		}
		setTimeout(() => scrolling = false, 900);
	}
	const scrollUp = () => {
		if (currentPage == 0) {
			document.body.classList.remove('norefresh');
			return;
		}
		document.body.classList.add('norefresh');
		scroll('up');
		currentPage--;
	}

	const scrollDown = () => {
		if (currentPage === (sections.current.length - 1)) return;
		scroll('down');
		currentPage++;
	}
	
    useEffect(() => {
    	window.addEventListener('wheel', function(event) {
			if (scrolling) return;
				if (event.deltaY < 0) scrollUp();
				else if (event.deltaY > 0) scrollDown();
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
			<main>	
				<section className="hero anim -translate-y-full active" ref={ref}>
					<div className="container">
						<div className="main-text">
							<h1>AHMAD YOVAN</h1>
							<h1>PORTFOLIO</h1>
						</div>
						<nav>
        		    <ul>
        		        <li><a onClick={() => scrollTo(1)}>ABOUT ME</a></li>
        		        <li><a onClick={() => scrollTo(2)}>MY PORTFOLIO</a></li>
        		        <li><a onClick={() => scrollTo(3)}>CONTACT ME</a></li>
        		    </ul>
        		</nav>	
					</div>
				</section>
				<section className="about anim" ref={ref} >
        		    <div className="header">
        		        <h1>ABOUT ME</h1>
        		    </div>
        		    <div className="content">
        		        <p>Hello, I am Ahmad Yovan Ardiansyah, I am an informatics engineering student who is interested in programming, my goal is to become a developer</p>    
        		    </div>
        		</section>
				<section className="portfolio anim" ref={ref}>
        		    <div className="header">
        		        <h1>PORTFOLIO</h1>
        		    </div>
        		    <div className="content">
        		        <div className="outer">
        		            <div className="inner">
        		                <p>Game Development</p>
        		            </div>
        		        </div>
        		        <div className="outer">
        		            <div className="inner">
        		                <p>Web Development</p>
        		            </div>
        		        </div>
        		        <div className="outer">
        		            <div className="inner">
        		                <p>Mobile Development</p>
        		            </div>
        		        </div>
        		    </div>
        		</section>
				<section className="contact anim" id="contact" ref={ref}>
        		    <div className="header">
        		        <h1>CONTACT ME</h1>
        		    </div>
        		    <div className="content">
        		        <p>ahmadyovanardiansyah@gmail.com</p>
        		    </div>
        		</section>
			</main>
		</div>
	)
}
