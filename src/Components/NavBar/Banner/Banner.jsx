
const Banner = () => {
    return (
        <section className="text-white py-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000" alt="DEVELOPER" className="mx-auto rounded-lg w-full p-10" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left pr-60">
                    <h1 className="text-4xl font-bold mb-4">Ahad Ahamed</h1>
                    <p className="text-xl mb-4">I am a web developer</p>
                    <p className="text-lg">
                        A Front-End Web Developer is a tech industry professional who builds the front portion of websites
                        that customers, guests, or clients use on a daily basis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;