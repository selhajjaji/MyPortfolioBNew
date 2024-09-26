import app from '../src/assets/developer.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import myPhoto from '../src/assets/myPhoto.jpg';
import resume from '../src/assets/resume.pdf';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill" >
    
          <div className="skillBar"  >
               <img src={app} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Backend developer</h2>
               <p>My name is Sabra, and I hold a Bachelor’s degree in Mathematics and Computer Science, as well as a Master’s degree in Applied Computer Science. I have six years of experience as a software developer, primarily focusing on backend development and utilizing agile methodologies.</p>

               <p> I began my career at Capgemini, where I worked for six months before moving to Cegedim Insurance Solutions. During my time there, I contributed to various projects, including third-party application maintenance for insurance software, primarily using C and PL/SQL. I also developed and maintained new functionalities and web applications for frontal services, employing technologies such as Java, Spring, Maven, and web services (both SOAP and REST) for five and a half years.</p>

               <p>Currently, I am pursuing a program in artificial intelligence at Centennial College, driven by my strong interest in the field and its future potential.</p>
               </div>

          </div>          
                  
     </section>  
     <img src={myPhoto} alt="profile" className="bbg" width="750" height="750" align="right" />
        <section id="skill">
        </section> 
        <p>
                You can view and download my resume using the link below:
            </p>
            <p>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="resumeLink">
                Download My Resume
            </a> 
            </p>

     </>
    }
    