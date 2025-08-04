import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/ProfilePic.jpg';
import '../assets/styles/Main.scss';

function Main() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--x', `${x}px`);
      document.documentElement.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("dark-mode")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className={`background-glow ${theme}-mode`} />
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Ruturaj Tambe" />
        </div>
        <div className="content">
          <div className="header">
            <h1>Ruturaj Tambe</h1>
            <p className="tagline">
              Software Engineer 
            </p>
            <div className="social_icons">
              <a href="https://github.com/Ruturaj-Vasant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/ruturaj-tambe-929364169/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ruturaj-Vasant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ruturaj-tambe-929364169/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;