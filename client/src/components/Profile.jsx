import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import axios from 'axios';
axios.defaults.withCredentials = true;
import { serverURL } from '../config.js';
import {
  ProfileContainer,
  ProfilePicture,
  ProfileBackground,
  ProfileAccountInfo,
  ProfileFriendsList,
  ProfileChatContainer,
  LightGreyButton,
  StyledButton,
  StyledFriend,
  StyledFriendIcons,
  StyledFriendSearchSpan,
  StyledFriendSearch,
  AddPicture,
  Dark,
} from './StyledComponents/StyledComponents.jsx'

import { SocketContext } from './VideoComponents/SocketContext.jsx';

import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, Link } from "react-router-dom";

const Slide = styled.div`
  text-align: initial;
  min-width: 100%;
  transition: 0.5s;
  img {
    transition: 0.5s;
    border-radius: 5px;
    @media (max-width: 600px) {
      width: 17rem;
      height: auto;
    }
  }
`
// left button for carousel
const LeftButton = styled.button`
  position: absolute;
  width: 3%;
  top: 0;
  margin-top: 1rem;
  margin-left: 45%;
  height: 10%;
  border: none;
  background-color: #38698fba;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 50px;
  z-index: 2;
  &:hover {
    background-color: #383838c8;
    border-radius: 50px;
  }
`
// right button for carousel
const RightButton = styled.button`
  position: absolute;
  top: 0;
  margin-right: 45%;
  right: 1%;
  margin-top: 1rem;
  width: 3%;
  height: 10%;
  background-color: #38698fba;
  color: #f5f5f5;
  transition: 0.5s;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #383838c8;
    border-radius: 50px;
  }
  @media (max-width: 600px) {
      right:30%;
    }
  border: 1px solid #f5f5f5;
`

const ProfileFriendsListButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

import FriendsModal from './FriendsModal.jsx';
import AddFriendModal from './AddFriendModal.jsx';
import EditInfoModal from './EditInfoModal.jsx';
import PendingRequests from './PendingRequests.jsx';


