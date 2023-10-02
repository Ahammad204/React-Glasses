import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='text-center mt-52'>
            <h1 className='text-6xl font-bold'>
                404
            </h1>

            <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>
            <Link to="/"><button className="btn btn-secondary mt-5">Home</button></Link>
        </div>
    );
};

export default NotFound;