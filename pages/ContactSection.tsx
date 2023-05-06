import React from "react";

const Contact = ({}, ref: React.LegacyRef<HTMLElement> | undefined) => {
    return(
        <section className="absolute h-screen w-screen translate-y-full ease-in-out duration-1000" ref={ref}>
            <div className="h-[20%] flex justify-center items-end text-3xl font-light text-white">
                <h1>CONTACT ME</h1>
            </div>
            <div className="h-[80%] text-white text-2xl text-center font-thin pt-20">
                <p>ahmadyovanardiansyah@gmail.com</p>
            </div>
        </section>
    )
}

const forwardRef = React.forwardRef(Contact)
export default forwardRef;