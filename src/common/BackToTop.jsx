import React, { useEffect, useState } from 'react'
import { Arrow, TopArrow } from '../utils/icons'

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)

    return (
        <>
            {scrollTop && (
                <div onClick={scrollHandler} className='fixed z-30 right-2.5 bottom-2.5 bg-gradient-to-r from-purple to-darkPurple cursor-pointer animate-bounce size-12 max-2xl:size-9 max-sm:size-7 border border-black rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0px_0px_22px_3px] hover:shadow-black'><TopArrow /></div>
            )
            }
        </>
    )
}

export default BackToTop