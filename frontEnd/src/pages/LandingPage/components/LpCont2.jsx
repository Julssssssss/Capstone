

const LpCont2 = () => {
  const img = `https://picsum.photos/200`
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
    
  return (
    <>
      <div className="bg-[#0d1832] h-auto">

        {/* dko alam itatawag basta check mo sa figma 2nd part ng landing page*/}
        {/* deisng sa background lang to */}
        <div className="mt-[5rem] bg-[#17394c] w-screen h-[5rem]"></div>
        {/*image na nakapatong dun sa una*/}
          {/* <img className="w-[10rem] h-[10rem]" src={img}></img> */}
        <img className="w-[6.5rem] h-[10rem] -mt-[7rem] ml-[3rem]" src={img}></img>
        <img className="w-[10rem] h-[7rem] ml-[11rem] -mt-[10rem]" src={img}></img>

        
        {/* dko sure ano lalagay nya basta dalawang window shit dito */}
        <div className="mt-[9rem] w-full h-[13rem] flex flex-col">
          <div className=" flex flex-row justify-evenly">
            <div className="rounded-lg w-[10rem] h-[7rem] shadow-yellow-400 bg-[#17394c] shadow-sm"></div>
            <div className="rounded-lg w-[10rem] h-[7rem] shadow-yellow-400 bg-[#17394c] shadow-sm"></div>
          </div>
          {/* yung text sa baba nung window eme */}
          <div className="flex flex-row justify-evenly text-white text-center h-full">
            <p className="w-[7rem] h-full">{lorem}</p>
            <p className="w-[7rem] h-full">{lorem}</p>
          </div>
           {/*logo ni rtu */}
            <img className="w-[7rem] opacity-[50%] -mt-[25rem] ml-[8.2rem]" src="https://iieecsc.files.wordpress.com/2021/09/rizal_technological_university-1.png"></img>
      
        </div>

        {/* yellow na ano na design */}
        <div className="mt-[2rem] w-full h-[4rem] bg-yellow-400"></div>
      {/*feedback*/}
          
        <div className="-mt-[1rem] flex flex-row-reverse italic">
          <div className="bg-[#17394C] w-[12rem] h-[12rem] rounded-[0rem_0rem_0rem_6rem] shadow-[4px_0px_4px_4px_#00000040] text-center text-white pt-8">{lorem}</div>
        </div>
        {/*ung square sa gitna*/}
        <div className="bg-[#17394C] w-[11rem] h-[11rem] ml-[6rem] -mt-[5rem] shadow-[0px_2px_5px_5px_#17394c]"></div>
        <div className="-mt-[7rem] flex flex-row italic">
          <div className="bg-[#17394C] w-[12rem] h-[12rem] rounded-[0rem_6rem_0rem_0rem] shadow-[0px_4px_4px_4px_#00000040] text-center text-white pt-14">{lorem}</div>
        </div>
       
      </div>
    </>
  )
}

export default LpCont2