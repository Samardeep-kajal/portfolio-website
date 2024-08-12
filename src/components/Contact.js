import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Side from "./Side";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end; /* Align content to the bottom */
  height: 100vh;
  padding-right: 20px; /* Add space on the right */
  position: relative; /* Needed for the pseudo-element positioning */
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* Create vertical line using pseudo-element */
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 100%; /* Line extends from bottom to top */
    background-color: var(--light-slate);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0; /* Start from the top of the container */
  }

  a {
    margin: 20px 0;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    color: inherit; /* Inherit color from parent */
    text-decoration: none; /* Optional: remove underline */
  }
`;

const Contact = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledWrapper>
      <StyledLinkWrapper>
        <a href={`mailto:samk712003@gmail.com`}>samk712003@gmail.com</a>
      </StyledLinkWrapper>
    </StyledWrapper>
  </Side>
);

Contact.propTypes = {
  isHome: PropTypes.bool,
};

export default Contact;
