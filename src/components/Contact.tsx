import React from 'react';
import '../assets/styles/Contact.scss';
import ProfilePic from '../assets/images/ProfilePic.jpg';

function Contact() {
  return (
    <div id="contact">
      <div className="contact-basic">
        <div className="contact-card">
          <div className="contact-card-title">
            <h3>Have an idea? Feel free to contact me</h3>
          </div>
          <div className="contact-card-footer">
            <div className="contact-card-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={ProfilePic} alt="Ruturaj Tambe" className="contact-avatar" />
              <div className="contact-card-name">Turn Ideas Into Reality</div>
            </div>
            <a href="mailto:rvt2018@stern.nyu.edu" className="contact-card-button">Contact me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;