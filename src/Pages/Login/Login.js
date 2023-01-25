import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
        // Handle Login Statement
        const { register, handleSubmit } = useForm();
        const [data, setData] = useState("");
        return (
                <section className="h-[650px] flex justify-center items-center">
                        <div>
                                <h2 className='text-center font-bold text-3xl text-accent py-4'>Login Here</h2>
                                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                                        <div className="form-control w-full ">
                                                <label className="label">
                                                        <span className="label-text">Enter Your Email</span>
                                                </label>
                                                <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full " />
                                                <label className="label">
                                                        <span className="label-text">Enter Your Password</span>
                                                </label>
                                                <input {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full " />

                                                <input className='btn btn-accent text-white mt-4' type="submit" />
                                        </div>


                                        <p>{data}</p>
                                </form>
                        </div>
                </section>
        );
};

export default Login;