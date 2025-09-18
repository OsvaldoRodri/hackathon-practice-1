import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/donate.css";

const Donate: React.FC = () => {

    return (
        <main className="donate_container">
            <main style={{ padding: "1rem 0" }}>
                <h2>Available Charities"</h2>
                <p>Your one-stop solution for seamless charitable donations.</p>
                {/* Charity list */}
                <div className="container">
                    <section>
                        <h1>Featured Charities</h1>
                        <ul>
                            <li>
                                <Link to="/save_dogs">
                                    <img src="/src/assets/save_dogs.jpg" alt="save_dogs" className="donate_img" />
                                </Link>
                                <h2 className="donate_title"><Link to="/save_dogs">Perros Atropellados</Link></h2>
                                <p>- Donate money for dogs that had been hit by a car</p>
                            </li>
                            <li>
                                <Link to="/save_the_children">
                                    <img src="/src/assets/save_children.jpg" alt="save_children" className="donate_img" />
                                </Link>
                                <h2 className="donate_title"><Link to="/save_the_children">Save the Children</Link></h2>
                                <p>- Support children's education and healthcare worldwide.</p>
                            </li>
                        </ul>
                    </section>
                    {/* More charities */}
                    <section>
                        <h1>Explore More Charities</h1>
                        <ul>
                            <li>
                                <Link to="/charity_water">
                                    <img src="/src/assets/ngga_charity.jpg" alt="charity_water" className="donate_img" />
                                </Link>
                                <h2 className="donate_title"><Link to="/charity_water">Charity: Water</Link></h2>
                                <p>- Bring clean and safe drinking water to communities in need.</p>
                            </li>
                            <li>
                                <Link to="/oxfam">
                                    <img src="/src/assets/feed_charity.jpg" alt="oxfam" className="donate_img" />
                                </Link>
                                <h2 className="donate_title"><Link to="/oxfam">Oxfam</Link></h2>
                                <p>- Work to end poverty and injustice around the world.</p>
                            </li>
                        </ul>
                    </section>
                </div>

            </main>
        </main>
    );
}
export default Donate;