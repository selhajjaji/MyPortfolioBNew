import React from 'react';
import { Link } from 'react-router-dom';
import background from '../src/assets/background.jpg';
export default function Layout() {
 return (
 <>
 < img src={background} alt="background" className="background"  style={{ width: '100%',height: 'auto',maxHeight: '650px',  objectFit: 'cover',   }}/>
 <h1 style={{
        fontFamily: 'Georgia, serif', 
        fontSize: '3em',              
        color: '#2c3e50',              
        textAlign: 'center',          
        letterSpacing: '2px',          
        textTransform: 'uppercase',   
        margin: '20px 0',            
    }}>My Portfolio</h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>|  <Link to="/services">Services</Link> |  <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
