
const ContactMe = () => {
    return (
        <div className="hero min-h-screen min-w-fit text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Me!</h1>
                    <h2 className="font-bold my-2"><span style={{ color: "#f9004d"}} >Phone: </span>+880 1636 428 995</h2>
                    <h2 className="font-bold my-2"><span style={{ color: "#f9004d"}} >Email: </span>ahad.dev2@gmail.com</h2>
                    <h2 className="font-bold my-2"><span style={{ color: "#f9004d"}} >Address: </span>Narayanganj, Bangladesh</h2>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xs shadow-2xl bg-base-200">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Type Your Message" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button style={{ color: "#f9004d"}}  className="btn btn-outline uppercase">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;