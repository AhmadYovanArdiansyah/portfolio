import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { pages } from '@/components/page'


var scrolling = false
var current = 0

export default function App({ Component, pageProps }: AppProps) {

	const [direction, setDirection] = useState(0)
	const router = useRouter()

	var variants = {
		enter: {
			y: direction > 0? "100%" : "-100%",
		},
		onview: {
			y: 0,
		},
		exit: {
			y: direction > 0? "-100%" : "100%",
		}
	}

	const gotopage = (n: number) => {
		router.push(pages[n].PageLocation)
		current = n
	}
	
	useEffect(() => {
		
		for (var i = 0; i < pages.length; i++) if (router.pathname == pages[i].PageLocation) current = i 
		
		window.addEventListener( 'wheel', e => {
			if (scrolling) return
			scrolling = true
			if (e.deltaY < 0 && current > 0) {
				current--
				setDirection(direction - 1)
				gotopage(current) 
			}
			if (e.deltaY > 0 && current < 3) {
				current++
				setDirection(direction + 1)
				gotopage(current) 
			}
			setTimeout(() => scrolling = false, 1100)
		})
	})

	return(
		<AnimatePresence initial={false}>
			<Component key={router.pathname} {...pageProps} gotopage={gotopage} variants={variants} direction={direction} />
		</AnimatePresence>
	) 
}
