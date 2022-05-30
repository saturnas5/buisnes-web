import React from "react";
import home1 from '../../img/home1.png';
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from "../../styles";
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../../Animations/animation";
import Wave from "../Wave";

const AboutSection = () => {



    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fadeAnim}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fadeAnim}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnim} src={home1} alt="Guy wit camera"/>
            </StyledImage>
            <Wave/>
        </StyledAbout>
    );
};

export default AboutSection;