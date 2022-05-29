import React from "react";
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
import home2 from '../../img/home2.png';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from "../../styles";
import styled from 'styled-components';

const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="Efficient"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="Affordable"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="Camera"/>
            </StyledImage>
        </StyledServices>
    );
};

const StyledServices = styled(StyledAbout)`
h2 {
  padding-bottom: 5rem;
}
p {
  width: 70%;
  padding: 2rem 0 4rem 0;
}
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #fff;
      color: black;
      padding: 1rem;
    }
  }

`

export default ServicesSection;