import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import login from "../assets/login.json";

const Login = () => {
  // const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [Error, setError] = useState('');
  const { signIn ,googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    // const form = data.target;
    // const email = form.email.value;
    // const password = form.password.value;
    console.log(data.email, data.password);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    }).catch(error=>{
        const errMsg=error.message;
        setError(errMsg)

    })
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShow(!show);
  };
//   const handleSubmit = () => {
//     // event.preventDefault();
   
//   };



    // google sign in
    const handleGoogleSignin = () => {
        googleSignIn()
          .then((result) => {
            console.log(result.user);
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
          });
      };
    


  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6 col-12 p-5 my-5">


          <div className="card  shadow-lg">
          <h1 className="fs-3 font-bold text-center p-2 font-bold">Login now!</h1>
          <hr className="w-50 m-auto"/>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="enter email"
                  className="form-control"
                />
                  {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}
              </div>
              <div className="form-group mb-3">
                <label className="label">Password</label>
                <div className="input-group">
                  <input
                    type={show ? "text" : "password"}
                    {...register("password", { required: true })}
                    value={password}
                    onChange={handlePasswordChange}
                    name="password"
                    placeholder="Enter your password"
                    className="form-control"
                  />
                  <div className="input-group-text">
                    <i onClick={handleTogglePasswordVisibility}>
                      {show ? (
                        <i className="fa-solid fa-eye-slash"></i>
                      ) : (
                        <i className="fa-solid fa-eye"></i>
                      )}
                    </i>
                  </div>
                  
             
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-danger">Password is required</p>
                )}
              </div>

              <div className="mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mb-3">
              <small>
                New Here? <Link to="/register">Please Register</Link>{" "}
              </small>
            </p>
            <div className="social-login text-center mb-4">
              <button onClick={handleGoogleSignin} className="btn  btn-outline-secondary fw-semibold">Sign up with Google</button>

              </div>
            <h5 className="text-danger font-bold">{Error}</h5>
            {/* <SocialLogin/> */}
          </div>
        </div>
        <div className="col-lg-6 col-12 my-4 d-flex justify-content-center gap-2 flex-column">
        <h2>Welcome Back!</h2> 
        <p className="text-secondary">Please enter your username and password to access your account. If you don't have an account, you can sign up here. If you need assistance, feel free to contact our support team. We're glad to have you back!</p>

          </div>
      </div>
    </div>
  );
};

export default Login;
