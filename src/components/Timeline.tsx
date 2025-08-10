import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  // Removed expanded state logic

  // Timeline data
  const timelineData = [
    {
      title: "Research Assistant",
      subtitle: "Wilf Family Department of Politics, NYU",
      date: "May 2025 - Present",
      // description: "Political Economy of Corporate Fraud · Python · SQL · Data Analysis · Document Parsing",
      description: "Extracting structured data from EDGAR filings using AI-assisted document parsing to compute executive compensation, tenure, and ownership. Applying game-theoretic logic to uncover patterns in leadership dynamics and potential financial fraud.",
      tech: "Python · SQL · Data Analysis · Document Parsing · Game Theory · Statistics",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Research",
    },
    {
      title: "Research Assistant",
      subtitle: "NYU Stern School of Business",
      date: "Apr 2025 - Present",
      // description: "Python, Building Microsoft plugin, Scheduling Algorithms, Data Analysis",
      description: "Working on a legacy C++ and MFA-based scheduling system (LEKIN) to support Python integration. Building a flexible plugin architecture that enables users to run custom scheduling algorithms using Python scripts, enhancing accessibility and extending the LEKIN system's capabilities.",
      tech: "Python · C++ · Scheduling Algorithms · Plugin Architecture · Building Microsoft plugin",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Research",
    },
    {
      title: "Engagement Ambassador",
      subtitle: "New York University",
      date: "Sep 2024 - Present",
      tech: "Student Engagement · Communication · Event Support",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Leadership",
    },
    {
      title: "Software Developer",
      subtitle: "Avaya",
      date: "Feb 2023 - Jun 2024",
      // description: "CI/CD, Query Optimization",
      description: "Led load emulation and regression testing across 22 microservices, improving system performance by 375%. Built scalable distributed systems (Golang, Python) handling 100K+ chat and 20K+ voice transactions/hour. Reduced cloud costs via Datadog optimization ($64K saved in 3 weeks). Tackled critical issues (CPU spikes, Redis lag, Postgres bottlenecks) and implemented fixes in Java/Spring Boot.",
      tech: "Golang · Python · Java · Spring Boot · CI/CD · Datadog · DevOps",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Industry",
    },
    {
      title: "Lead Performance Engineer",
      subtitle: "Zensoft Services",
      date: "Jul 2022 - Jan 2023",
      // description: "Performance Testing, Team Leadership, Client Coordination",
      description: "Directed performance engineering across 20+ projects with up to 500% speed gains. Spearheaded YAML-based BlazeMeter pipelines and CI/CD automation (deployment time cut by 76%). Mentored junior engineers, scaling team from 5 to 23. Focused on API testing, Azure DevOps, and client-side latency reduction (90%).",
      tech: "YAML · BlazeMeter · CI/CD · Azure DevOps · API Testing · DevOps · Team Leadership, Client Coordination",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Industry",
    },
    {
      title: "Performance Engineer",
      subtitle: "Zensoft Services",
      date: "Jun 2019 - Jun 2022",
      // description: "Load Testing, Optimization, JMeter, Test Planning, Execution, Analysis",
      description: "Executed full-cycle performance testing using JMeter, Locust, and ADO pipelines. Led PI planning, workload modeling, capacity planning, and report generation. Created advanced scripts for multi-cert login, dynamic correlation, and error handling. Delivered 10x concurrency gains and mentored onboarding engineers.",
      tech: "JMeter · Locust · ADO · Test Planning · Scripting",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Industry",
    },
    {
      title: "Cultural Head",
      subtitle: "MIT, Pune",
      date: "Jun 2015 - Jul 2019",
      // description: "Team Leadership, Project Management, Event Planning",
      description: "Led a 200+ member team to deliver 15+ large-scale cultural events. Won 15+ awards for Light Art, Sand Art, Mime Plays. Performed at TEDx Pune, IITB Mood Indigo. Managed event logistics, finances, and cross-functional recruitment for creative campaigns and performances.",
      tech: "Team Leadership · Project Management · Event Planning",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Leadership",
    },
  ];

  // Removed handleToggle function

  return (
    <div className="timeline-root">
      <div id="history">
        <div className="items-container">
          <h1>Career History</h1>
          <VerticalTimeline>
            {timelineData.map((item, idx) => (
              <VerticalTimelineElement
                key={idx}
                className="vertical-timeline-element--work"
                date={item.date}
                iconStyle={{ background: '#5000ca', color: '#fff' }}
                icon={item.icon}
              >
                <div>
                  <div className="timeline-header">
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <span className="timeline-tag">{item.category}</span>
                  </div>
                  <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                  {item.tech && <p className="timeline-tech">{item.tech}</p>}
                  {item.description && (
                    <p className="timeline-description">
                      {item.description}
                    </p>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Timeline;