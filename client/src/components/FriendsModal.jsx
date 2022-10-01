import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  FriendsModalContainer,
  FriendsModalContent,
  LightGreyButton,
} from './StyledComponents/StyledComponents.jsx';

export default function FriendsModal (props) {
  if (!props.show) {
    return null;
  }

  return (
    <FriendsModalContainer>
      <FriendsModalContent>
        <h4>
          {props.friend}
        </h4>
        <div>
          Random Content
        </div>
        <LightGreyButton onClick={props.onClose}>Close</LightGreyButton>
      </FriendsModalContent>
    </FriendsModalContainer>
  )
}