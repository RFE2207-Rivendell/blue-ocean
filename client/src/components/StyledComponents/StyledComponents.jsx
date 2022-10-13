import styled, { createGlobalStyle } from 'styled-components';

// complementary color of our blue - 	#383838
// triadic colors 	#8F386A, #6A8F38

const LightTheme = createGlobalStyle`
  body {
  margin: 0;
  display: block;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  background-attachment: fixed;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}
`


const DarkTheme = createGlobalStyle`
  body {
  margin: 0;
  display: block;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/002/019/067/original/dark-world-map-animate-background-free-video.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  background-attachment: fixed;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}
`

const Dark = styled.div`
  background-color: #383838b5;
`

const ThemeToggle = styled.div`
  color: #f5f5f5;
  padding: 5px;
  position: fixed;
  right: 0;
  top: 7rem;
  transition: 0.3s;
  font-size: small;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  img {
    padding: 2px;
    width: 2rem;
    height: auto;
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f52b;
  }
`
const OuterToggle = styled.div`
  padding: 2px;
  width: 50px;
  height: 25px;
  border-radius: 30px;
  background: gray;
  transition: 0.3s;
  float: right;
  margin-left: 5px;
`

const InnerToggle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: 0.3s;
  float: left;
  background: #DBDBD6;
`

const StyledNavBar = styled.div`
  background-color: #386A8F;
  height: 7rem;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 5px #383838;
  z-index: 4;
`
const DarkStyledNavBar = styled.div`
  background-color: #383838;
  height: 7rem;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 4;
`
const StyledNavBarLinks = styled.h2`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 1rem;
  font-size: 2rem;
  position: absolute;
  right: 0;
  margin-right: 3rem;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  p{
    text-shadow: 2px 2px #383838;
    transition: 0.3s;
    overflow: hidden;
    color: #f5f5f5;
    &:hover {
      text-shadow: 4px 4px 4px #383838;
    }
  }
`

const StyledNavBarIcon = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  margin: 1rem;
  text-shadow: 2px 2px #383838;
  font-family: 'Dancing Script', cursive;;
  color: #f5f5f5;
`

const ProfileContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 70vw;
  right: 14%;
  height: 800px;
`
const ProfilePicture = styled.img`
  position: absolute;
  top: 7%;
  left: -4%;
  border-radius: 50%;
  height: 285px;
  width: 285px;
  object-fit: cover;
  border: 1px solid #f5f5f5;
  visibility: visible;
  z-index: 1;
  /* &:hover {
    visibility: hidden;
  } */
`
const AddPicture = styled.img`
  position: absolute;
  top: 7%;
  left: -10%;
  border-radius: 50%;
  height: 285px;
  width: 285px;
  object-fit: cover;
  visibility: hidden;
  &:hover {
    visibility: visible;
  }
`
const ProfileBackground = styled.div`
  top: 0%;
  width: 70vw;
  overflow: hidden;
  height: 300px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  position:relative;
  object-fit: cover;
  border: 1px solid #f5f5f5;
`
const ProfileAccountInfo = styled.div`
  position: absolute;
  bottom: 0%;
  width: 20vw;
  height: 400px;
  border-radius: 15px;
  left: 0%;
  text-align: left;
  justify-content: space-evenly;
  padding: 10px;
  background-color: #38698fef;
  color: #f5f5f5;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #386A8F;
  transition: 0.3s;
  border: 1px solid #f5f5f5;
  h3{
    text-align: center;
    padding: 25px;
    font-size: 2rem;
    color: #f5f5f5;
    border-bottom: 2px solid #f5f5f5;
    transition: 0.3s;
    margin-top: -0.2rem;
  };
  h4{
    text-align: center;
  };
  div{
    padding:10px;
    color: #f5f5f5;
  };
  table{
    width: 100%;
  };
  td{
    padding: 7px;
    word-break: break-all;
  }
`
const ProfileFriendsList = styled.div`
  position: absolute;
  bottom: 0%;
  width: 43.5vw;
  border-radius: 15px;
  left:36.25%;
  padding: 10px;
  text-align: center;
  justify-content: space-between;
  background-color: #38698fe8;
  color: #f5f5f5;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #f5f5f5;
  h3{
    padding: 15px;
    font-size: 2rem;
    transition: 0.3s;
  };
  p{
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 1rem;
    background-color: #383838c8;
    color: #f5f5f5;
    border-radius: 15px;
    height: 18rem;
    overflow: auto;
    box-shadow: 2px 2px 5px #383838;
    border: 1px solid #386A8F;
    &::-webkit-scrollbar {
    width: 0px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #9e9e9e;
      border-radius: 4px;
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
      background-color: #f5f5f5;
      border-radius: 50px;
      padding: 2px;
    }
    };
  div{
    &:hover {
      color: #383838;
    }
    padding: 8px;
  };
  button {
    width: 19vw;
  }
