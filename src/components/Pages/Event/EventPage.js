import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import '../index.css';

class EventPage extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="worksTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className="page Event">

        

            <Link to="/"><li className="backToMainPage"></li></Link>
            <div className="icon newsIcon"></div>
            <h1 className="Header">Event</h1>
            <p className="School">Kungliga Tekniska högskolan</p>
            <div className="Box">
              <div className="images newsImage"></div>
                <div className="Content">
                  <p className="contentBold">Cykelvecka</p>
                  <p className="contentLight">Vecka 20</p>
                </div>
                <div className="newsArrow"></div>
            </div>
            <div className="Box">
              <div className="images Two"></div>
              <div className="Content">
                <p className="contentBold">Examensvecka</p>
                <p className="contentLight">Vecka 23</p>
              </div>
              <div className="newsArrow"></div>
            </div>
            <div className="Box">
              <div className="images Three"></div>
                <div className="Content">
                  <p className="contentBold">Mjölkens dag</p>
                  <p className="contentLight">1 juni</p>
                </div>
                <div className="newsArrow"></div>
            </div>

         </div>
       </CSSTransitionGroup>
     )
   }
 }

export default EventPage;
