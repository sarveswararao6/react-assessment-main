import React, { useContext } from "react";
import classes from './Assessments.module.scss';
import { Container } from 'react-bootstrap';
import useAssessments from "../../hooks/useAssessments";
// import Button from "../Button/Button";
import './Assessments.css';

const Assessments = () => {
   let assessments = useAssessments();
   return (
      <Container>
         <div className="list-group mt-3">

            {/* <h1>Assessments</h1> */}

            {
               assessments.assessments.map((item, index) => {
                  let color = "";
                  if (item.tag.toLowerCase() == 'health')
                     color = 'Red';
                  else if (item.tag.toLowerCase() == 'food')
                     color = 'Purple';
                  else if (item.tag.toLowerCase() == 'housing')
                     color = 'lightBlue';
                  else if (item.tag == '')
                     color = 'darkblue';

                  return (
                     <div key={item.id} className="list-group-item">
                        <div className="row">
                           <div className="col-2 col-lg-1 chaticon"><i className="bi bi-chat" style={{ backgroundColor: color, color: "#fff" }}></i></div>
                           <div className="col-8 col-lg-8">
                              <div className="col-md-12" style={{color:'#0eb6cc'}}>{item.title}</div>
                              <div className="col-md-12">{item.author}</div>
                           </div>
                           <div className="col-12 col-lg-3"><button className="btn btn-primary col-12" onClick={() => alert(item.title)}>Get Started<i className="bi bi-chevron-right"></i></button></div>
                        </div>
                     </div>
                  )
               })}
         </div>

      </Container>
   )
};

export default Assessments;