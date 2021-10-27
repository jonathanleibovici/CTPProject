import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import image from '../pictures/image.png';
import { Link } from "react-router-dom";


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
		<div className="Login-container">
			<div className="header">PayMyBill</div>
			<div className="content">
				<form className="Form" onSubmit={handleSubmit(onSubmit)}>
                <img src= {image} alt="Avatar" className="avatar"/>
					<input
						type="text"
						placeholder="Email"
						name="email"
						{...register("email", {
							required: "Required",
						})}
					/>
					<div></div>

					<input
						type="password"
						placeholder="password"
						name="password"
						{...register("password", {
							required: "Required",
							minLength: 8,
						})}
					/>
					<div></div>

					{errors.password && <p>password is invalid</p>}
					<Link to = '/home'><input className="btn" type="submit"/></Link>
				</form>
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
