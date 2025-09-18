import '../styles/header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <main className='header_container'>
            <header>
                <div className="navBar">
                    <nav>
                        <ul className="navLinks">
                            <li>
                                <Link to="/" className='elements'>
                                    <div className="elementoNav">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <path d="M9 22V12h6v10" />
                                        </svg>
                                        <p>Home</p>
                                    </div>
                                </Link>
                            </li>
                            <li><Link to="/about" className='elements'>
                                <div className="elementoNav">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 8h.01" />
                                        <path d="M11 12h1v6" />
                                    </svg>
                                    <p>About Us</p>
                                </div>
                            </Link></li>
                            <li><Link to="/donate" className='elements'>
                                <div className="elementoNav">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">

                                        <path d="M3 15.5c1.5 0 2.5-.5 4-.5h4.5a2 2 0 0 1 0 4H9" />
                                        <path d="M3 15.5v1.5a2 2 0 0 0 2 2h6" />
                                        <path d="M16.5 7.5c-1.1-1.1-2.9-1.1-4 0-1.1-1.1-2.9-1.1-4 0s-1.1 2.9 0 4l4 4 4-4c1.1-1.1 1.1-2.9 0-4Z" />
                                    </svg>

                                    <p>Donate</p>
                                </div>
                            </Link></li>
                            <li><Link to="/contact" className='elements'>
                                <div className="elementoNav">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                                        <path d="m3 7 9 6 9-6" />
                                    </svg>

                                    <p>Contact</p>
                                </div>
                            </Link></li>
                            <li><Link to="/add-charity" className='elements'>
                                <div className='elementoNav'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20.5 6.6 15c-2.1-2.1-2.1-5.4 0-7.4 1.8-1.8 4.4-1.5 5.9.2 1.5-1.7 4.1-2 5.9-.2 2.1 2.1 2.1 5.4 0 7.4L12 20.5z" />
                                        <circle cx="18.5" cy="6.5" r="3.5" />
                                        <path d="M18.5 4.8v3.4M16.8 6.5h3.4" />
                                    </svg>

                                    <p>Add Charity</p>
                                </div>
                            </Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="logoAndName">
                    <img src="/src/assets/logo.jpg" alt="Charity Logo" className="logo" />
                    <h1 className="h1Logo"><Link to="/">CHARITY</Link></h1>
                </div>
                <div>
                    <button className="headerButton">Login</button>
                    <button className="headerButton">Sign Up</button>
                </div>
            </header>
        </main>
    );
};




export default Header

