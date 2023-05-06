
export default function HeroBackground() {
    return(
        <div>
            <div className="w-screen h-screen absolute flex items-end gap-40 pb-5">
                <div className=" w-1/2 h-[90%] flex items-center">
                    <div className="bg-cyan-500 z-[5] drop-shadow-[10px_0_3px_rgba(20,20,20,0.20)] h-[100%] w-[50%]"></div>
                    <div className="bg-cyan-600 z-[4] drop-shadow-[10px_0_3px_rgba(20,20,20,0.20)] h-[80%] w-[40%]"></div>
                    <div className="bg-cyan-700 z-[3] drop-shadow-[10px_0_3px_rgba(20,20,20,0.20)] h-[60%] w-[30%]"></div>
                    <div className="bg-cyan-800 z-[2] drop-shadow-[10px_0_3px_rgba(20,20,20,0.20)] h-[40%] w-[20%]"></div>
                    <div className="bg-cyan-900 z-[1] h-[20%] w-[10%]"></div>
                </div>
                <div className=" w-1/2 h-[90%] flex items-center">
                    <div className="bg-cyan-900 h-[20%] w-[10%]"></div>
                    <div className="bg-cyan-800 drop-shadow-[-10px_0_3px_rgba(20,20,20,0.20)] h-[40%] w-[20%]"></div>
                    <div className="bg-cyan-700 drop-shadow-[-10px_0_3px_rgba(20,20,20,0.20)] h-[60%] w-[30%]"></div>
                    <div className="bg-cyan-600 drop-shadow-[-10px_0_3px_rgba(20,20,20,0.20)] h-[80%] w-[40%]"></div>
                    <div className="bg-cyan-500 drop-shadow-[-10px_0_3px_rgba(20,20,20,0.20)] h-[100%] w-[50%]"></div>
                </div>
            </div>
        </div>
    )
}