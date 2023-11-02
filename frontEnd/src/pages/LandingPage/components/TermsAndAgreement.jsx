
const TermsAndAgreement = () => {

  const googleAuth =()=>{
    window.open(
        `${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self"
    )
  }

  return (
    <div className='h-[80%] w-[80%] absolute top-10 left-8 z-50 bg-white'>
      <div className='flex flex-col'>

        <div className='p-5 h-[23rem]'>
          lorem ipsum
        </div>

        <div className='flex justify-end items-center px-1'>
          <button onClick={googleAuth} className='bg-[#003985] h-[3rem] w-[9rem] rounded-xl'>Agree</button>
        </div>
      </div>
    </div>
  )
}

export default TermsAndAgreement