import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import axios from 'axios';
axios.defaults.withCredentials = true;
import {serverURL} from '../../../src/config.js';
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
  StyledSelectInput,
  StyledTextInputPassword,
} from '../StyledComponents/StyledComponents.jsx';
import { SocketContext } from '../VideoComponents/SocketContext.jsx';
import { Outlet, Link, useNavigate } from "react-router-dom";


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

export default function Login (props) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit= async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverURL}/login`, {
        email,
        password
      });
      localStorage.setItem('isTeacher', res.data.user.isTeacher);
      await props.getAccount();
      await props.getLanguages();
      navigate(JSON.parse(localStorage.getItem('isTeacher')) ? "/teacherprofile" : "/profile");
    } catch (err) {
      console.log(err);
      setErrorMessage(err.response.data);
      setError(true);
    }
  };

    // try {
    //   const res = await axios.post(`${serverURL}/login`, formData);
    //   console.log(res)
    //   props.onIdChange(res.data.user.id)
    //   navigate("/profile");
    // } catch (err) {
    //   console.log(err);
    //   setErrorMessage(err.response.data);
    //   setError(true);
    // }

  let button =
  <Link to="/profile">
    <StyledSubmitInput value='SUBMIT' onClick={handleSubmit}></StyledSubmitInput>
  </Link>;

  return (
      <StyledloginSignUpBox style={{height: '30rem', zIndex: '1', marginTop: '-2rem'}}>
        <StyledLoginSignUpForm>
          <h1>
            LOG IN
          </h1>
          <StyledRightAlignedForms>
          <StyledLabel>
              <span>
                Email:
              </span>
              <StyledTextEmail placeholder='Enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </StyledLabel>
            <StyledLabel>
              <span>
                Password:
              </span>
              <StyledTextInputPassword placeholder='Enter password' name='password' value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
            </StyledLabel>
          </StyledRightAlignedForms>
          {error ? <p>
            {errorMessage}
          </p> : null}
          {button}
        </StyledLoginSignUpForm>
      </StyledloginSignUpBox>
  )
}