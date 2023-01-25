import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
        const { register, handleSubmit, formState: { errors } } = useForm()

        const handleSignup = data => {
                console.log(data);
        }
        return (
                <section className="h-[650px] flex justify-center items-center">
                        <div className="w-96">
                                <h2 className='text-center font-bold text-3xl text-accent py-4'>Signup Here</h2>
                                <form onSubmit={handleSubmit(handleSignup)}>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                                <label className="label">
                                                        <span className="label-text">Enter Your Name</span>
                                                </label>
                                                <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full " />
                                                <label className="label">
                                                        <span className="label-text">Enter Your Email</span>
                                                </label>
                                                <input {...register("email", { required: "Email is required!" })} type="email" placeholder="Email" className="input input-bordered w-full " />
                                                {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
                                                <label className="label">
                                                        <span className="label-text">Enter Your Password</span>
                                                </label>
                                                <input {...register("password", { required: "Email is required!", minLength: { value: 6, message: "Password must be at least  6character" } })} type="password" placeholder="Password" className="input input-bordered w-full " />
                                                {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}

                                                <label className="label">
                                                        <span className="label-text">Forget Password?</span>
                                                </label>

                                                <input className='btn btn-accent text-white mt-4' value="Signup" type="submit" />
                                        </div>
                                </form>
                                <p className='text-center pt-4'>Already have an account? <Link className='text-secondary' to="/login">Login Here</Link></p>
                                <div className="divider">OR</div>
                                <div className="px-8">
                                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                                </div>
                        </div>
                </section>
        );
};

export default Signup;