import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loginStart, loginSuccess, loginFailure} from "../../../Redux/slices/authSlice.js";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Form from "../../../Components/Form/Form.jsx";
import { auth, googleProvider, githubProvider } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Register() {
  const dispatch = useDispatch();
  // const {loading, error} = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const role = window.confirm("Are you an Client? Click 'OK' for Yes and 'Cancel' for No.") ? "client" : "user";
      dispatch(loginSuccess({ user, role }));
    } catch (error) {
      console.error(error.message);
      alert(error.message);
      dispatch(loginFailure({ error: error.message }));
    }
  };

  const handleGoogleLogin = async () => {
    dispatch(loginStart());
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const role = window.confirm("Are you an Client? Click 'OK' for Yes and 'Cancel' for No.") ? "client" : "user";
      dispatch(loginSuccess({ user, role }));
      alert("Google login successful!");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
      dispatch(loginFailure({ error: error.message }));
    }
  };

  const handleGithubLogin = async () => {
    dispatch(loginStart());
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const role = window.confirm("Are you an Client? Click 'OK' for Yes and 'Cancel' for No.") ? "client" : "user";
      dispatch(loginSuccess({ user, role }));
      alert("GitHub login successful!");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
      dispatch(loginFailure({ error: error.message }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-500 text-sm">
          Sign up to get started with your new account
        </p>

        <Form onSubmit={handleRegister}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            Register
          </button>
        </Form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-3 border rounded-lg hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} className="mr-2" />
            Sign up with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center w-full py-3 border rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaGithub size={24} className="mr-2" />
            Sign up with GitHub
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
