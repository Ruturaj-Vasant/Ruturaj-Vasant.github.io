import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ScienceIcon from '@mui/icons-material/Science';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import '../assets/styles/Project.scss';

import { useState, useEffect } from "react";
import streak1 from '../assets/images/Streakmate1.png';
import streak2 from '../assets/images/Streakmate2.png';
import streak3 from '../assets/images/Streakmate3.png';
import streak4 from '../assets/images/Streakmate4.png';
import streak5 from '../assets/images/Streakmate5.png';
import streak6 from '../assets/images/Streakmate6.png';
import sys1 from '../assets/images/Systematic-Investing-Risk-Analysis-1.png';
import sys2 from '../assets/images/Systematic-Investing-Risk-Analysis-2.png';
import sys3 from '../assets/images/Systematic-Investing-Risk-Analysis-3.png';
import sys4 from '../assets/images/Systematic-Investing-Risk-Analysis-4.png';
import sys5 from '../assets/images/Systematic-Investing-Risk-Analysis-5.png';
import sys6 from '../assets/images/Systematic-Investing-Risk-Analysis-6.png';
import trend1 from '../assets/images/Trend-1.png';
import trend2 from '../assets/images/Trend-2.png';
import trend3 from '../assets/images/Trend-3.png';
import snp1 from '../assets/images/SNP500-Vol-1.png';
import snp2 from '../assets/images/SNP500-Vol-2.png';
import snp3 from '../assets/images/SNP500-Vol-3.png';
import snp4 from '../assets/images/SNP500-Vol-4.png';
import niftyImg from '../assets/images/Nifty_50_Most_Volatile_days.jpeg';
import polThumb from '../assets/images/Political_Economy_of_Corporate_Fraud.png';
import lekin1 from '../assets/images/Lekin_1.png';
import lekin2 from '../assets/images/Lekin_2.png';
import aiContainerImg from '../assets/images/AI-in-container.png';
import imagenetImg from '../assets/images/imagenet-performance-benchmark.png';
import engageImg from '../assets/images/Engage_Pro_tracker.png';
import gpuScriptThumb from '../assets/images/gpu-creation-script.svg';
import dsGenericThumb from '../assets/images/ds-generic.svg';
import couponVideoThumb from '../assets/images/coupon-video-thumb.svg';
import { dsNotebooks } from '../data/dsNotebooks';

// Generic reusable Slideshow component
export function Slideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div
      className="slideshow"
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const delta = touchEndX - touchStartX;
        if (delta > 50) prev();
        else if (delta < -50) next();
      }}
    >
      <div className="slideshow-image-wrapper">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="zoom"
        />
      </div>
    </div>
  );
}

// Image arrays for slideshows
const streakmateImages = [streak1, streak2, streak3, streak4, streak5, streak6];
const sysInvestingImages = [sys1, sys2, sys3, sys4, sys5, sys6];
const trendImages = [trend1, trend2, trend3];
const snpImages = [snp1, snp2, snp3, snp4];
const lekinImages = [lekin1, lekin2];

// Stable tab definitions (module-scope to avoid hook deps)
const TAB_DEFS = [
  { id: 'research-projects', label: 'Research Projects' },
  { id: 'personal-projects', label: 'Personal Projects' },
  { id: 'understanding-finance', label: 'Understanding Finance' },
  { id: 'understanding-cloud-ml', label: 'Understanding Cloud & ML' },
  { id: 'understanding-ds-ai', label: 'Understanding DS & AI' },
];

