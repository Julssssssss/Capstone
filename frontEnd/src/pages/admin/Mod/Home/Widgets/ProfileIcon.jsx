import { Link } from "react-router-dom";

const ProfileIcon = ({User}) => {
  console.log('hello', User)
  return (
    <>
     
      
      <Link to={{pathname:`/Admin/AdminProfile`}}
        state={{User}}
      >
        <div style={{backgroundImage:`url(${User[0].picture})`}} className={`bg-contain cursor-pointer rounded-full bg-center h-[3rem] w-[3rem] z-20`}></div>
      </Link>
    </>
  )
}

export default ProfileIcon