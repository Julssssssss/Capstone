
const LpCont1 = () => {
    let r= false
    const img = `https://picsum.photos/200`
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    
    function content1(){
        return(
            <>
                {/* content na dko din alam itatawag */}
                <div className={`flex w-full h-[10rem] justify-between ${r? 'flex-row-reverse mt-[3.5rem]': 'mt-[3rem]'}`}>
                    <div className="bg-[#003985] w-[5rem]">
                    </div>

                    <div className="text-center rounded-lg p-2 w-[48%] bg-[#17394c] shadow-md shadow-yellow-400">
                        {lorem}
                    </div>

                </div>
                {/* phone i guess? */}
                <img className={`absolute w-[7rem] h-[12rem] shadow-sm rounded-md ${r? 'right-[4rem] bottom-[2.4rem]': 'left-[4rem] bottom-[16rem]'}`} src={img}></img>
                {r=true}
            </>
        )
    }

    return (
        <>
            <div className="h-full flex flex-col items-center">
                {/* dko alam ano itatawag dito basta eto nasa unahan */}
                
                <div className="flex flex-row bg-[#0d1832] rounded-2xl shadow-2xl shadow-[#003985] w-[21rem] h-[12.6rem] mt-[3rem]">
                    {/* img */}
                    <img className="h-full w-[60%]" src={img}></img>

                    {/* txt cont */}
                    <div className="flex flex-col justify-center text-white text-center w-[40%] p-2">
                        {/* h1 txt */}
                        <h1 className="font-bold">
                            LANDING PAGE CONTENTS
                        </h1>

                        {/* p txt */}
                        <p className="mt-[1rem]">
                            Lorem ipsum dolor sit amet
                        </p>

                    </div>
                </div>
                
                {/* get started na button */}
                <button className="mt-[1.7rem] bg-[#003985] h-[3rem] w-[13rem] rounded-xl text-white">GET STARTED</button>

                {/* dko din alam tatawag dito basta first content */}
                {content1()}
                {content1()}
                
            </div>
        </>
    )
}

export default LpCont1