import { Outlet, Link } from "react-router-dom";

const landingPage = () => {
  return (
    <>
      <div className="Parent">
        <div className="">
         <button className="bg-black text-white">
          {/*kung ano ung nilagay mo na path sa app.jsx un din lagay mo sa Link to*/}
          <Link to='/dashboard'>Get started</Link>
         </button>
        </div>
      </div>
    </>
  );
};

export default landingPage;
