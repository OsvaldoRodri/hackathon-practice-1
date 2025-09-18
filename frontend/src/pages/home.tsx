import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/home.css";

const home: React.FC = () => {

    return (
        <main className="home-container">
            <h1>Welcome to "Charity with OpenPayments"</h1>
            <p>Your one-stop solution for seamless charitable donations.</p>
            <section>
                <h2>

                    <Link to="/donate">
                        Donation Options
                    </Link>

                </h2>
            </section>
        </main>
    );
}
export default home;