export default function Profile (props) {
  const [profileBackground, setProfileBackground] = useState(['https://images.unsplash.com/photo-1470125634816-ede3f51bbb42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80', 'https://images.unsplash.com/photo-1552288084-454d4fa5caa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2170&q=80', 'https://images.unsplash.com/photo-1606335270813-52d62bfc5e69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2525&q=80', 'https://images.unsplash.com/photo-1591467847734-12186c3a3f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2156&q=80', 'https://images.unsplash.com/photo-1603731125936-1c28b35b1659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1905&q=80', 'https://images.unsplash.com/photo-1590918836821-3c692676add7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80']);
  const [profileBackgroundDark, setProfileBackgroundDark] = useState(['https://images.unsplash.com/photo-1475738198235-4b30fc20cff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80', 'https://images.unsplash.com/photo-1552288084-454d4fa5caa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2170&q=80', 'https://images.unsplash.com/photo-1504069424204-a54566b5165c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80', 'https://images.unsplash.com/photo-1529984489975-079884dc3bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2320&q=80', 'https://images.unsplash.com/photo-1538254815620-1d3e0b3f14cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2416&q=80']);
  const [show, setShow] = useState(false);
  const [showPending, setShowPending] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [editInfoShow, setEditInfoShow] = useState(false);
  const [currentFriend, setCurrentFriend] = useState(null);
  const [friendSearch, setFriendSearch] = useState('');
  const [usersWithSameLanguage, setUsersWithSameLanguage] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [friends, setFriends] = useState([])
  const [profilePicture, setProfilePicture] = useState('https://i.postimg.cc/gkDMWvVY/photo-1615497001839-b0a0eac3274c.jpg');

  var [x, setx] = useState(0);
  // function for the image to expand on click
  // on click function to move the carousel to the left
  const goLeft = () => {
    setx(x - 1);
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x + 1);
  }

  const onFriendClick = (e) => {
    e.preventDefault();
    var index = e.target.id;
    setCurrentFriend(index)
  }
  useEffect(() => {
    if (currentFriend) {
      setShow(true);
    }
  }, [currentFriend])

  const onAddFriendClick = () => {
    axios.get(`${serverURL}/accounts`)
    .then(({data}) => {
      return data.map(account => {
        axios.get(`${serverURL}/languages/known`, {
          params: {
            accountId: account.account_id
          }
        })
        .then(({data}) => account.language = data)
      return account;
      })
    })
    .then(accounts => setUsersWithSameLanguage(accounts))
    .catch((err) => console.log(err));
    setAddShow(true);
  }

  const onPendingRequestsClick = () => {
    axios.get(`${serverURL}/friend/requests`)
    .then(({data}) => {
      setPendingRequests(data);
    })
    setShowPending(true);
  }

  const onFriendSearch = (e) => {
    setFriendSearch(e.target.value);
  }

  const onEditInfo = () => {
    setEditInfoShow(true);
  }

  const [filteredFriends, setFilteredFriends] = useState(friends);
  const [filtering, setFiltering] = useState(false);

  const filterFriends = (e) => {
    setFilteredFriends(friends.filter(function (str) {
        var fullName = str.first_name + ' ' + str.last_name
        var lowered = fullName.toLowerCase();
        return lowered.includes(e.target.value);
      }));
    setFiltering(true);
  }

    // api requests to retrieve all necessary data
    const retrieveAccountInfo = axios.get(`${serverURL}/accounts/id`);

    const retrieveFriends = axios.get(`${serverURL}/friend`);

    useEffect(() => {
      Promise.all([retrieveAccountInfo, retrieveFriends])
      .then((data) => {
        var apiAccountInfo = data[0].data;
        var apiFriends = data[1].data;
        // setting account info
        setEmail(apiAccountInfo.email);
        setFirstName(apiAccountInfo.first_name);
        setLastName(apiAccountInfo.last_name);
        setFriends(apiFriends);
      })
      .catch((err) => console.log(err));
    }, []);

  return (
    <div>
      <Dark>
      <ProfileContainer>
        <ProfilePicture src={profilePicture} />
        {!props.darkTheme ?
        <ProfileBackground>
          <img src={profileBackground[x]} style={{textAlign: 'left', display: 'block'}}/>
          {x === 0 ? null : <LeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>}
          {x >= profileBackground.length - 1 ? null : <RightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></RightButton>}
        </ProfileBackground> :
        <ProfileBackground>
          <img src={profileBackgroundDark[x]} style={{textAlign: 'left', display: 'block'}}/>
          {x === 0 ? null : <LeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>}
          {x >= profileBackgroundDark.length - 1 ? null : <RightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></RightButton>}
        </ProfileBackground>
      }
        <ProfileAccountInfo>
          <h3><strong>Account Info</strong></h3>
          <h4><strong>Student</strong></h4>
          <table>
            <tr>
              <td>Name:</td>
              <td>{firstName} {lastName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
          </table>
          {/* <StyledButton onClick={onEditInfo} style={{marginTop: '1rem'}}>EDIT INFO</StyledButton> */}
        </ProfileAccountInfo>
        <ProfileFriendsList>
          <StyledFriendSearchSpan>
            <h3><strong>Friends List</strong></h3>
            <StyledFriendSearch>
              <input name='friendfilter' type='text' placeholder='Search' onChange={filterFriends}></input>
            </StyledFriendSearch>
          </StyledFriendSearchSpan>
          <p>{!filtering ?
            friends.map((friend, index) => {
              return (
                <StyledFriend key={friend.account_id}>
                  <div style={{fontWeight: 'bold'}} id={index} onClick={onFriendClick}>{friend.first_name + ' ' + friend.last_name} <FontAwesomeIcon icon={faChevronDown} /></div>
                  <Link to="/messages">
                    <StyledFriendIcons>
                      <img src='https://cdn-icons-png.flaticon.com/512/71/71580.png'/>
                    </StyledFriendIcons>
                  </Link>
                </StyledFriend>
            )
          }) :
            filteredFriends.map((friend, index) => {
              return (
                <StyledFriend  id={index} key={friend.account_id}>
                  <div style={{fontWeight: 'bold'}} id={index} onClick={onFriendClick}>{friend.first_name + ' ' + friend.last_name} <FontAwesomeIcon icon={faChevronDown} /></div>
                  <Link to="/messages">
                    <StyledFriendIcons>
                      <img src='https://cdn-icons-png.flaticon.com/512/71/71580.png'/>
                    </StyledFriendIcons>
                  </Link>
                </StyledFriend>
              )
            })}
          </p>
          <ProfileFriendsListButtons>
            <StyledButton style={{marginTop: '0rem'}} onClick={onAddFriendClick}>ADD FRIEND</StyledButton>
            <StyledButton onClick={onPendingRequestsClick}>PENDING REQUESTS</StyledButton>
          </ProfileFriendsListButtons>
        </ProfileFriendsList>
      </ProfileContainer>
      <AddFriendModal onClose={() => setAddShow(false)} show={addShow} onFriendSearch={onFriendSearch} usersWithSameLanguage={usersWithSameLanguage} languages={props.languages} userId={props.userId}/>
      <PendingRequests onClose={() => setShowPending(false)} show={showPending} pendingRequests={pendingRequests}/>
      <FriendsModal onClose={() => setShow(false)} show={show} currentFriend={currentFriend} friend={friends[currentFriend]}/>
      <EditInfoModal onClose={() => setEditInfoShow(false)} show={editInfoShow} />
      </Dark>
    </div>
  )
}