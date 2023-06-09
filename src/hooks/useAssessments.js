import React, { useState, useEffect } from 'react';
import ODAS from '../api/odas';

export const useAssessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [userAssessments, setUserAssessments] = useState([]);

  // TODO - fetch the data from API
  useEffect(()=>{
    ODAS.get({public: 'public'}).then(
      (response)=> { 
        setAssessments(response.assessments)}
      );
    ODAS.get().then((response)=> setUserAssessments(response.userAssessments));
  }, [assessments, userAssessments]);
  
  
  return {
    assessments: assessments,
    userAssessments: userAssessments
  };
}

export default useAssessments;