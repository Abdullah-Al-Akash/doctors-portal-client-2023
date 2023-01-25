import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
        // Handle Login Statement
        const { register, formState: { errors }, handleSubmit } = useForm();

        const handleLogin = data => {
                console.log(data);
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
                                                <input {...register("password", { required: "Password is required!" })} type="password" placeholder="Password" className="input input-bordered w-full " />
                                                {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
                                                <label className="label">
                                                        <span className="label-text">Forget Password?</span>
                                                </label>

                                                <input className='btn btn-accent text-white mt-4' type="submit" />
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