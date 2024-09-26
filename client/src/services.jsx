import webDevImage from '../src/assets/web-development.jpg';
import programmingImage from '../src/assets/programming.avif';
import '../src/services.css';
import { Link } from 'react-router-dom'
export default function Services() {
    return (
        <section id="services">
            <h1>My Services</h1>
            <div className="serviceList">
                <div className="service">
                    <img src={webDevImage} alt="Web Development" className="serviceImage" />
                    <h2>Web Development</h2>
                    <p>I create responsive and high-performing websites tailored to your needs.</p>
                </div>              
                <div className="service">
                    <img src={programmingImage} alt="General Programming" className="serviceImage" />
                    <h2>General Programming</h2>
                    <p>Custom software solutions and scripting for various applications.</p>
                </div>
            </div>
            <p className="contactCallToAction">
                Interested in my services? 
                <Link to="/contact" className="contactButton"> Contact me!</Link>
            </p>
        </section>
    );
}