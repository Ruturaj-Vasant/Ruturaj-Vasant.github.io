import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
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
import polThumb from '../assets/images/Political_Economy_of_Corporate_Fraud.png';
import lekin1 from '../assets/images/Lekin_1.png';
import lekin2 from '../assets/images/Lekin_2.png';

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

function Project() {
  const [showMore, setShowMore] = useState(false);

  return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {/* 1. Lekin Scheduling System: Python Integration */}
            <div className="project">
                <div className="media-frame">
                  {/* <img
                    src={require('../assets/images/Lekin_System.png')}
                    alt="Lekin Scheduling System Thumbnail"
                    className="zoom"
                  /> */}
                  <Slideshow images= {lekinImages} />
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

            {/* 2. Systematic Trading: Dynamic Exposure */}
            <div className="project">
                <div className="media-frame">
                  <img
                    src={require('../assets/images/DynamicExposureFramework.png')}
                    alt="Systematic Trading Project Screenshot"
                    className="zoom"
                  />
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

            {/* 3. Political Economy of Corporate Fraud */}
            <div className="project">
                <div className="slideshow-image-wrapper">
                  <img
                    src={polThumb}
                    alt="Political Economy of Corporate Fraud Thumbnail"
                    className="zoom"
                  />
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

            {/* 4. StreakMate: Automated Task Journal */}
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
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Productivity</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Google Apps Script</span> <span className="tag tech">HTML</span> <span className="tag tech">JavaScript</span></p>
                </div>
            </div>

            {/* 5. EngagePro Outreach Tracker */}
            <div className="project">
                <div className="media-frame">
                  <img
                    src={require('../assets/images/Engage_Pro_tracker.png')}
                    alt="EngagePro Outreach Tracker Thumbnail"
                    className="zoom"
                  />
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

            {/* 6. Coupon Management System */}
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

            {/* 7. Systematic Trend-Following Strategies */}
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

            {/* 8. Systematic Investing: Risk Analysis */}
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

            {/* 9. S&P 500: Volatility vs Returns */}
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

            {/* 10. Finance: Nifty50 Most Volatile Days */}
            <div className="project">
                <div className="media-frame">
                  <img
                    src={require('../assets/images/Nifty_50_Most_Volatile_days.jpeg')}
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
        </div>

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