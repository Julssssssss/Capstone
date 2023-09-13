

const ItemDetails = () => {
  return (
    <>
        <div className="bg-[#0d1832] h-screen flex flex-col items-center">
            {/*IMG*/}
            <div className="p-5 bg-[#17394c] h-[13rem] w-[13rem] mt-[3rem] rounded-lg">
                <img src="https://picsum.photos/200"></img>
            </div>

            {/*DIV FOR CONTAINER OF CONTENTS*/}
            <div className="text-center p-5 flex flex-col items-center bg-[#17394c] h-[27rem] w-[19rem] mt-[3rem] rounded-lg text-white">
                {/*TITLE*/}
                <div>
                    TITLE
                </div>

                {/*DEsc container*/}
                <div className="mt-[1.5rem] w-full h-full shadow-2xl shadow-black overflow-clip">
                    {/*DEsc*/}
                    <h1 className="mt-5 p-3">DESC</h1>
                    {/*FOUND IN*/}
                    <p className="p-3 mt-[1rem] h-full">FOUND AT</p>
                </div>

                {/*BUTTON*/}
                <button className="mb-[0.6rem] rounded-full p-2 px-3 bg-yellow-500 text-black font-bold mt-[2.8rem]">REQUEST APPOINTMENT</button>
            </div>


        </div>
    </>
  )
}

export default ItemDetails