`

const StyledFriend = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f5f5f5;
  transition: 0.3s;
  border-radius: 10px;
  &:hover {
    background-color: #f5f5f5;
    color: #383838;
  }
`

const StyledFriendIcons = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  img {
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #383838;
    &:hover {
      box-shadow: 2px 2px 5px #383838;
    }
  }
`

const StyledFriendSearchSpan = styled.span`
  display: flex;
  height: 3rem;
  margin-bottom: -1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f5f5f5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`
const StyledFriendSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  height: 1.5rem;
  font-size: 1rem;
  padding: .5rem;
  border-radius: 50px;
  border: 2px solid #383838;
  color: #383838;
  input {
    border: none;
    background-color: #f5f5f5;
  }
`

const ProfileChatContainer = styled(ProfileFriendsList)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 66.5%;
`
const MessagesConvoContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 20vw;
  left: 10%;
  height: 775px;
  background-color: #38698fe8;
  border: 1px solid #f5f5f5;
  border-radius: 15px;
  text-align: center;
  padding: 25px;
  p{
    font-size: 2rem;
    padding: 15px;
    color: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }
  button{
    background-color: white;
    padding-left: 2rem;
    font-size: 1.2rem;
    width: 18vw;
    min-height: 4rem;
    border-radius:5px;
    text-align: left;
  }
`
const MessagesChatContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 48vw;
  left: 38%;
  height: 775px;
  background-color: #38698fe8;
  border: 1px solid #f5f5f5;
  border-radius: 15px;
  padding: 25px;
`
const StyledWriteMessage = styled.div`
  position: relative;
  width: 48vw;
  top: 94%;
  display: flex;
  gap: 2rem;
  textarea {
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    border: none;
    height: 3rem;
    width: 60rem;
    padding: 5px;
    font-size: 20px;
    background-color: #f5f5f5;
    box-shadow: 2px 2px 5px #383838;
    &:focus {
      border: none;
    };
  }
`

const MessageProfilePic = styled.img`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  float: right;
  border: 1px solid #383838;
