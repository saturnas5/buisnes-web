import React, {useState} from "react";
import styled from 'styled-components'
import {StyledAbout} from "../../styles";
import Toggle from "../Toggle";
import {AnimateSharedLayout} from "framer-motion";

const FaqSection = () => {
    const [faqToggle, setFaqToggle] = useState(false)

    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title='How Do I Start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, reprehenderit.</p>
                </div>
            </Toggle>
            <Toggle title='Daily Schedule'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, reprehenderit.</p>
                </div>
            </Toggle>
            <Toggle title='Diferrent Payment Methods'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, reprehenderit.</p>
                </div>
            </Toggle>
            <Toggle title='What you Offer?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, reprehenderit.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  
  span {
    display: block;
  }
  
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  
  .faq-line {
    background: #cccccc;
    height: .2rem;
    margin: 2rem 0;
    width: 100%;
  }
  
  .question {
    padding: 3rem 0;
    &:hover {
      cursor: pointer;
    }
  }
  
  .answer {
    padding: 2rem 0;
    
    p {
      padding: 1rem 0;
    }
  }

`;

export default FaqSection;