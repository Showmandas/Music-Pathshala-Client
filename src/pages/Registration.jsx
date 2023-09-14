import { useContext, useState } from "react";
// import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'
const Register = () => {
  const [Error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  //   const formSchema = Yup.object().shape({
  //     password: Yup.string()
  //       .required('Password is mendatory')
  //       .min(3, 'Password must be at 6 char long'),
  //     confirmPwd: Yup.string()
  //       .required('Password is mendatory')
  //       .oneOf([Yup.ref('password')], 'Passwords does not match'),
  //   })
  //   const formOptions = { resolver: yupResolver(formSchema) }

  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // if(password.length ==  conpass.length){
    //     setError('Password and confirm pass dows not match');
    // }
    createUser(data.email, data.password).then((result) => {
      const regUser = result.user;
      console.log(regUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("https://music-school-server-nine.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  icon: "success",
                  title: "User created successfully.",
                });
                navigate("/");
              }
            });
        })
        .catch((err) => {
          const errMsg = err?.message;
          console.log(errMsg);
          setError("");
        });
    });
  };

  // google sign in
  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row p-5">
          <div className="col-lg-6 col-12 my-5 p-5">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h4 className="fs-3 font-bold text-center p-2">Sign up here</h4>
              <hr className="w-50 m-auto" />
              <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                  {errors.name && (
                    <span className="text-danger">Name is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="form-control"
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="form-control"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-danger">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-danger">Password must be 6 characters</p>
                  )}

                  {errors.password?.type === "pattern" && (
                    <p className="text-danger">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword", { required: true })}
                    placeholder="Confirm your password"
                    className="form-control"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-danger">Confirm Password is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label>Photo URL</label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="form-control"
                  />
                  {errors.photoURL && (
                    <span className="text-danger">Photo URL is required</span>
                  )}
                </div>

                <div className="mb-3 mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="text-center mb-3">
                <small>
                  Already have an account <Link to="/login">Please Login</Link>
                </small>
              </p>
              <div className="social-login text-center mb-4">
                <button
                  onClick={handleGoogleSignin}
                  className="btn  btn-outline-dark fw-semibold"
                >
                  Sign up with Google
                </button>
              </div>
              <p>{Error}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12 my-5 d-flex flex-column gap-2 justify-content-center">
            <h2>Welcome to our Registration Page!</h2>
            <p className="text-secondary">Create an account by providing your full name, email address, username, and password. By registering, you agree to our terms and conditions. Join our community today and gain access to exclusive features. Need assistance? Contact our support team. We look forward to having you on board</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
