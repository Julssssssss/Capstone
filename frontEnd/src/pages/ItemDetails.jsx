import { Link } from "react-router-dom"

const ItemDetails = () => {
  return (
    <>
        <div className="bg-[#0d1832] h-auto flex flex-col items-center">
            {/*IMG*/}
            <div className="p-4 bg-[#17394c] shadow-md shadow-black h-[13rem] w-[13rem] mt-[3rem] rounded-lg">
                <img src="https://picsum.photos/200"></img>
            </div>

            {/*DIV FOR CONTAINER OF CONTENTS*/}
            <div className="text-center p-5 flex flex-col items-center bg-[#17394c] h-[27rem] w-[19rem] mt-[3rem] mb-[3rem] rounded-lg text-white ">
                {/*TITLE*/}
                <div>
                    TITLE
                </div>

                {/*DEsc container*/}
                <div className="mt-[1.5rem] w-full h-full shadow-md shadow-[#0d1832] overflow-clip">
                    {/*DEsc*/}
                    <h1 className="mt-5 p-3">DESC</h1>
                    {/*FOUND IN*/}
                    <p className="p-3 mt-[1rem] h-full">FOUND AT</p>
                </div>

                {/*BUTTON*/}
                <Link to='/Confirmation'>
                    <button className="mb-[0.6rem] rounded-full p-2 px-3 bg-yellow-500 text-black mt-[2.8rem]">REQUEST APPOINTMENT</button>
                </Link>
            </div>


        </div>
    </>
  )
}

export default ItemDetails