import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <>
    <div className='bg-[#0D1832] space-y-[1rem] flex flex-col justify-center h-screen w-screen flex items-center px-[3.5rem] text-white text-center font-poppins'>
    <div className="bg-[#134083] items-center justify-center flex flex-col space-y-[1rem] h-[20rem] w-full rounded-xl border-2 border-[#F9D62B]">
        <div className="font-bold text-[3rem]">4 0 4</div>
        <div className="w-[7rem] h-[7rem]">
          <svg fill="#0D1832" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#0D1832"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>search-times</title> <path d="M30.885 29.115l-10.132-10.132c1.555-1.9 2.497-4.355 2.497-7.029 0-3.092-1.26-5.89-3.294-7.909l-0.001-0.001h-0.002c-2.036-2.040-4.851-3.301-7.961-3.301-6.213 0-11.249 5.036-11.249 11.249 0 3.11 1.262 5.924 3.301 7.961l0 0c2.019 2.036 4.817 3.297 7.91 3.297 2.674 0 5.128-0.942 7.048-2.513l-0.020 0.016 10.132 10.132c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM5.813 18.186c-1.583-1.583-2.563-3.771-2.563-6.187 0-4.832 3.917-8.749 8.749-8.749 2.416 0 4.603 0.979 6.187 2.563h0.002c1.583 1.583 2.563 3.77 2.563 6.186s-0.979 4.602-2.561 6.185l0-0-0.004 0.002-0.003 0.004c-1.583 1.582-3.769 2.56-6.183 2.56-2.417 0-4.604-0.98-6.187-2.564l-0-0zM13.768 12l1.944-1.944c0.226-0.226 0.366-0.539 0.366-0.884 0-0.69-0.56-1.25-1.25-1.25-0.345 0-0.658 0.14-0.884 0.366l-1.944 1.944-1.944-1.944c-0.226-0.226-0.539-0.366-0.884-0.366-0.69 0-1.25 0.56-1.25 1.25 0 0.345 0.14 0.658 0.366 0.884v0l1.944 1.944-1.944 1.944c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.69 0.56 1.25 1.25 1.25 0.345 0 0.658-0.14 0.884-0.366v0l1.944-1.944 1.944 1.944c0.226 0.226 0.539 0.366 0.884 0.366 0.69 0 1.25-0.56 1.25-1.25 0-0.345-0.14-0.658-0.366-0.884v0z"></path> </g></svg>
        </div>
        <div className="text-[1rem]">
          Page not found
        </div>
      </div>
     <Link to="/Dashboard">
        <u>Go to Home page</u>
     </Link>
    </div>
    </>
  )
}

export default Page404