import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faNodeJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className='mb-2 px-10'>
            <h1 className='text-center text-5xl text-white font-bold mb-10'>Skills</h1>
            <div id='container' className='grid lg:grid-cols-4 md:grid-cols gap-10 mx-auto'>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faHtml5} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">HTML5</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faCss3} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">CSS3</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faJs} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">JavaScript</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faNodeJs} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">Node JS</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faCode} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">Express JS</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faVuejs} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">Vue JS</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faDatabase} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">Mongo DB</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faBootstrap} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">Bootstrap</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faCode} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">Tailwind CSS</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center px-10'>
                    <div className="card bg-base-100 shadow-xl text-center" style={{ width: "200px", height: "200px" }}>
                        <figure><FontAwesomeIcon style={{ color: "#f9004d" }} className='pt-10 text-5xl' icon={faGithub} /></figure>
                        <div className="card-body text-center">
                            <h2 style={{ color: "#f9004d" }} className="text-center text-3xl font-bold">GitHub</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;