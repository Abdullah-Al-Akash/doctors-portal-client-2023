import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
        // Handle Login Statement
        const { signIn } = useContext(AuthContext);
        const [loginErr, setLoginErr] = useState('');

        const { register, formState: { errors }, handleSubmit } = useForm();

        const handleLogin = data => {
                setLoginErr('');
                signIn(data.email, data.password)
                        .then(result => {
                                const user = result.user;
                                console.log(user);
                        })
                        .catch(err => {
                                const errorMessage = err.message;
                                setLoginErr(errorMessage);
                        })
        }
        return (
                <section className="h-[650px] flex justify-center items-center">
                        <div className="w-96">
                                <h2 className='text-center font-bold text-3xl text-accent py-4'>Login Here</h2>
                                <form onSubmit={handleSubmit(handleLogin)}>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                                <label className="label">
                                                        <span className="label-text">Enter Your Email</span>
                                                </label>
                                                <input {
                                                        ...register("email", { required: "Email is required!" })
                                                } type="email" placeholder="Email" className="input input-bordered w-full " />
                                                {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
                                                <label className="label">
                                                        <span className="label-text">Enter Your Password</span>
                                                </label>
                                                <input {...register("password",
                                                        {
                                                                required: "Password is required!",
                                                                minLength: { value: 6, message: "Password must be at least  6character" }
                                                        })} type="password" placeholder="Password" className="input input-bordered w-full " />
                                                {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
                                                <label className="label">
                                                        <span className="label-text">Forget Password?</span>
                                                </label>
                                                {loginErr && <p className="text-red-500" role="alert">{loginErr}</p>}

                                                <input className='btn btn-accent text-white mt-4' type="submit" value="Login" />
                                        </div>
                                </form>
                                <p className='text-center pt-4'>New to doctors portal? <Link className='text-secondary' to="/signup">Create an account</Link></p>
                                <div className="divider">OR</div>
                                <div className="px-8">
                                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                                </div>
                        </div>
                </section>
        );
};

export default Login;