`

const MessagesTopContainer = styled.div`
  position: absolute;
  background-color: white;
  height: 2rem;
  width: 46.5vw;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
  img {
    position: absolute;
    left: -3%;
    top: -35%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`

const MessageFriends = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 38rem;
  width: auto;
  overflow-y:auto;
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 0px;
    }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #9e9e9e;
    border-radius: 4px;
  }
  background-color: #838383;
  padding: 1rem;
  border: 1px solid #f5f5f5;
`
const MessagesTextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 8%;
  left: 2.5%;
  width: 45vw;
  height: 37rem;
  background-color: white;
  margin-top: 2rem;
  border-radius: 15px;
  padding: 25px;
  overflow: auto;
  scroll-behavior: smooth;
  flex-direction: column-reverse;
`

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  word-break: break-word;
`

const MessageContainerLeft = styled(MessageContainer)`
  justify-content: flex-start;
`

const MessageContainerRight = styled(MessageContainer)`
  justify-content: flex-end;
`

const ChatMessage = styled.div`
  width: fit-content;
  border-radius: 10px;
  height: auto;
  padding: 1rem;
  margin-top: 10px;
`

const TheirMessage = styled(ChatMessage)`
  color: #383838;
  background-color: #e5e4e2;
`

const MyMessage = styled(ChatMessage)`
  color: #f5f5f5;
  background-color: #386A8F;
`
const LightGreyButton = styled.button`
  background-color: #d3d3d3;
  border-radius: 10px;
  color: black;
  padding: 15px 32px;
  border: 1px solid grey;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 22vw;
  height: 10rem;
  margin-top: 20px;
  transition: 0.3s;
  &:hover {
      color: white;
      background-color: grey;
    }
`

const StyledSubmitInput = styled.input.attrs({ type: 'submit' })`
  width: 8em;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #f5f5f5;
  padding: .5rem;
  border-radius: 50px;
  color: #386A8F;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px #383838;
    color: #f5f5f5;
    background-color: #386A8F;
  }
`

const StyledTextInput = styled.input.attrs({ type: 'text' })`
  width: 15;
  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-radius: 100px;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
`
const StyledTextInputPassword = styled.input.attrs({ type: 'password' })`
  width: 15;
  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-radius: 100px;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
`
const StyledTextEmail = styled.input.attrs({ type: 'email' })`
  width: 15;
  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-radius: 50px;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
`
const StyledClassTextInput = styled.input.attrs({ type: 'text' })`
  width: 15;
  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-top: 0.5rem;
  border-radius: 100px;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
`

const StyledRadioInput = styled.input.attrs({ type: 'radio' })`
`

const StyledSelectInput = styled.select`
  width: 10rem;
  padding: .5rem;
  border-radius: 50px;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
  height: 2.8rem;
  color: #386A8F;
  font-size: 1.2rem;
  option {
    padding: 0.5rem;
    color: #386A8F;
  }
`

const StyledButton = styled.button`
  width: 8em;
  height: 3rem;
  font-size: 1rem;
  background-color: #f5f5f5;
  padding: .5rem;
  border-radius: 50px;
  color: #386A8F;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px #383838;
    color: #f5f5f5;
    background-color: #386A8F;
  }
`

const StyledloginSignUpBox = styled.div`
  background-image: url("https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 4rem;
  width: 35rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #383838;
  border: 2px solid #383838;
`

const StyledLoginSignUpForm = styled.form`
  border-radius: 20px;
  padding: 1rem;
  color: #f5f5f5;
  background-color: #383838b2;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #f5f5f5;
`

const StyledLogPage = styled.div`
  color: #383838;
  width: 90vw;
  min-height: 100vh;
  margin: auto;
  display: flex;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
`

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
`

const StyledRightAlignedForms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;
  gap: 1rem;
`
const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap 5rem;
`
const StyledPageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: #f5f5f52b;
  padding: 4rem;
  border-radius: 20px;
  border: 1px solid #38698fda;
`

const StyledPageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: #f5f5f52b;
  padding: 4rem;
  border-radius: 20px;
  border: 1px solid #38698fda;
`

const StyledImage = styled.img`
  width: 40rem;
  border: 1px solid #f5f5f5;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #383838;
`

const FriendsModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`

const FriendsModalContent = styled.div`
  width: 35rem;
  height: 25rem;
  background-color: #383838c1;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  color: #f5f5f5;
  h2 {
    margin-top: 0rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #f5f5f5
  }
  div {
    padding: 10px;
    color: #f5f5f5
  }
  input{
    position: relative;
    width: 20rem;
    border-radius: 10px;
    border: 1px solid black;
    height: 40px;
    font-size: 20px;
    background-color: #f5f5f5;
    color: #383838 !important;
    &:focus {
      border: none;
    };
  }
`
const TeacherFriendsModalContent = styled.div`
  width: 35rem;
  height: 20rem;
  background-color: #383838c1;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  gap: 1rem;
  h4 {
    font-size: 2rem;
    margin-bottom: 0rem;
    color: #f5f5f5
  }
  div {
    padding: 10px;
    color: #f5f5f5
  }
  input{
    position: relative;
    width: 20rem;
    border-radius: 10px;
    border: 1px solid black;
    height: 40px;
    font-size: 20px;
    background-color: #f5f5f5;
    color: #383838 !important;
    &:focus {
      border: none;
    };
  }
`

const FriendsModalInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 0px
  width: 35px;
  height: 35px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
const StyledCSVCloseButton = styled.button`
  width: 8em;
  height: 3rem;
  font-size: 1rem;
  margin-left: .5rem;
  background-color: #f5f5f5;
  padding: .5rem;
  border-radius: 50px;
  color: #386A8F;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px #383838;
    color: #f5f5f5;
    background-color: #386A8F;
  }
`
const StyledCSVButton = styled.button`
  width: 20vw !important;
  height: 3rem;
  font-size: 1rem;
  margin: 0.5rem !important;
  background-color: #f5f5f5;
  padding: .5rem;
  border-radius: 50px;
  color: #386A8F;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px #383838;
    color: #f5f5f5;
    background-color: #386A8F;
  }
`
const CSVModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  z-index: 4;
  justify-content: center;
`

const CSVModalContent = styled.div`
  width: 700px;
  height: 400px;
  background-color: #38698fe8;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  color: #f5f5f5 !important;
  h4 {
    font-size: 2rem;
    margin-bottom: 0rem;
    color: #f5f5f5
  }
  h4 {
    font-size: 20px;
  }
  div {
    padding: 10px;
  }
  input{
    position: relative;
    width: 350px;
    border-radius: 10px;
    border: 1px solid black;
    height: 40px;
    font-size: 20px;
    background-color: white;
    &:focus {
      border: none;
    };
  }
`
const StyledSpan = styled.span`
width: 70%;
display: inline-block;
font-size: 1rem;
padding: 0.3rem;
word-wrap: break-word;
`
const StyledButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const ProfileCalendarInfo = styled.div`
  position: absolute;
  bottom: 0%;
  width: 20vw;
  height: 400px;
  border-radius: 15px;
  left: 0%;
  display: flex;
  padding: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #38698fef;
  color: #f5f5f5;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #386A8F;
  transition: 0.3s;
  border: 1px solid #f5f5f5;
  h3{
    text-align: center;
    padding: 25px;
    font-size: 2rem;
    color: #f5f5f5;
    border-bottom: 2px solid #f5f5f5;
    transition: 0.3s;
    margin-top: -0.2rem;
  };
  h4{
    text-align: center;
  };
  div{
    color: #f5f5f5;
  };
`
const StyledEditProfileButton = styled.button`
position: absolute;
margin-left: 82%;
margin-top: 15%;
z-index: 2;
  width: auto;
  height: 3rem;
  font-size: 1rem;
  background-color: #f5f5f5;
  padding: .5rem;
  border-radius: 50px;
  color: #386A8F;
  box-shadow: 5px 5px 5px #383838;
  border: 1px solid #383838;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px #383838;
    color: #f5f5f5;
    background-color: #386A8F;
  }
