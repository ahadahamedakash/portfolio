import project1 from '../../assets/img/rhythmicFever.jpg';
import project2 from '../../assets/img/toyland.jpg';
import project3 from '../../assets/img/koreanCookery.jpg';

const Projects = () => {
    return (
        <div className='px-5'>
            <h1 className='text-4xl font-bold mt-10 mb-5 text-center text-white'>My Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols gap-5 mx-auto px-5 md:mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl md:mx-auto">
                    <figure><img className='p-5 rounded' style={{ height: 'full' }} src={project1} alt="PROJECT" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black font-bold text-xl mb-5">Project Name: <span style={{ color: "#f9004d" }} className=' font-bold text-xl'>Rhythmic Fever</span></h2>
                        <p className='text-black'>This project is a summer camp program. Where there is many mentor who teach to dance. Here anyone can enroll to learn dance. There is a sign up page, a login page and a dashboard.</p>
                        <div className="card-actions justify-between my-5">
                            <a style={{ color: "#f9004d" }} href="https://rhythmic-fever.web.app/">Live Site</a>
                            <a style={{ color: "#f9004d" }} href="https://github.com/ahad1033/rhythmic-fever-client-code">Client Code</a>
                            <a style={{ color: "#f9004d" }} href="https://github.com/ahad1033/rhythmic-fever-server-code">Server Code</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl md:mx-auto">
                    <figure><img className='p-5 rounded' style={{ height: 'full' }} src={project2} alt="PROJECT" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black font-bold text-xl mb-5">Project Name: <span style={{ color: "#f9004d" }} className=' font-bold text-xl'>ToyLand</span></h2>
                        <p className='text-black'>This is a website of toys. Where there is various kind of toys.</p>
                        <div className="card-actions justify-between my-5">
                            <a style={{ color: "#f9004d" }} href="https://toyland-3cd1a.web.app/">Live Site</a>
                            <a style={{ color: "#f9004d" }} href="https://github.com/ahad1033/toy-land-client-code">Client Code</a>
                            <a style={{ color: "#f9004d" }} href="https://github.com/ahad1033/toy-land-server-code">Server Code</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl md:mx-auto">
                    <figure><img className='p-5 rounded' style={{ height: 'full' }} src={project3} alt="PROJECT" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black font-bold text-xl mb-5">Project Name: <span style={{ color: "#f9004d" }} className=' font-bold text-xl'>Korean Cookery</span></h2>
                        <p className='text-black'>This is a korean recipe page. There is many chefs and their recipes. Anyone can learn to cook them by reading the recipes.</p>
                        <div className="card-actions justify-between my-5">
                            <a style={{ color: "#f9004d" }} href="https://korean-cookery.web.app/">Live Site</a>
                            <a style={{ color: "#f9004d" }} href="https://github.com/ahad1033/korean-cookery-client-code">Client Code</a>
                            <a style={{ color: "#f9004d" }} href="https://github.com/ahad1033/korean-cookery-server-code">Server Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;