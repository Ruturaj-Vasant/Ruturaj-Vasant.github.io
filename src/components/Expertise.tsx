import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {/* 
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                */}

                <div className="skill">
                  <FontAwesomeIcon icon={faReact} size="3x"/>
                  <h3>Software & Performance Engineering</h3>
                  <p>
                    Specialized in building and optimizing scalable, distributed software solutions. Adept at identifying and resolving performance bottlenecks to ensure robust and efficient systems. I’ve also built diverse web applications from scratch, demonstrating proficiency in the SDLC process.
                  </p>
                  <div className="flex-chips">
                    <span className="chip-title">Tech Stack:</span>
                    {[
                      "Python", "Go", "Microservices", "API Optimization", "JMeter", "Locust",
                      "Datadog", "Splunk", "Postgres", "Redis", "React", "JavaScript", "HTML5",
                        "SASS", "Flask", "SQL", "PostgreSQL", "Postman"
                    ].map((label, index) => (
                      <Chip key={index} className='chip' label={label} />
                    ))}
                  </div>
                </div>

                <div className="skill">
                  <FontAwesomeIcon icon={faDocker} size="3x"/>
                  <h3>DevOps, SRE & Applied AI</h3>
                  <p>
                    Skilled in managing cloud infrastructure and automating CI/CD DevOps pipelines. Experienced in capacity planning and cost optimization efforts. Built and managed CI/CD pipelines, led cloud migrations, and implemented infrastructure-as-code across multiple environments to boost efficiency and reduce operational overhead. Passionate about exploring applied AI solutions using generative models to build smarter, user-centric applications.
                  </p>
                  <div className="flex-chips">
                    <span className="chip-title">Tech Stack:</span>
                    {[
                      "Microsoft Azure", "AWS", "Kubernetes", "Docker", "YAML", "Jenkins",
                      "Git", "Firebase", "Terraform", "OpenAI", "Hugging Face", "Ollama",
                      "Pandas", "Selenium"
                    ].map((label, index) => (
                      <Chip key={index} className='chip' label={label} />
                    ))}
                  </div>
                </div>

                <div className="skill">
                  <FontAwesomeIcon icon={faPython} size="3x"/>
                  <h3>Project Management & Leadership</h3>
                  <p>
                    Experienced in leading cross-functional teams and aligning engineering initiatives with business goals. Adept at managing timelines, mitigating risks, and facilitating collaboration between stakeholders. Focused on delivering high-impact results through strategic planning, resource optimization, and continuous team development.
                  </p>
                  <div className="flex-chips">
                    <span className="chip-title">Core Skills:</span>
                    {[
                      "Agile Methodologies", "Stakeholder Communication", "Risk Assessment", "Resource Allocation",
                      "Cost Optimization", "Capacity Planning", "Team Mentorship", "Strategic Planning",
                      "Data-Driven Decision Making"
                    ].map((label, index) => (
                      <Chip key={index} className='chip' label={label} />
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;