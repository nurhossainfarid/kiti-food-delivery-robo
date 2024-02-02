"use client";

import axios from "axios";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const { login = false, feedback = false, order = false } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const {firstName, lastName, email, password} = data;

    if (login) {
        
      const logindata = {
        email,
        password
      }

      axios.post('http://203.190.8.197/auth/login', logindata)
      .then(response => {
        // Store the JWT token in local storage
        localStorage.setItem('jwtToken', response.data.token);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    
    // Add a request interceptor to axios
    axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem('jwtToken');
      config.headers.Authorization =  token ? `Bearer ${token}` : '';
      return config;
    });

    
    } else if (feedback) {
      console.log("feedbackData", data);
    } else if (order) {
      console.log("orderData", data);
    } else {
      console.log("registrationdata", data);
      
      const registerData = {
        first_name:firstName,
        last_name:lastName,
        email,
        password
      }

      axios.post('http://203.190.8.197/auth/register', registerData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {login
              ? "Login to your account"
              : feedback
              ? ""
              : "Registration to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Registration section */}
            {!login && !feedback && (
              <>
                {/* First Name Section */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="firstName"
                      required
                      {...register("firstName", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Last Name section */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="lastName"
                      required
                      {...register("lastName", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Email section */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      {...register("email", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Email section end */}
                {/* password section */}
                <div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        {...register("password", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* Login section */}
            {login && (
              <>
                {/* Email section */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      {...register("email", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Email section end */}
                {/* password section */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      {...register("password", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </>
            )}
            {feedback && (
              <>
                {/* Email section */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      {...register("email", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Select Problem section */}
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-xl font-bold leading-6 text-gray-900"
                  >
                    Select Contact Topic
                  </label>
                  <div className="mt-2">
                    <input
                      type="radio"
                      name="topic"
                      id="topic"
                      checked
                      className="mx-2"
                    />
                    About Kiti
                    <input
                      type="radio"
                      name="topic"
                      id="topic"
                      className="mx-2"
                    />
                    About Food
                    <input
                      type="radio"
                      name="topic"
                      id="topic"
                      className="mx-2"
                    />
                    About Discount
                    <input
                      type="radio"
                      name="topic"
                      id="topic"
                      className="mx-2"
                    />
                    About Restaurant
                  </div>
                </div>
                {/* Comment section */}
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Problem
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="comment"
                      name="comment"
                      type="text"
                      rows={4}
                      autoComplete="comment"
                      required
                      {...register("comment", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </>
            )}
            <div>
              <button
                type="submit"
                placeholder="Login"
                className=" bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {login ? "Login" : feedback ? "Send" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
