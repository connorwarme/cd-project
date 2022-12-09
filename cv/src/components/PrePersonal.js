import React from "react";
import Phone from "../icons/phone.svg";
import Email from "../icons/email.svg";
import Locale from "../icons/map-marker.svg";
import Github from "../icons/github.svg";
import Linked from "../icons/linkedin.svg";

// preview personal details
class PrePersonal extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="preview-header">
          <div className="preview-name-container">
            <div className="preview-name">{data.name}</div>
            <div className="preview-position">{data.position}</div>
          </div>
          <div className="preview-personal-container">
            <div>
              <img src={Phone} alt="Phone" />
              {data.number}
            </div>
            <div>
              <img src={Email} alt="Email" />
              {data.email}
            </div>
            <div>
              <img src={Locale} alt="Location" />
              {data.location}
            </div>
            <div>
              <img src={Github} alt="GH Logo" />
              <a href={data.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div>
              <img src={Linked} alt="LI Logo" />
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="preview-bio">{data.bio}</div>
      </div>
    );
  }
}

export default PrePersonal;
