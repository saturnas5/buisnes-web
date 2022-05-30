import React from "react";
import athlete from '../../img/athlete-small.png'
import theracer from '../../img/theracer-small.png'
import goodtimes from '../../img/goodtimes-small.png'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import { pageAnimation, fadeAnim, photoAnim, lineAnim, slider, SliderAnimContainer } from "../../Animations/animation";

const OurWork = () => {

    return (
        <StyledWork variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: '#fff'}}>
            <motion.div variants={SliderAnimContainer}>
                <StyledFrame1 variants={slider}/>
                <StyledFrame2 variants={slider}/>
                <StyledFrame3 variants={slider}/>
                <StyledFrame4 variants={slider}/>
            </motion.div>
            <StyledMovie>
                <motion.h2 variants={fadeAnim}>The Athlet</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <StyledHide>
                        <motion.img variants={photoAnim} src={athlete} alt="Athlete"/>
                    </StyledHide>
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

const StyledWork = styled(motion.div)`
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
    background: #23d997;
    margin-bottom: 3rem;
  }
  
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    position: center;
  }
`

const StyledHide = styled(motion.figure)`
  overflow: hidden;
`

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const StyledFrame2 = styled(StyledFrame1)`
background: #ff8efb;
`

const StyledFrame3 = styled(StyledFrame1)`
background: #8ed2ff;
`

const StyledFrame4 = styled(StyledFrame1)`
background: #8effa0;
`

export default OurWork;