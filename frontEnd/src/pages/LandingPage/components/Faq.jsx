import { useState } from "react";

const Faq = () => {
  const Questions = [
    { label: 'hello', contents: 'hi?' },
    { label: 'eme', contents: 'mema?' },
    { label: 'eme', contents: 'mema?' },
    { label: 'eme', contents: 'mema?' },
    { label: 'eme', contents: 'mema?' }
  ];

  const [isOpen, setIsOpen] = useState(new Array(Questions.length).fill(false));

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  function Format() {
    return Questions.map((el, index) => {
      return (
        <div key={index}>
          <div className="bg-[#134083] rounded-full flex flex-row justify-between p-[0.2rem] px-[1rem] items-center relative z-20">
            <div className="text-[0.9rem]">{el.label}</div>
            <button
              onClick={() => toggleDropdown(index)}
              className="w-[1rem] h-[1rem] flex items-center justify-center"
            >
                  {
                    isOpen[index]
                      ? <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
                      : <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path></g></svg>
                  }
            </button>
          </div>
          {isOpen[index] && (
            <div className="p-2 border border-[#F9D62B] rounded shadow-md mt-2">
              {el.contents}
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="text-white font-poppins flex flex-col space-y-[1rem] mx-[1.5rem] mb-[3rem]">
          <div className="text-[1.5rem] font-bold">FAQ</div>
          <div className="text-[0.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </div>
          {Format()}
        </div>
        <img src="https://i.postimg.cc/2jXgMqZF/ease-2.png" alt="Mockups" className="absolute bottom-[-2rem] right-0 w-[10rem] h-[15rem] z-10 opacity-50"/>
      </div>
    </>
  );
};

export default Faq;
