import '../../../css/Professor_Home.css';
import React, { useState, useEffect } from 'react';
import MenuBar from '../../MenuBar';
import SurveyCard from '../../SurveyCard';
import { useSelector } from "react-redux";
// import { getSurveysByProfId as getSurveys } from '../../../services/service';

export default function Professor_Home() {
  let currentUser = useSelector((state => state.auth.user));

  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    if(currentUser) {
      const prof_id = currentUser.id;
      // TODO implement getSurveys(prof_id)
      // const pulledSurveys = await getSurveys(prof_id);
      // setSurveys(pulledSurveys);
    }
    else {
      setSurveys([])
    }
  }, [currentUser])

  return (
    <div className='professor-home-body-frame'>
      <div className='professor-home-menu-bar-container'>
        <MenuBar />
      </div>
      <div className='professor-home-content-container'>
        {surveys.map((survey) => (
          <SurveyCard surveyConfig={survey} />
        ))}
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
      </div>
    </div>
  );
}