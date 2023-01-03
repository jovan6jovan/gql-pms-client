import { FC } from "react";
import { RiAlertLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div>
      <h1>
        <RiAlertLine />
        Error 404: Page not found
      </h1>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};

export default NotFound;
