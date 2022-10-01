import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  StyledNavBar,
  StyledNavBarIcon,
  StyledNavBarLinks
} from '../StyledComponents/StyledComponents.jsx'

export default function NavBar () {
  return (
    <StyledNavBar>
      <StyledNavBarIcon>
        Not Rosetta Stone
      </StyledNavBarIcon>
      <StyledNavBarLinks>
        <p>Language</p>
        <p>Profile</p>
        <p>Chat</p>
      </StyledNavBarLinks>
    </StyledNavBar>
  )
}