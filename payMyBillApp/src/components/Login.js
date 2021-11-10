import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import image from "../pictures/image.png";
import { Link } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	//we needed to make errors as an object ?
	//we need to pass errors as an object
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="whole-container">
			<div className="left-half-img-srs"></div>
			<div className="Login-container-right-half">
				<div className="header">Who Knew?</div>
				<div className="content">
					<form className="Form" onSubmit={handleSubmit(onSubmit)}>
						<img src={image} alt="Avatar" className="avatar" />
						<input
							type="text"
							placeholder="Email"
							name="email"
							{...register("email", {
								required: "Required",
							})}
						/>

						<input
							type="password"
							placeholder="password"
							name="password"
							{...register("password", {
								required: "Required",
								minLength: 8,
							})}
						/>

						{errors.password && <p>password is invalid</p>}
						<Link to="/home">
							<input className="btn" type="submit" />
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

// const handleLoginName = (value)=>{
//     if(value === undefined)
//     return;

//   }

//   const handlePassword= (value)=>{
//     if(value === undefined)
//     return;

//   }
export default Login;
