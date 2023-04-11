import React,{ useEffect } from "react";
import { Box, Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles/card.css";
import Editicon from "./assets/message-edit.png"

const Card = () => {
  const [Events,setEvents] =React.useState("")
    useEffect(()=>{
        fetch('http://localhost:8000/cards')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
  return (
    <Box className="cardframe">
        <Box className="eventcard">
          <Box className="carddetails">
            <Box className="workspacedetails">
              <Box className="eventname">
                  <Link to="/team/event/each" className="eventname">Departmental Quarterly Meeting</Link>
              </Box>
              <Box className="eventdetails">
                  Tuesday 20th October, 2022 - 3:00 PM - 5:30PM
              </Box>
            </Box>
            <Box className="nextevent">
                <Box className="draft">
                  Draft
                </Box>
            </Box>
          </Box>
          <Box className="timer">
            <Box className="editevent">
                <Link to="/team/event"><img src={Editicon} alt="editicon"/></Link>
            </Box>
            <Box className="countdowntimer">
                <Box className="countdown" style={{fontWeight:"bold"}}>
                04 : 12 : 30 : 45 
                <Box className="countdownitem">
                      <Box className="item">
                          Days
                      </Box>
                      <Box className="item">
                          Hrs
                      </Box>
                      <Box className="item">
                          Mins
                      </Box>
                      <Box className="item">
                          Secs
                      </Box>
                </Box>
                </Box>
            </Box>
          </Box>
        </Box>
        <Box className="eventcard">
          <Box className="carddetails">
            <Box className="workspacedetails">
              <Box className="eventname">
                  Membership Meeting
              </Box>
              <Box className="eventdetails">
                  Tuesday 20th October, 2022 - 3:00 PM - 5:30PM
              </Box>
            </Box>
            <Box className="nextevent">
                <Box className="draft">
                  Draft
                </Box>
            </Box>
          </Box>
          <Box className="timer">
            <Box className="editevent">
            <Link to="/team/event"><img src={Editicon} alt="editicon"/></Link>
            </Box>
            <Box className="countdowntimer">
                <Box className="countdown" style={{fontWeight:"bold"}}>
                12 : 12 : 30 : 45 
                <Box className="countdownitem">
                      <Box className="item">
                          Days
                      </Box>
                      <Box className="item">
                          Hrs
                      </Box>
                      <Box className="item">
                          Mins
                      </Box>
                      <Box className="item">
                          Secs
                      </Box>
                </Box>
                </Box>
            </Box>
          </Box>
        </Box>
        
    </Box>
  );
};

export default Card;
