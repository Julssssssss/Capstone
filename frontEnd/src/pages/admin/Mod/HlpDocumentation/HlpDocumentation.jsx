const HlpDocumentation = () => {

    return (
      <>
          <div className="bg-[#134083] h-screen flex flex-row items-center">
  
              {/* img logo ni rtu*/}
              <div className="h-screen w-[11%] flex justify-center pt-3">
                  <img className="h-[7rem] ml-[1rem]" src="https://iieecsc.files.wordpress.com/2021/09/rizal_technological_university-1.png" alt="rtuLogo" />
              </div>
  
              {/* upper part */}
              <div className="flex flex-col h-screen w-[89%] ">
                  
                  <div className="flex flex-row h-[8rem] items-center justify-between px-[2rem]">
                  {/* words */}
                      <h1 className="text-white text-[2rem] h-[6rem] w-[20rem] text-center pt-5">RTU: LOST & FOUND</h1>
  
                      {/* button */}
                      <button className="">X</button>
                  </div>
  
  
                  {/* body */}
                  <div className="bg-[#0D1832] h-[77%] w-[98%] rounded-2xl">
  
                  </div>
  
  
              </div>
              
          </div>
      </>
    )
  }
  
  export default HlpDocumentation