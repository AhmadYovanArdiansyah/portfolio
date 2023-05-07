import React from "react";

const data = [
    {
        id: 1,
        title: 'GAME DEVELOPMENT'
    },
    {
        id: 2,
        title: 'WEB DEVELOPMENT'
    },
    {
        id: 3,
        title: 'MOBILE DEVELOPMENT'
    }
]

const Work = () => {
    return(
        <>
            <div className="h-[20%] w-full flex justify-center items-end text-3xl font-light text-white">
                <h1>MY WORK</h1>
            </div>
            <div className=" h-[80%] w-full flex justify-around gap-10 pt-20 md:justify-center">
                {data.map(item => (
                    <div key={item.id} className="h-[80%] w-[80%] flex justify-center items-center relative overflow-hidden bg-zinc-800 group md:w-[20%]">
                        <div className="h-full w-full flex items-center justify-center -translate-x-full bg-zinc-500 group-hover:translate-x-0 duration-1000">
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Work