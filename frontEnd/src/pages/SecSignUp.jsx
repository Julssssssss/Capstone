import { useState } from "react";

const SecSignUp = () => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
  return (
    <>
        <div className='bg-[#0d1832] h-screen'>
            <div className='flex flex-col items-center pt-[3rem] px-3'>
                <p className='text-white text-center'>{lorem}</p>
                <select className="mt-2 text-white py-1 px-3 bg-[#003985] w-[75%] rounded-lg" value={selectedOption} onChange={handleChange}>
                    <option value="mema">mema</option>
                    <option value="jojo">joj</option>
                    <option value="jasdasdojo">asdasdas</option>
                </select>
                <button className="mt-[4rem] bg-yellow-300 rounded-md w-[8rem]">Next</button>
            </div>
        </div>
    </>
  )
}

export default SecSignUp