

const LpCont2 = () => {
  const img = `https://picsum.photos/200`
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
    
  return (
    <>
      <div className="bg-[#0d1832] h-screen">

        {/* dko alam itatawag basta check mo sa figma 2nd part ng landing page*/}
        {/* deisng sa background lang to */}
        <div className="mt-[4.8rem] bg-[#17394c] w-screen h-[6rem]"></div>
        {/*image na nakapatong dun sa una*/}
          {/* <img className="w-[10rem] h-[10rem]" src={img}></img> */}
        <img className="w-[6.5rem] h-[10rem] absolute bottom-[-11.5rem] left-[2.6rem]" src={img}></img>
        <img className="w-[10rem] h-[7rem] absolute bottom-[-10rem] right-[2rem]" src={img}></img>

        {/*logo ni rtu */}
        <img className="w-[7rem] absolute bottom-[-19rem] left-[8.5rem] opacity-[50%]" src="https://iieecsc.files.wordpress.com/2021/09/rizal_technological_university-1.png"></img>
      
        {/* dko sure ano lalagay nya basta dalawang window shit dito */}
        <div className="mt-[5rem] w-full h-[13rem] flex flex-col ">
          <div className=" flex flex-row justify-evenly">
            <div className="rounded-lg w-[8rem] h-[7rem] shadow-yellow-400 bg-[#17394c] shadow-sm"></div>
            <div className="rounded-lg w-[8rem] h-[7rem] shadow-yellow-400 bg-[#17394c] shadow-sm"></div>
          </div>

          {/* yung text sa baba nung window eme */}
          <div className="flex flex-row justify-evenly text-white text-center h-full">
            <p className="w-[7rem] h-full">{lorem}</p>
            <p className="w-[7rem] h-full">{lorem}</p>
          </div>

        </div>

        {/* yellow na ano na design */}
        <div className="mt-[2rem] w-full h-[4rem] bg-yellow-400"></div>

      </div>
    </>
  )
}

export default LpCont2