`
const ClassListModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`

const ClassListModalContent = styled.div`
  width: 500px;
  height: auto;
  background-color: #38698fe8;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  color: #f5f5f5 !important;
  z-index: 4
  h4 {
    font-size: 30px;
  }
  div {
    padding: 10px;
  }
  }
`
const IconCircleDiv = styled.div`
border-radius: 50%;
backgroundColor: #ffffff
height: 20px;
`

const ScheduleModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`

const ScheduleModalContent = styled.div`
  width: 80vw;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  z-index: 4
  h4 {
    font-size: 30px;
  }
  div {
    padding: 10px;
  }
  }
`
const MeetingModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  h4{
    color: black;
  }
  span {
    color: black
  }
`

const MeetingModalContent = styled.div`
  width: 700px;
  height: auto;
  background-color: #38698fe8;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  color: #f5f5f5 !important;
  z-index: 4
  h4 {
    font-size: 30px;

  }
  div {
    padding: 10px;
  }
  }
`
const ProfileCalendarContainer = styled.div`
position: absolute;
width: 20vw;
height: 450px;
border-radius: 15px;
left:0%;
padding: 10px;
text-align: center;
justify-content: space-between;
background-color: #38698fe8;
color: #f5f5f5;

  img {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 50px;
    padding: 2px;
  }
button {
  width: 19vw;
}`

const SelectedTeacherFriend = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  h2 {
    border-bottom: 2px solid #f5f5f5;
    width:25rem;
    text-align: left;
  }
  span {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    width:25rem;
  }
  button {
    margin-top: -4em;
  }
`
const TeachingLanguageSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  h4 {
    margin-top: -1rem;
  }
  ul {
    margin-top: -2rem;
    text-align: left;
  }
`

export {
  SelectedTeacherFriend,
  TeachingLanguageSpan,
  StyledNavBar,
  StyledNavBarIcon,
  StyledNavBarLinks,
  ProfileContainer,
  ProfilePicture,
  ProfileBackground,
  ProfileAccountInfo,
  ProfileFriendsList,
  ProfileChatContainer,
  LightGreyButton,
  MessagesConvoContainer,
  MessagesChatContainer,
  MessagesTextContainer,
  MessageContainer,
  MessageContainerLeft,
  MessageContainerRight,
  StyledFriendSearchSpan,
  MyMessage,
  TheirMessage,
  MessagesTopContainer,
  StyledSubmitInput,
  StyledTextInput,
  StyledSelectInput,
  StyledLogPage,
  StyledloginSignUpBox,
  StyledLoginSignUpForm,
  StyledLabel,
  StyledButton,
  StyledTextEmail,
  StyledRightAlignedForms,
  StyledRadioInput,
  StyledAbout,
  StyledPageColumn,
  StyledPageRow,
  StyledImage,
  StyledFriend,
  StyledFriendIcons,
  MessageFriends,
  MessageProfilePic,
  StyledWriteMessage,
  StyledFriendSearch,
  LightTheme,
  DarkTheme,
  AddPicture,
  FriendsModalContainer,
  FriendsModalContent,
  StyledClassTextInput,
  StyledSpinner,
  StyledCSVButton,
  CSVModalContainer,
  CSVModalContent,
  StyledCSVCloseButton,
  StyledSpan,
  StyledButtonDiv,
  DarkStyledNavBar,
  ThemeToggle,
  OuterToggle,
  InnerToggle,
  Dark,
  ProfileCalendarInfo,
  StyledEditProfileButton,
  ClassListModalContainer,
  ClassListModalContent,
  IconCircleDiv,
  ScheduleModalContainer,
  ScheduleModalContent,
  FriendsModalInfoLine,
  MeetingModalContainer,
  MeetingModalContent,
  ProfileCalendarContainer,
  TeacherFriendsModalContent,
  StyledTextInputPassword,
}