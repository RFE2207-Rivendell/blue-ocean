import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import {serverURL} from '../../../../src/config.js';
import {
  StyledButton,
  StyledLogPage,
  StyledLoginSignUpForm,
  StyledLabel,
  StyledTextEmail,
  StyledTextInput,
  StyledRightAlignedForms,
  StyledSubmitInput,
  StyledPageRow,
  StyledImage,
  StyledSelectInput
} from '../../StyledComponents/StyledComponents.jsx'

const StyledloginSignUpBox = styled.div`
  background-image: url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 35rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #383838;
  border: 2px solid #383838;
`

export default function Login () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverURL}/login`, formData);
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <StyledloginSignUpBox style={{height: '30rem', zIndex: '1', marginTop: '-2rem'}}>
        <StyledLoginSignUpForm>
          <h1>
            LOG IN
          </h1>
          <StyledRightAlignedForms>
            <StyledLabel>
              Email:
              <StyledTextEmail placeholder='enter email here' name='email' onChange={handleChange}></StyledTextEmail>
            </StyledLabel>
            <StyledLabel>
              Password:
              <StyledTextInput placeholder='enter password here' name='password' onChange={handleChange}></StyledTextInput>
            </StyledLabel>
            <StyledLabel>
            teacher or student:
            <StyledSelectInput onChange={handleChange} style={{height: '2rem', fontSize: '0.8rem'}}>
              <option value='teacher'>Teacher</option>
              <option value='user'>Student</option>
            </StyledSelectInput>
            </StyledLabel>
          </StyledRightAlignedForms>
            <StyledSubmitInput onClick={handleSubmit}value='SUBMIT'></StyledSubmitInput>
        </StyledLoginSignUpForm>
      </StyledloginSignUpBox>
  )
}