import React from "react";
import athlete from '../../img/athlete-small.png'
import theracer from '../../img/theracer-small.png'
import goodtimes from '../../img/goodtimes-small.png'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const OurWork = () => {

    return (
        <StyledWork>
            <StyledMovie>
                <h2>The Athlet</h2>
                <div className="line"></div>
                <Link to='/work/the-athlete'>
                    <img src={athlete} alt="Athlete"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="The Racer"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt="Goodtimes"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  
  h2 {
    padding: 1rem 0;
  }
`

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  
  .line {
    height: .5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    position: center;
  }
`

export default OurWork;