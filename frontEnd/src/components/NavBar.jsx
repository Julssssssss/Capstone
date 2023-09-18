import React, { useState } from "react"
import { Link } from "react-router-dom"



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const buttons =[
    {label:'Help', to:'/Help'},
    {label:'hello'}
  ]
  
  return (
    <>
      {/*hamburger and close parent*/}
      <div className="cursor-pointer z-20 fill-[#F9D62B]" onClick={toggleMenu}>
        {isOpen ? (
          null
        ) : 
        (
          <svg xmlns="http://www.w3.org/2000/svg" width="35"height="35" viewBox="0 0 22 22 " fillRule="none">
            {/*hamburger */}
            <path clipRule="evenodd" d="M0 20.4092C0 20.1243 0.0877975 19.8511 0.244078 19.6497C0.400358 19.4482 0.61232 19.335 0.833333 19.335H12.5C12.721 19.335 12.933 19.4482 13.0893 19.6497C13.2455 19.8511 13.3333 20.1243 13.3333 20.4092C13.3333 20.6941 13.2455 20.9673 13.0893 21.1688C12.933 21.3702 12.721 21.4834 12.5 21.4834H0.833333C0.61232 21.4834 0.400358 21.3702 0.244078 21.1688C0.0877975 20.9673 0 20.6941 0 20.4092ZM0 13.9642C0 13.6793 0.0877975 13.4061 0.244078 13.2046C0.400358 13.0032 0.61232 12.89 0.833333 12.89H19.1667C19.3877 12.89 19.5996 13.0032 19.7559 13.2046C19.9122 13.4061 20 13.6793 20 13.9642C20 14.2491 19.9122 14.5223 19.7559 14.7237C19.5996 14.9252 19.3877 15.0384 19.1667 15.0384H0.833333C0.61232 15.0384 0.400358 14.9252 0.244078 14.7237C0.0877975 14.5223 0 14.2491 0 13.9642ZM0 7.51918C0 7.23429 0.0877975 6.96107 0.244078 6.75963C0.400358 6.55818 0.61232 6.44501 0.833333 6.44501H12.5C12.721 6.44501 12.933 6.55818 13.0893 6.75963C13.2455 6.96107 13.3333 7.23429 13.3333 7.51918C13.3333 7.80407 13.2455 8.07729 13.0893 8.27873C12.933 8.48018 12.721 8.59335 12.5 8.59335H0.833333C0.61232 8.59335 0.400358 8.48018 0.244078 8.27873C0.0877975 8.07729 0 7.80407 0 7.51918ZM0 1.07417C0 0.789281 0.0877975 0.516063 0.244078 0.314617C0.400358 0.113171 0.61232 0 0.833333 0H19.1667C19.3877 0 19.5996 0.113171 19.7559 0.314617C19.9122 0.516063 20 0.789281 20 1.07417C20 1.35906 19.9122 1.63227 19.7559 1.83372C19.5996 2.03517 19.3877 2.14834 19.1667 2.14834H0.833333C0.61232 2.14834 0.400358 2.03517 0.244078 1.83372C0.0877975 1.63227 0 1.35906 0 1.07417Z"/>
          </svg>
        )}
      </div>

        {isOpen && (
          <div className="flex fixed left-0 top-0 z-10 h-full w-screen">
            
            {/* sub parent dito */}
            <div className="flex flex-col h-full pt-[1rem] pl-[0.6rem] pr-[1rem] space-y-[1.5rem] py-[2rem]  w-[50%] bg-[#17394C] text-white">
                {/*close button*/} 
                <button className='mt-1 ml-[0.3rem]'onClick={toggleMenu}>
                  <svg className="fill-[#F9D62B]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 22 22" fillRule="none">
                    <path d="M0.419604 0.419604C0.552277 0.286595 0.709888 0.181067 0.883407 0.109064C1.05693 0.0370616 1.24295 0 1.43081 0C1.61868 0 1.8047 0.0370616 1.97822 0.109064C2.15174 0.181067 2.30935 0.286595 2.44202 0.419604L10.0004 7.98082L17.5587 0.419604C17.6915 0.286811 17.8492 0.181473 18.0227 0.109605C18.1962 0.0377376 18.3821 0.00074779 18.5699 0.00074779C18.7577 0.00074779 18.9437 0.0377376 19.1172 0.109605C19.2907 0.181473 19.4484 0.286811 19.5811 0.419604C19.7139 0.552398 19.8193 0.710047 19.8911 0.88355C19.963 1.05705 20 1.24301 20 1.43081C20 1.61861 19.963 1.80457 19.8911 1.97808C19.8193 2.15158 19.7139 2.30923 19.5811 2.44202L12.0199 10.0004L19.5811 17.5587C19.7139 17.6915 19.8193 17.8492 19.8911 18.0227C19.963 18.1962 20 18.3821 20 18.5699C20 18.7577 19.963 18.9437 19.8911 19.1172C19.8193 19.2907 19.7139 19.4484 19.5811 19.5811C19.4484 19.7139 19.2907 19.8193 19.1172 19.8911C18.9437 19.963 18.7577 20 18.5699 20C18.3821 20 18.1962 19.963 18.0227 19.8911C17.8492 19.8193 17.6915 19.7139 17.5587 19.5811L10.0004 12.0199L2.44202 19.5811C2.30923 19.7139 2.15158 19.8193 1.97808 19.8911C1.80457 19.963 1.61861 20 1.43081 20C1.24301 20 1.05705 19.963 0.88355 19.8911C0.710047 19.8193 0.552398 19.7139 0.419604 19.5811C0.286811 19.4484 0.181473 19.2907 0.109605 19.1172C0.0377376 18.9437 0.00074779 18.7577 0.00074779 18.5699C0.00074779 18.3821 0.0377376 18.1962 0.109605 18.0227C0.181473 17.8492 0.286811 17.6915 0.419604 17.5587L7.98082 10.0004L0.419604 2.44202C0.286595 2.30935 0.181067 2.15174 0.109064 1.97822C0.0370616 1.8047 0 1.61868 0 1.43081C0 1.24295 0.0370616 1.05693 0.109064 0.883407C0.181067 0.709888 0.286595 0.552277 0.419604 0.419604Z"/>
                  </svg>
                </button>

              {/*naka map na*/}
              {buttons.map((menus, index)=>(
                <Link to={menus.to} key={index}>
                  <button className="bg-[#134083] w-[10rem] rounded-full p-2">
                    {menus.label}
                  </button>
                </Link>  
              ))}
            </div>
            
            <div className="w-[50%] h-full" onClick={toggleMenu}></div>
          </div>
        )}

    </>
  );
};

export default NavBar;