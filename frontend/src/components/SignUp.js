import React from 'react';

class Signup extends React.Component {
    render() {
        return (
            <>
                <div className=" ml-16 login-card flex flex-col justify-evenly items-center   h-screen">
                    <div></div>
                    <div className="flex justify-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <span className="font-bold text-2xl text-white mr-16">Create an account</span>
                    </div>
                    <div className="  w-80 flex flex-col  h-80  mr-16 ">
                        <div className='text-gray-400 font-medium p-1'>Your Name</div>
                        <input className=" p-1 rounded-md w-11/12 bg-center mx-auto font-semibold focus:outline-none" placeholder="Daniel Sams"></input>
                        <div className="h-2.5"></div>
                        <div className='text-gray-400 font-medium p-1 ' >Your Email</div>
                        <input className=" p-1 rounded-md w-11/12 bg-center mx-auto font-semibold focus:outline-none" placeholder="daniel_sams@gmail.com"></input>
                        <div className="h-2.5"></div>
                        <div className='text-gray-400 font-medium p-1'>Set Password</div>
                        <input className=" p-1 rounded-md w-11/12 bg-center mx-auto font-semibold focus:outline-none" placeholder="******"></input>
                        <div className="flex justify-center">
                            <button  className=" bg-purple-700  text-white w-1/2 p-2 rounded-md mt-8 hover:opacity-90">Sign up</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;





