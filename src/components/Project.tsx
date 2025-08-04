import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/FgY6r2kxnMY?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&vq=hd1080&loop=1&playlist=FgY6r2kxnMY"
                        title="Coupon Management System Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Coupon-Management-System" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Coupon Management System
                </h2>
                <p>
                    Digital pass generation system integrated with PassKit API for Apple Wallet, offering real-time form validation, usage tracking, and Google Sheets integration. Supports multiple service types and expiration date validation. Designed for both iOS and Android, with email notifications and cross-platform compatibility.
                </p>
                <div className="tags">
                  <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Automation</span></p>
                  <p><strong>Technologies:</strong> <span className="tag tech">JavaScript</span> <span className="tag tech">Google Apps Script</span> <span className="tag tech">PassKit</span> <span className="tag tech">Apple Wallet</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/Political-Economy-Of-Corporate-Fraud/main/project-screenshot.jpg" alt="Corporate Fraud Project Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Political-Economy-Of-Corporate-Fraud" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Political Economy of Corporate Fraud
                </h2>
                <p>
                    Developed as part of a Research Assistantship at NYU's Wilf Family Department of Politics, this project investigates the intersection of corporate governance and fraud. It focuses on executive compensation, tenure, turnover, and governance metrics using structured data extraction from SEC filings and WRDS. The system automates data pulls, preprocessing, and analytical queries via SQL and Python.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Research</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">SQL</span> <span className="tag tech">WRDS</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/Streakmate-Googleappscript-Automated-Task-Journal/main/streakmate-screenshot.jpg" alt="StreakMate Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Streakmate-Googleappscript-Automated-Task-Journal" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    StreakMate: Automated Task Journal
                </h2>
                <p>
                    A lightweight, customizable habit and task tracker built with Google Apps Script and Google Sheets. Supports habit streak tracking, recurring tasks, automated reminders, inline comments, cumulative counters, and analytics—all fully integrated into a spreadsheet-based interface.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Productivity</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Google Apps Script</span> <span className="tag tech">HTML</span> <span className="tag tech">JavaScript</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/SystematicTrading_DynamicExposure/main/project-screenshot.jpg" alt="Systematic Trading Project Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/SystematicTrading_DynamicExposure" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Systematic Trading: Dynamic Exposure Framework
                </h2>
                <p>
                    An ML-driven backtesting framework analyzing SPY trading strategies using volatility signals, trend filters, and technical indicators. The framework compares baseline, trend-conditioned volatility scaling (TCVS), and dynamic exposure strategies against mean reversion models. It includes notebooks, performance metrics, and visualizations to optimize trading logic.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Pandas</span> <span className="tag tech">Matplotlib</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/EngagePro-Outreach-Tracker/main/project-screenshot.jpg" alt="EngagePro Outreach Tracker Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/EngagePro-Outreach-Tracker" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    EngagePro Outreach Tracker
                </h2>
                <p>
                    A personalized email and outreach automation tool built on Google Apps Script. Helps students and professionals manage outreach campaigns by sending emails, embedding tracking pixels, and logging interaction data like opens and responses. Originally built for professor/recruiter outreach, it’s also usable by sales teams and job seekers.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Automation</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Google Apps Script</span> <span className="tag tech">JavaScript</span> <span className="tag tech">HTML</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/Systematic-Investing-Risk-Analysis/main/project-screenshot.jpg" alt="Systematic Investing Risk Analysis Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Systematic-Investing-Risk-Analysis" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Systematic Investing: Risk Analysis
                </h2>
                <p>
                    Analyzed risk and performance of three financial time series over 2,000 days. Computed correlations, drawdowns, and performance metrics under equal and inverse volatility-weighted allocations. Built a predictive model to forecast one asset using others, applying systematic investing principles to enhance portfolio risk-adjusted returns.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Quantitative Analysis</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/Systematic-Trend-Following/main/project-screenshot.jpg" alt="Trend Following Project Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Systematic-Trend-Following" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Systematic Trend-Following Strategies
                </h2>
                <p>
                    Developed and evaluated multiple trend-following strategies using moving average crossovers and breakouts across fixed income, currency, and equity markets. Performance measured using Sharpe/Sortino ratios, drawdowns, and volatility-weighted combinations. The project includes inverse volatility methods and improvements using EMA-based filters.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Quantitative Finance</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/SNP500-Volatility-Vs-Returns/main/project-screenshot.jpg" alt="S&amp;P 500 Volatility vs Returns Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/SNP500-Volatility-Vs-Returns" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    S&amp;P 500: Volatility vs Returns
                </h2>
                <p>
                    Analyzed the relationship between S&amp;P 500 volatility and returns using normalized indicators across historical data. Studied concurrent and lagged volatility effects, segmented results into quintiles, and evaluated potential predictive signals. Applied systematic investing techniques to assess behavioral patterns and generate actionable insights.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Finance</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Data Analysis</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/Finance_Nifty50_Most_Volatile_Days/main/project-screenshot.jpg" alt="Nifty50 Volatility Project Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Finance_Nifty50_Most_Volatile_Days" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Finance: Nifty50 Most Volatile Days
                </h2>
                <p>
                    This exploratory project analyzes historical Nifty 50 stock data to assess market volatility. It computes daily returns, rolling volatility, and Z-scores using Python, identifying historically extreme market days. Provides insights into behavior of Indian financial markets and demonstrates data cleaning, return computation, and volatility filtering techniques.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Personal</span> <span className="tag category">Finance</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Jupyter Notebook</span> <span className="tag tech">Excel</span> <span className="tag tech">Data Analysis</span></p>
                </div>
            </div>
            <div className="project">
                {/* <img src="https://raw.githubusercontent.com/Ruturaj-Vasant/Flask-Cluster-DNS_App/main/project-screenshot.jpg" alt="Distributed Flask App Screenshot" className="zoom" width="100%" /> */}
                <h2>
                    <a href="https://github.com/Ruturaj-Vasant/Flask-Cluster-DNS_App" target="_blank" rel="noreferrer" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                        <GitHubIcon fontSize="small" />
                    </a>
                    Distributed System with Flask
                </h2>
                <p>
                    A simulated distributed system built with Flask comprising three services: an Auth Server for domain registration, a Fibonacci Server for computing sequences, and a User Server for coordinating service requests. Fully Dockerized and configured for Kubernetes deployment, demonstrating container orchestration and inter-service communication.
                </p>
                <div className="tags">
                    <p><strong>Categories:</strong> <span className="tag category">Academic</span> <span className="tag category">Systems</span></p>
                    <p><strong>Technologies:</strong> <span className="tag tech">Python</span> <span className="tag tech">Flask</span> <span className="tag tech">Docker</span> <span className="tag tech">Kubernetes</span></p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;