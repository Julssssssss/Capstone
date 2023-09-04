import LoginButton from '/src/components/LoginButton.jsx'
import LogoutButton from '/src/components/LogoutButton.jsx'
import "/src/css/landPage.css";
import { Outlet, Link } from "react-router-dom";

const landingPage = () => {
  return (
    <>
      <div className="Parent">
        <div className="">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default landingPage;
