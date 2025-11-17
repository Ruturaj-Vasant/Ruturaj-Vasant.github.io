import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Ruturaj-Vasant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ruturaj-tambe-929364169/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="/resume/Ruturaj_Tambe_Resume.pdf" download rel="noreferrer" title="Download Resume"><DownloadIcon/></a>
      </div>
      <p>Let’s build something impactful together.</p>
    </footer>
  );
}

export default Footer;
