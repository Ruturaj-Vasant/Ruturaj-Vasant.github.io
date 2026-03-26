import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import profileImage from '../assets/images/ProfilePic.jpg';
import '../assets/styles/Main.scss';
import { trackEvent } from '../analytics';

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

  const handleOutboundClick = (destination: string, label: string) => {
    trackEvent('outbound_click', { destination, label });
  };

  return (
    <div className="container">
      <div className={`background-glow ${theme}-mode`} />
      {/* Fixed vertical social icons rail (desktop only) */}
      <div className={`social_icons ${theme}-mode`}>
        <a
          href="https://github.com/Ruturaj-Vasant"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          onClick={() => handleOutboundClick('https://github.com/Ruturaj-Vasant', 'hero-rail-github')}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/ruturaj-tambe-929364169/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          onClick={() => handleOutboundClick('https://www.linkedin.com/in/ruturaj-tambe-929364169/', 'hero-rail-linkedin')}
        >
          <LinkedInIcon />
        </a>
        <a
          href="/resume/Ruturaj_Tambe_Resume.pdf"
          download
          rel="noreferrer"
          aria-label="Download Resume"
          onClick={() => trackEvent('resume_download', { location: 'hero-rail' })}
        >
          <DownloadIcon />
        </a>
      </div>
      {/* Fixed vertical email rail (desktop only) */}
      <div className={`email-rail ${theme}-mode`}>
        <a
          href="mailto:rvt2018@nyu.edu"
          aria-label="Email Ruturaj"
          onClick={() => trackEvent('contact_click', { method: 'email', location: 'hero-rail' })}
        >
          rvt2018@nyu.edu
        </a>
      </div>
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
              <a
                href="https://github.com/Ruturaj-Vasant"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleOutboundClick('https://github.com/Ruturaj-Vasant', 'hero-body-github')}
              ><GitHubIcon/></a>
              <a
                href="https://www.linkedin.com/in/ruturaj-tambe-929364169/"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleOutboundClick('https://www.linkedin.com/in/ruturaj-tambe-929364169/', 'hero-body-linkedin')}
              ><LinkedInIcon/></a>
              <a
                href="/resume/Ruturaj_Tambe_Resume.pdf"
                download
                rel="noreferrer"
                aria-label="Download Resume"
                onClick={() => trackEvent('resume_download', { location: 'hero-body' })}
              ><DownloadIcon/></a>
            </div>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Ruturaj-Vasant"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleOutboundClick('https://github.com/Ruturaj-Vasant', 'hero-mobile-github')}
            ><GitHubIcon/></a>
            <a
              href="https://www.linkedin.com/in/ruturaj-tambe-929364169/"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleOutboundClick('https://www.linkedin.com/in/ruturaj-tambe-929364169/', 'hero-mobile-linkedin')}
            ><LinkedInIcon/></a>
            <a
              href="/resume/Ruturaj_Tambe_Resume.pdf"
              download
              rel="noreferrer"
              aria-label="Download Resume"
              onClick={() => trackEvent('resume_download', { location: 'hero-mobile' })}
            ><DownloadIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
