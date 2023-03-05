import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav--wrapper">
            <nav className="navbar navbar-expand-sm">
                <div className="">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navbar-nav--item">
                                <Link to='/' className=" active" aria-current="page">Home</Link>
                            </li>
                            <li className="navbar-nav--item">
                                <Link to='/about' className="">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
