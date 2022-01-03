import { useEffect } from "react";
import { checkUserType } from "../hoc";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ currentUser, children }) => {
	const navigate = useNavigate();
	const userType = checkUserType(currentUser);
	useEffect(() => {
		if (!currentUser) {
			navigate("/");
		} else {
			navigate(`/${userType}`);
		}
	}, [currentUser, navigate, userType]);

	return <div className="page-wrapper">{children}</div>;
};

export default AuthWrapper;
