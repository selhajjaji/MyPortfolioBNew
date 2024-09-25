import hire from '../src/assets/hire.jpg';
import myPhoto from '../src/assets/myPhoto.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Sabra Elhajjaji</span> 
          <img src={myPhoto} alt="profile" className="bbg" width="750" height="750" align="right" />
          <br/>Backend developer</span>
          <p className="introPara">Six years of experience in software development, with a focus on backend development</p>
          <p className="introPara">Bilingual competencies in French and English plus the Arabic mother tongue.</p>

          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    