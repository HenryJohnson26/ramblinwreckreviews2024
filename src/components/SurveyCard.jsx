/* This is previous team code and our team did not touch this file. Unknown purpose*/

import csciBkgdImg from '../assets/images/csci-bkgd-img.jpeg';
import ellipsis from '../assets/images/ellipsis.png';
import '../css/SurveyCard.css';

export default function SurveyCard({surveyConfig = {
    title:"Peer Evaluation 1",
    course:"CSCI 370",
    status:"Unavailable",
    start_date:"May 28, 2024",
    end_date:"May 30, 2024",
    progress:"64%" }
}) {
      return (
          <>
            <div className='responsive'>
                <div className="gallery">
                    <div className='professor-home-survey-card-container'>
                        <img className='professor-home-survey-card-container-bkgd-image' src={csciBkgdImg}></img>
                        <div className='professor-home-survey-card-header-container'>
                            <div className='professor-home-survey-card-header-container-title-container'>
                                <h3>{surveyConfig.title}</h3>
                                <h4>{surveyConfig.course}</h4>
                            </div>
                            <div className='professor-home-survey-card-status-container'>
                                <p>{surveyConfig.status}</p>
                            </div>
                            <div>
                            <div className='professor-home-survey-card-dropdown-sub-container'>
                                <button className="professor-home-survey-card-dropdown-button"><img src={ellipsis}/></button>
                                <div className="professor-home-survey-card-dropdown-content" id='professor-home-survey-card-options-content'>
                                    <button className='professor-home-survey-card-dropdown-content-top-button'>Edit</button>
                                    <button>View Results</button>
                                    <button className='professor-home-survey-card-dropdown-content-lower-button'>Send Email Reminder</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='professor-home-survey-card-footer-container'>
                        <h4>{surveyConfig.start_date} - {surveyConfig.end_date}</h4>
                        <div className='professor-home-survey-card-progress-indicator-container'>
                            <div className="professor-home-survey-card-progress-indicator-bar" id='professor-home-survey-card-progress-indicator-bar-id'>
                                <div className="professor-home-survey-card-progress-indicator-bar-inside" id='professor-home-survey-card-progress-indicator-bar-inside-id'><p>{surveyConfig.progress}</p></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
        );
  }