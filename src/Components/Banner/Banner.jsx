
const Banner = () => {
    return (
        <section className="text-white py-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000" alt="DEVELOPER" className="mx-auto rounded-lg w-full p-10" />
                </div>
                <div className="w-full md:w-1/2 text-center lg:text-left md:text-center lg:pr-60">
                    <h1 className="text-4xl font-bold mb-4">Hi There, I am Ahad <span className="font-black text-4xl" style={{ color: "#f9004d"}}>Ahamed</span></h1>
                    <p className="text-2xl mb-4 lg:text-left md:text-center font-bold">A Web Developer and A Designer</p>
                    <p style={{ color: "#f9004d"}} className="text-lg lg:text-left md:text-center">
                        A Front-End Web Developer who is a tech industry professional and builds the front portion of websites
                        that customers, guests, or clients use on a daily basis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;