function Project() {
  const [showMore, setShowMore] = useState(false);
  const [financeExpanded, setFinanceExpanded] = useState(false);
  const [cloudExpanded, setCloudExpanded] = useState(false);
  const [researchExpanded, setResearchExpanded] = useState(false);
  const [personalExpanded, setPersonalExpanded] = useState(false);
  const [dsExpanded, setDsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('research-projects');

  useEffect(() => {
    if (window?.location?.hash === '#understanding-finance') {
      setFinanceExpanded(true);
    }
    if (window?.location?.hash === '#understanding-cloud-ml') {
      setCloudExpanded(true);
    }
    if (window?.location?.hash === '#research-projects') {
      setResearchExpanded(true);
    }
    if (window?.location?.hash === '#personal-projects') {
      setPersonalExpanded(true);
    }
    if (window?.location?.hash === '#understanding-ds-ai') {
      setDsExpanded(true);
    }
    const hash = window?.location?.hash?.replace('#','');
    if (hash && TAB_DEFS.some(t => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Mobile: auto-expand all sections for simpler UX
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setResearchExpanded(true);
      setPersonalExpanded(true);
      setFinanceExpanded(true);
      setCloudExpanded(true);
      setDsExpanded(true);
    }
  }, []);

  useEffect(() => {
    // Scrollspy: highlight tab based on section visibility
    const headers = TAB_DEFS.map(t => document.getElementById(t.id)).filter(Boolean) as Element[];
    if (!('IntersectionObserver' in window) || headers.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (TAB_DEFS.some(t => t.id === id)) {
            setActiveTab(id);
          }
        }
      })
    }, { root: null, rootMargin: '-45% 0% -45% 0%', threshold: 0 });
    headers.forEach(h => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80; // account for navbar + sticky tabs
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const onTabClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    window.history.replaceState(null, '', `#${id}`);
    scrollToSection(id);
  };

  const onTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const max = TAB_DEFS.length;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      let next = idx;
      if (e.key === 'ArrowRight') next = (idx + 1) % max;
      if (e.key === 'ArrowLeft') next = (idx - 1 + max) % max;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = max - 1;
      const t = TAB_DEFS[next];
      setActiveTab(t.id);
      scrollToSection(t.id);
      window.history.replaceState(null, '', `#${t.id}`);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const t = TAB_DEFS[idx];
      setActiveTab(t.id);
      scrollToSection(t.id);
      window.history.replaceState(null, '', `#${t.id}`);
    }
  };

  return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        {/* Sticky scroll-aware tablist */}
        <div className="section-nav" role="tablist" aria-label="Project sections">
          {TAB_DEFS.map((t, idx) => (
            <a
              key={t.id}
              id={`tab-${t.id}`}
              href={`#${t.id}`}
              role="tab"
              aria-controls={t.id}
              aria-selected={activeTab === t.id}
              tabIndex={activeTab === t.id ? 0 : -1}
              className={`chip${activeTab === t.id ? ' is-active' : ''}`}
              onClick={(e) => onTabClick(e, t.id)}
              onKeyDown={(e) => onTabKeyDown(e, idx)}
            >
              {t.label}
            </a>
          ))}
        </div>

        {/* Research Projects Section (first) */}
        <div id="research-projects" className="section-header section-header--accent">
          <div className="section-title">
            <ScienceIcon fontSize="small" />
            <span>Research Projects</span>
          </div>
          <button
            type="button"
            className="section-toggle"
            aria-expanded={researchExpanded}
            aria-controls="research-section-content"
            onClick={() => setResearchExpanded(v => !v)}
          >
            {researchExpanded ? (
              <>
                Collapse <ExpandLessIcon fontSize="small" />
              </>
            ) : (
              <>
                Expand <ExpandMoreIcon fontSize="small" />
              </>
            )}
          </button>
        </div>
        {/* Subtitle intentionally removed */}

        {!researchExpanded && (
          <div className="compact-grid">
            {/* Compact: Lekin */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setResearchExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setResearchExpanded(true); }}}
              aria-label="Expand Research Projects"
            >
              <div className="compact-thumb">
                <img src={lekin1} alt="Lekin Scheduling System" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Lekin Scheduling System: Python</h3>
                <p className="compact-summary">Python algorithms for legacy C++ LEKIN; plugin architecture.</p>
              </div>
            </div>

            {/* Compact: Political Economy */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setResearchExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setResearchExpanded(true); }}}
              aria-label="Expand Research Projects"
            >
              <div className="compact-thumb">
                <img src={polThumb} alt="Political Economy of Corporate Fraud" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Political Economy of Corporate Fraud</h3>
                <p className="compact-summary">Governance metrics from SEC filings and WRDS; fraud patterns.</p>
              </div>
            </div>
          </div>
        )}

        {researchExpanded && (
          <div className="projects-grid" id="research-section-content">
            {/* Lekin Scheduling System: Python Integration */}
            <div className="project">
              <div className="media-frame">
                <Slideshow images={lekinImages} />
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/Lekin_Python"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                  title="Lekin Scheduling System: Python Integration"
                >
                  <GitHubIcon fontSize="small" />
                  Lekin Scheduling System: Python Integration
                </a>
              </h2>
              <p>
                Developed a Python library replicating the core scheduling algorithms from the original C++ based Lekin system. Includes implementations of FCFS, WSPT, and other algorithms, with a modular structure for future extensions. Currently working on enabling the legacy Windows .exe to understand and execute new Python-based algorithms, allowing for greater flexibility and easier experimentation.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Systems</span> <span className="tag category">Research</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">C++</span> <span className="tag tech">Scheduling Algorithms</span> <span className="tag tech">Windows Integration</span></p>
              </div>
            </div>

            {/* Political Economy of Corporate Fraud */}
            <div className="project">
              <div className="slideshow-image-wrapper">
                <img src={polThumb} alt="Political Economy of Corporate Fraud Thumbnail" className="zoom" />
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/Political-Economy-Of-Corporate-Fraud"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  Political Economy of Corporate Fraud
                </a>
              </h2>
              <p>
                Developed as part of a Research Assistantship at NYU's Wilf Family Department of Politics, this project investigates the intersection of corporate governance and fraud. It focuses on executive compensation, tenure, turnover, and governance metrics using structured data extraction from SEC filings and WRDS. The system automates data pulls, preprocessing, and analytical queries via SQL and Python.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Research</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">SQL</span> <span className="tag tech">WRDS</span></p>
              </div>
            </div>
          </div>
        )}

        {/* Personal Projects Section (second) */}
        <div id="personal-projects" className="section-header section-header--accent">
          <div className="section-title">
            <PersonOutlineIcon fontSize="small" />
            <span>Personal Projects</span>
          </div>
          <button
            type="button"
            className="section-toggle"
            aria-expanded={personalExpanded}
            aria-controls="personal-section-content"
            onClick={() => setPersonalExpanded(v => !v)}
          >
            {personalExpanded ? (
              <>
                Collapse <ExpandLessIcon fontSize="small" />
              </>
            ) : (
              <>
                Expand <ExpandMoreIcon fontSize="small" />
              </>
            )}
          </button>
        </div>
        {/* Subtitle intentionally removed */}

        {!personalExpanded && (
          <div className="compact-grid">
            {/* Compact: Systematic Trading: Dynamic Exposure */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setPersonalExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPersonalExpanded(true); }}}
              aria-label="Expand Personal Projects"
            >
              <div className="compact-thumb">
                <img src={require('../assets/images/DynamicExposureFramework.png')} alt="Systematic Trading: Dynamic Exposure" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Systematic Trading: Dynamic Exposure</h3>
                <p className="compact-summary">Backtests using volatility/trend signals; dynamic exposure vs baselines.</p>
              </div>
            </div>

            {/* Compact: StreakMate */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setPersonalExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPersonalExpanded(true); }}}
              aria-label="Expand Personal Projects"
            >
              <div className="compact-thumb">
                <img src={streak1} alt="StreakMate" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">StreakMate</h3>
                <p className="compact-summary">Automated habit/task journal with reminders and analytics.</p>
              </div>
            </div>

            {/* Compact: EngagePro */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setPersonalExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPersonalExpanded(true); }}}
              aria-label="Expand Personal Projects"
            >
              <div className="compact-thumb">
                <img src={engageImg} alt="EngagePro Outreach Tracker" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">EngagePro Outreach Tracker</h3>
                <p className="compact-summary">Personalized outreach automation; tracking pixels and logs.</p>
              </div>
            </div>

            {/* Compact: Coupon Management */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setPersonalExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPersonalExpanded(true); }}}
              aria-label="Expand Personal Projects"
            >
              <div className="compact-thumb">
                <img src={couponVideoThumb} alt="Coupon Management System video thumbnail" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Coupon Management System</h3>
                <p className="compact-summary">Wallet passes with validation, tracking, and Sheets integration.</p>
              </div>
            </div>
          </div>
        )}

        {personalExpanded && (
          <div className="projects-grid" id="personal-section-content">
            {/* Systematic Trading: Dynamic Exposure */}
            <div className="project">
              <div className="media-frame">
                <img src={require('../assets/images/DynamicExposureFramework.png')} alt="Systematic Trading Project Screenshot" className="zoom" />
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/SystematicTrading_DynamicExposure"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  Systematic Trading: Dynamic Exposure
                </a>
              </h2>
              <div className="tags">
                <p>
                  <strong>Report:</strong>
                  <a
                    href="https://github.com/Ruturaj-Vasant/Profile/blob/main/docs/Robo_Advisors_Systematic_Trading_Report.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="tag category"
                    style={{ textDecoration: 'none', marginLeft: '0.5rem' }}
                  >
                    View Full Project Report (PDF)
                  </a>
                </p>
                <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Pandas</span> <span className="tag tech">Matplotlib</span></p>
              </div>
              <p>
                An ML-driven backtesting framework analyzing SPY trading strategies using volatility signals, trend filters, and technical indicators. The framework compares baseline, trend-conditioned volatility scaling (TCVS), and dynamic exposure strategies against mean reversion models. It includes notebooks, performance metrics, and visualizations to optimize trading logic.
              </p>
            </div>

            {/* StreakMate: Automated Task Journal */}
            <div className="project">
              <Slideshow images={streakmateImages} />
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/Streakmate-Googleappscript-Automated-Task-Journal"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  StreakMate: Automated Task Journal
                </a>
              </h2>
              <p>
                A lightweight, customizable habit and task tracker built with Google Apps Script and Google Sheets. Supports habit streak tracking, recurring tasks, automated reminders, inline comments, cumulative counters, and analytics—all fully integrated into a spreadsheet-based interface.
              </p>
              <p>
                <strong>Live Demo:</strong>
                <a
                  href="https://script.google.com/macros/s/AKfycbwNqHKL7BKRRs7ZXwmX8yKk9zkS6v_vMbSFbkOP6rR2TAy3oJ0ifvWZcI1u8kT40AYr/exec"
                  target="_blank"
                  rel="noreferrer"
                  className="tag category"
                  style={{ textDecoration: 'none', marginLeft: '0.5rem' }}
                >
                  Visit Website
                </a>
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Productivity</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Google Apps Script</span> <span className="tag tech">HTML</span> <span className="tag tech">JavaScript</span></p>
              </div>
            </div>

            {/* EngagePro Outreach Tracker */}
            <div className="project">
              <div className="media-frame">
                <img src={engageImg} alt="EngagePro Outreach Tracker Thumbnail" className="zoom" />
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/EngagePro-Outreach-Tracker"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  EngagePro Outreach Tracker
                </a>
              </h2>
              <p>
                A personalized email and outreach automation tool built on Google Apps Script. Helps students and professionals manage outreach campaigns by sending emails, embedding tracking pixels, and logging interaction data like opens and responses. Originally built for professor/recruiter outreach, it’s also usable by sales teams and job seekers.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Automation</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Google Apps Script</span> <span className="tag tech">JavaScript</span> <span className="tag tech">HTML</span></p>
              </div>
            </div>

            {/* Coupon Management System */}
            <div className="project">
              <div className="media-frame">
                <iframe
                  src="https://www.youtube.com/embed/FgY6r2kxnMY?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&vq=hd1080&loop=1&playlist=FgY6r2kxnMY"
                  title="Coupon Management System Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/Coupon-Management-System"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  Coupon Management System
                </a>
              </h2>
              <p>
                Digital pass generation system integrated with PassKit API for Apple Wallet, offering real-time form validation, usage tracking, and Google Sheets integration. Supports multiple service types and expiration date validation. Designed for both iOS and Android, with email notifications and cross-platform compatibility.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Automation</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">JavaScript</span> <span className="tag tech">Google Apps Script</span> <span className="tag tech">PassKit</span> <span className="tag tech">Apple Wallet</span></p>
              </div>
            </div>
          </div>
        )}

        {/* Understanding Finance Section */}
        <div id="understanding-finance" className="section-header section-header--accent">
          <div className="section-title">
            <ShowChartIcon fontSize="small" />
            <span>Understanding Finance</span>
          </div>
          <button
            type="button"
            className="section-toggle"
            aria-expanded={financeExpanded}
            aria-controls="finance-section-content"
            onClick={() => setFinanceExpanded(v => !v)}
          >
            {financeExpanded ? (
              <>
                Collapse <ExpandLessIcon fontSize="small" />
              </>
            ) : (
              <>
                Expand <ExpandMoreIcon fontSize="small" />
              </>
            )}
          </button>
        </div>
        <p className="section-subtitle">Concise notebooks and analyses to build intuition in markets and risk.</p>

        {!financeExpanded && (
          <div className="compact-grid">
            {/* Compact Card: S&P 500 */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setFinanceExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFinanceExpanded(true); }}}
              aria-label="Expand Understanding Finance"
            >
              <div className="compact-thumb">
                <img src={snp1} alt="S&P 500: Volatility vs Returns" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">S&amp;P 500: Volatility vs Returns</h3>
                <p className="compact-summary">Normalized volatility indicators vs returns; concurrent & lagged effects with quintile analysis.</p>
              </div>
            </div>

            {/* Compact Card: Nifty50 */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setFinanceExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFinanceExpanded(true); }}}
              aria-label="Expand Understanding Finance"
            >
              <div className="compact-thumb">
                <img src={niftyImg} alt="Nifty50 Most Volatile Days" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Finance: Nifty50 Most Volatile Days</h3>
                <p className="compact-summary">Daily returns, rolling volatility, Z-scores; identify historically extreme days.</p>
              </div>
            </div>

            {/* Compact Card: Systematic Trend-Following */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setFinanceExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFinanceExpanded(true); }}}
              aria-label="Expand Understanding Finance"
            >
              <div className="compact-thumb">
                <img src={trend1} alt="Systematic Trend-Following Strategies" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Systematic Trend-Following Strategies</h3>
                <p className="compact-summary">Crossovers & breakouts across assets; Sharpe/Sortino, drawdowns, vol-weighting.</p>
              </div>
            </div>

            {/* Compact Card: Systematic Investing: Risk Analysis */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setFinanceExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFinanceExpanded(true); }}}
              aria-label="Expand Understanding Finance"
            >
              <div className="compact-thumb">
                <img src={sys1} alt="Systematic Investing: Risk Analysis" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">Systematic Investing: Risk Analysis</h3>
                <p className="compact-summary">Correlations, drawdowns, equal vs inv-vol weights, simple forecasting.</p>
              </div>
            </div>
          </div>
        )}

        {financeExpanded && (
          <div className="projects-grid" id="finance-section-content">
              {/* S&P 500: Volatility vs Returns */}
              <div className="project">
                  <Slideshow images={snpImages} />
                  <h2>
                      <a
                          href="https://github.com/Ruturaj-Vasant/SNP500-Volatility-Vs-Returns"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                              verticalAlign: 'middle',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              textDecoration: 'none',
                              color: 'inherit'
                          }}
                      >
                          <GitHubIcon fontSize="small" />
                          S&amp;P 500: Volatility vs Returns
                      </a>
                  </h2>
                  <p>
                      Analyzed the relationship between S&amp;P 500 volatility and returns using normalized indicators across historical data. Studied concurrent and lagged volatility effects, segmented results into quintiles, and evaluated potential predictive signals. Applied systematic investing techniques to assess behavioral patterns and generate actionable insights.
                  </p>
                  <div className="tags">
                      <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                      <p><strong>Technologies:</strong> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Data Analysis</span></p>
                  </div>
              </div>

              {/* Finance: Nifty50 Most Volatile Days */}
              <div className="project">
                  <div className="media-frame">
                    <img
                      src={niftyImg}
                      alt="Nifty50 Most Volatile Days Thumbnail"
                      className="zoom"
                    />
                  </div>
                  <h2>
                      <a
                          href="https://github.com/Ruturaj-Vasant/Finance_Nifty50_Most_Volatile_Days"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                              verticalAlign: 'middle',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              textDecoration: 'none',
                              color: 'inherit'
                          }}
                      >
                          <GitHubIcon fontSize="small" />
                          Finance: Nifty50 Most Volatile Days
                      </a>
                  </h2>
                  <p>
                      This exploratory project analyzes historical Nifty 50 stock data to assess market volatility. It computes daily returns, rolling volatility, and Z-scores using Python, identifying historically extreme market days. Provides insights into behavior of Indian financial markets and demonstrates data cleaning, return computation, and volatility filtering techniques.
                  </p>
                  <div className="tags">
                      <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Finance</span></p>
                      <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Data Analysis</span></p>
                  </div>
              </div>

              {/* Systematic Trend-Following Strategies */}
              <div className="project">
                  <Slideshow images={trendImages} />
                  <h2>
                      <a
                          href="https://github.com/Ruturaj-Vasant/Systematic-Trend-Following"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                              verticalAlign: 'middle',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              textDecoration: 'none',
                              color: 'inherit'
                          }}
                      >
                          <GitHubIcon fontSize="small" />
                          Systematic Trend-Following Strategies
                      </a>
                  </h2>
                  <p>
                      Developed and evaluated multiple trend-following strategies using moving average crossovers and breakouts across fixed income, currency, and equity markets. Performance measured using Sharpe/Sortino ratios, drawdowns, and volatility-weighted combinations. The project includes inverse volatility methods and improvements using EMA-based filters.
                  </p>
                  <div className="tags">
                      <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                      <p><strong>Technologies:</strong> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Quantitative Finance</span></p>
                  </div>
              </div>

              {/* Systematic Investing: Risk Analysis */}
              <div className="project">
                  <Slideshow images={sysInvestingImages} />
                  <h2>
                      <a
                          href="https://github.com/Ruturaj-Vasant/Systematic-Investing-Risk-Analysis"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                              verticalAlign: 'middle',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              textDecoration: 'none',
                              color: 'inherit'
                          }}
                      >
                          <GitHubIcon fontSize="small" />
                          Systematic Investing: Risk Analysis
                      </a>
                  </h2>
                  <p>
                      Analyzed risk and performance of three financial time series over 2,000 days. Computed correlations, drawdowns, and performance metrics under equal and inverse volatility-weighted allocations. Built a predictive model to forecast one asset using others, applying systematic investing principles to enhance portfolio risk-adjusted returns.
                  </p>
                  <div className="tags">
                      <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                      <p><strong>Technologies:</strong> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Quantitative Analysis</span></p>
                  </div>
              </div>
          </div>
        )}

        {/* Understanding Cloud & ML Section */}
        <div id="understanding-cloud-ml" className="section-header section-header--accent">
          <div className="section-title">
            <CloudQueueIcon fontSize="small" />
            <span>Understanding Cloud & ML</span>
          </div>
          <button
            type="button"
            className="section-toggle"
            aria-expanded={cloudExpanded}
            aria-controls="cloudml-section-content"
            onClick={() => setCloudExpanded(v => !v)}
          >
            {cloudExpanded ? (
              <>
                Collapse <ExpandLessIcon fontSize="small" />
              </>
            ) : (
              <>
                Expand <ExpandMoreIcon fontSize="small" />
              </>
            )}
          </button>
        </div>
        <p className="section-subtitle">Infra, containers, and GPU benchmarking for AI workloads.</p>

        {!cloudExpanded && (
          <div className="compact-grid">
            {/* Compact Card: GPU Creation Script */}
            {/* Compact Card: AI in Container */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setCloudExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCloudExpanded(true); }}}
              aria-label="Expand Understanding Cloud & ML"
            >
              <div className="compact-thumb">
                <img src={aiContainerImg} alt="AI in Container thumbnail" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">AI in Container</h3>
                <p className="compact-summary">Containerized AI apps with sane defaults for portability and speed.</p>
              </div>
            </div>

            {/* Compact Card: ImageNet Benchmark */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setCloudExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCloudExpanded(true); }}}
              aria-label="Expand Understanding Cloud & ML"
            >
              <div className="compact-thumb">
                <img src={imagenetImg} alt="ImageNet Performance Benchmark thumbnail" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">ImageNet Performance Benchmark</h3>
                <p className="compact-summary">Measure model throughput/latency under different GPU/container configs.</p>
              </div>
            </div>

            {/* Compact Card: GPU Creation through Terraform */}
            <div
              className="compact-card interactive"
              role="button"
              tabIndex={0}
              onClick={() => setCloudExpanded(true)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCloudExpanded(true); }}}
              aria-label="Expand Understanding Cloud & ML"
            >
              <div className="compact-thumb">
                <img src={gpuScriptThumb} alt="GPU Creation through Terraform thumbnail" />
              </div>
              <div className="compact-content">
                <h3 className="compact-title">GPU Creation through Terraform</h3>
                <p className="compact-summary">Automated GPU instance provisioning and setup for AI workflows.</p>
              </div>
            </div>
          </div>
        )}

        {cloudExpanded && (
          <div className="projects-grid" id="cloudml-section-content">
            {/* AI in Container */}
            <div className="project">
              <div className="media-frame">
                <img src={aiContainerImg} alt="AI in Container thumbnail" className="zoom" />
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/AI-in-Container"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  AI in Container
                </a>
              </h2>
              <p>
                Patterns to containerize AI workloads for reproducibility, portability, and faster iteration.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Cloud</span> <span className="tag category">ML</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Docker</span> <span className="tag tech">Containers</span></p>
              </div>
              </div>

              {/* ImageNet Performance Benchmark */}
              <div className="project">
                <div className="media-frame">
                  <img src={imagenetImg} alt="ImageNet Performance Benchmark thumbnail" className="zoom" />
                </div>
                <h2>
                  <a
                    href="https://github.com/Ruturaj-Vasant/imagenet-performance-benchmark"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      verticalAlign: 'middle',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                    ImageNet Performance Benchmark
                  </a>
                </h2>
                <p>
                  Benchmarking to measure throughput and latency for models/datasets across GPU/container configs.
                </p>
                <div className="tags">
                  <p><strong>Categories:</strong> <span className="tag category">ML</span> <span className="tag category">Benchmark</span></p>
                  <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Benchmarking</span> <span className="tag tech">GPU</span></p>
                </div>
              </div>

            {/* GPU Creation through Terraform */}
            <div className="project">
              <div className="media-frame">
                <img src={gpuScriptThumb} alt="GPU Creation through Terraform thumbnail" className="zoom" />
              </div>
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/GPU_Creation_Script"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  GPU Creation through Terraform
                </a>
              </h2>
              <p>
                Scripts to automate provisioning and setup of GPU machines for ML development and benchmarking.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Cloud</span> <span className="tag category">ML</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Bash</span> <span className="tag tech">GPU</span> <span className="tag tech">Automation</span></p>
              </div>
            </div>
          </div>
        )}

        {/* Understanding Data Science & AI Section */}
        <div id="understanding-ds-ai" className="section-header section-header--accent">
          <div className="section-title">
            <AutoAwesomeIcon fontSize="small" />
            <span>Understanding Data Science & AI</span>
          </div>
          <button
            type="button"
            className="section-toggle"
            aria-expanded={dsExpanded}
            aria-controls="ds-section-content"
            onClick={() => setDsExpanded(v => !v)}
          >
            {dsExpanded ? (
              <>
                Collapse <ExpandLessIcon fontSize="small" />
              </>
            ) : (
              <>
                Expand <ExpandMoreIcon fontSize="small" />
              </>
            )}
          </button>
        </div>
        {/* no subtitle by request */}

        {/* Collapsed: show first 4 notebooks */}
        {!dsExpanded && (
          <div className="compact-grid">
            {dsNotebooks.slice(0, 4).map((n, idx) => {
              const colab = `https://colab.research.google.com/github/Ruturaj-Vasant/Understanding_Data_Science_and_AI/blob/main/${n.path}`;
              const nbv = `https://nbviewer.org/github/Ruturaj-Vasant/Understanding_Data_Science_and_AI/blob/main/${n.path}`;
              return (
                <div
                  className="compact-card interactive"
                  role="button"
                  tabIndex={0}
                  onClick={() => setDsExpanded(true)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDsExpanded(true); }}}
                  aria-label={`Expand DS & AI to view ${n.title}`}
                  key={idx}
                >
                  <div className="compact-thumb">
                    <img src={dsGenericThumb} alt="Data Science notebook thumbnail" />
                  </div>
                  <div className="compact-content">
                    <h3 className="compact-title">{n.title}</h3>
                    {n.summary && <p className="compact-summary">{n.summary}</p>}
                    <div className="compact-actions">
                      <a className="mini-chip" href={nbv} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Notebook</a>
                      <a className="mini-chip" href={colab} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Open in Colab</a>
                    </div>
                  </div>
                </div>
              );
            })}
            {dsNotebooks.length === 0 && (
              <div className="compact-card">
                <div className="compact-content">
                  <h3 className="compact-title">Add notebooks</h3>
                  <p className="compact-summary">Add items to src/data/dsNotebooks.ts to render tiles here.</p>
                  <div className="compact-actions">
                    <a className="mini-chip" href="https://github.com/Ruturaj-Vasant/Understanding_Data_Science_and_AI" target="_blank" rel="noreferrer">Repo</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Expanded: show all notebooks */}
        {dsExpanded && (
          <div className="compact-grid" id="ds-section-content">
            {dsNotebooks.map((n, idx) => {
              const colab = `https://colab.research.google.com/github/Ruturaj-Vasant/Understanding_Data_Science_and_AI/blob/main/${n.path}`;
              const nbv = `https://nbviewer.org/github/Ruturaj-Vasant/Understanding_Data_Science_and_AI/blob/main/${n.path}`;
              return (
                <div className="compact-card" key={idx}>
                  <div className="compact-thumb">
                    <img src={dsGenericThumb} alt="Data Science notebook thumbnail" />
                  </div>
                  <div className="compact-content">
                    <h3 className="compact-title">{n.title}</h3>
                    {n.summary && <p className="compact-summary">{n.summary}</p>}
                    <div className="compact-actions">
                      <a className="mini-chip" href={nbv} target="_blank" rel="noreferrer">Notebook</a>
                      <a className="mini-chip" href={colab} target="_blank" rel="noreferrer">Open in Colab</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        

        <div className="show-more">
          <button
            type="button"
            className="show-more__btn"
            onClick={() => setShowMore(v => !v)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>

        {showMore && (
          <div className="projects-grid more-grid">
            <div className="project">
              <h2>
                <a
                  href="https://github.com/Ruturaj-Vasant/Flask-Cluster-DNS_App"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  Distributed System with Flask
                </a>
              </h2>
              <p>
                A simulated distributed system built with Flask comprising three services:
                an Auth Server for domain registration, a Fibonacci Server for computing
                sequences, and a User Server for coordinating service requests. Fully
                Dockerized and configured for Kubernetes deployment, demonstrating
                container orchestration and inter-service communication.
              </p>
              <div className="tags">
                <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Systems</span></p>
                <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Flask</span> <span className="tag tech">Docker</span> <span className="tag tech">Kubernetes</span></p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Project;
