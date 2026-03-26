import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Footer.scss'
import { trackEvent } from '../analytics';

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/Ruturaj-Vasant"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent('outbound_click', { destination: 'https://github.com/Ruturaj-Vasant', label: 'footer-github' })}
        ><GitHubIcon/></a>
        <a
          href="https://www.linkedin.com/in/ruturaj-tambe-929364169/"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent('outbound_click', { destination: 'https://www.linkedin.com/in/ruturaj-tambe-929364169/', label: 'footer-linkedin' })}
        ><LinkedInIcon/></a>
        <a
          href="/resume/Ruturaj_Tambe_Resume.pdf"
          download
          rel="noreferrer"
          title="Download Resume"
          onClick={() => trackEvent('resume_download', { location: 'footer' })}
        ><DownloadIcon/></a>
        <span title="Visitors" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 8 }}>
          <img
            className="visitor-badge"
            src="https://visitor-badge.laobi.icu/badge?page_id=Ruturaj-Vasant.Profile"
            alt="Visitor count"
          />
        </span>
      </div>
      <p>Let’s build something impactful together.</p>
    </footer>
  );
}

export default Footer;
