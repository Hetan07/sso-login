import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

import { CiUser } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";

const Login = () => {
	const { setAuthUser } = useAuthContext();

	const [fullName, setfullName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		localStorage.setItem("sso-user", JSON.stringify({
			fullName:fullName,
			password:password

		}));
			setAuthUser({"fullName":fullName,
		"password":password});

	};

	return (
		<>
			<div className='wrapper'>
				<h1>Login</h1>
				<text className='simple-text'> Implemented with SSO</text>
				<form onSubmit={handleSubmit}>
					<div className='input-box'>
						<input
							type='text'
							placeholder='Name'
							value={fullName}
							onChange={(e) => setfullName(e.target.value)}
						/>
						<CiUser className='icon'/>
					</div>

					<div className='input-box'>
						<input
							type='password'
							placeholder='Password'
							className='w-full input input-bordered h-10 text-black'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<MdOutlinePassword className='icon'/>
					</div>

					<div>
						<button className='login-button'>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default Login;
