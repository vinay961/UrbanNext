import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "../../../Components/Form/Form.jsx";
import { auth, googleProvider, githubProvider } from "../../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { loginSuccess, loginFailure } from "../../../Redux/slices/authSlice.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // It is used to dispatch actions to the Redux store.

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess({ user: userCredential.user }));
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error.message);
      dispatch(loginFailure({ error: error.message }));
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(loginSuccess({ user: result.user }));
      navigate("/");
    } catch (error) {
      console.error(error.message);
      dispatch(loginFailure({ error: error.message }));
      alert(error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("GitHub user:", result.user);
      alert("GitHub login successful!");
      navigate("/");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-500 text-sm">
          Welcome back! Please login to your account
        </p>

        <Form onSubmit={handleLogin}>
          <div className="space-y-4">
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
            Login
          </button>
        </Form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-3 border rounded-lg hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} className="mr-2" />
            Login with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center w-full py-3 border rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaGithub size={24} className="mr-2" />
            Login with GitHub
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
