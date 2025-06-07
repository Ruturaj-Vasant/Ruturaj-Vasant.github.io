import React, { useState } from "react";
import { motion } from "framer-motion";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  // For each timeline element, maintain a separate expanded state
  // We'll use an array for expanded states
  const [expandedStates, setExpandedStates] = useState<boolean[]>(Array(7).fill(false));

  // Timeline data
  const timelineData = [
    {
      title: "Research Assistant",
      subtitle: "Wilf Family Department of Politics, NYU",
      date: "May 2025 - Present",
      description: "Political Economy of Corporate Fraud · Python · Data Analysis · Document Parsing",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Research",
    },
    {
      title: "Research Assistant",
      subtitle: "NYU Stern School of Business",
      date: "Apr 2025 - Present",
      description: "Python, SQL, Data Extraction, Financial Research",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Research",
    },
    {
      title: "Engagement Ambassador",
      subtitle: "New York University",
      date: "Sep 2024 - Present",
      description: "Student Engagement, Communication, Event Support",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Leadership",
    },
    {
      title: "Software Developer",
      subtitle: "Avaya",
      date: "Feb 2023 - Jun 2024",
      description: "CI/CD, Backend Development, Query Optimization",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Industry",
    },
    {
      title: "Lead Performance Engineer",
      subtitle: "Zensar Services",
      date: "Jul 2022 - Jan 2023",
      description: "Performance Testing, Team Leadership, Client Coordination",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Industry",
    },
    {
      title: "Performance Engineer",
      subtitle: "Zensar Services",
      date: "Jun 2019 - Jun 2022",
      description: "Load Testing, Optimization, JMeter, Test Planning, Execution, Analysis",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Industry",
    },
    {
      title: "Cultural Head",
      subtitle: "MIT, Pune",
      date: "Jun 2015 - Jul 2019",
      description: "Team Leadership, Project Management, Event Planning",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      category: "Leadership",
    },
  ];

  // Helper to get preview
  const getShortPreview = (desc: string) => {
    if (desc.length > 80) {
      return desc.slice(0, 80) + "...";
    }
    return desc;
  };

  const handleToggle = (idx: number) => {
    setExpandedStates((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <div className="timeline-root">
      <div id="history">
        <div className="items-container">
          <h1>Career History</h1>
          <VerticalTimeline>
            {timelineData.map((item, idx) => {
              const expanded = expandedStates[idx];
              const fullDescription = item.description;
              const shortPreview = getShortPreview(fullDescription);

              return (
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
                    <p>
                      {expanded ? fullDescription : shortPreview}
                      {fullDescription.length > 80 && (
                        <span
                          style={{ color: '#5000ca', cursor: 'pointer' }}
                          onClick={() => handleToggle(idx)}
                        >
                          {expanded ? " Show less" : " Read more"}
                        </span>
                      )}
                    </p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Timeline;