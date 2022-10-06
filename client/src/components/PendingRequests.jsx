import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  FriendsModalContainer,
  FriendsModalContent,
  LightGreyButton,
  StyledButton,
  ProfileFriendsList,
  StyledSelectInput,
  StyledFriend,
} from './StyledComponents/StyledComponents.jsx';

export default function PendingRequests (props) {
  if (!props.show) {
    return null;
  }

  useEffect(() => {
    let nameArray = props.usersWithSameLanguage.map(user => {
      return `${user.first_name} ${user.last_name}`
    })
    setSearchedFriends(nameArray);
  }, [props.usersWithSameLanguage])

  const [searchedFriends, setSearchedFriends] = useState(['Frodo', 'Gandalf', 'Legolas', 'Bilbo']);

  const handleSelect = (e) => {
    var accounts = []
    var language = e.target.value;
    axios.get(`${serverURL}/accounts`)
      .then((data) => {
        accounts = data
      }).catch((err) => {
        console.log(err);
      })
    // function to filter out all users that aren't learning that language
  }

  return (
    <FriendsModalContainer>
      {/* <FriendsModalContent>
        <h4>
          ADD FRIEND
        </h4>
        <input type="text" onChange={props.onFriendClick}></input>
        <br></br>
        <br></br>
        <StyledButton onClick={props.onClose}>Close</StyledButton>
      </FriendsModalContent> */}
      <ProfileFriendsList style={{position: 'relative', left: '0%'}}>
        <h3 style={{marginTop: '-0.5rem'}}><strong>Pending Requests</strong></h3>
        <p style={{height: '15rem'}}>
          {searchedFriends.map((friend) => {
            return (
              <StyledFriend >
                <div style={{ fontWeight: 'bold', height: '1rem' }}>{friend}</div>
                <StyledButton style={{ marginTop: '0rem', marginLeft: '24rem', position: 'absolute', width: '6rem'}}>ACCEPT</StyledButton>
                {/*TODO: fix position of accept button*/}
                <StyledButton style={{ marginTop: '0rem', position: 'relative', width: '6rem'}}>DECLINE</StyledButton>
              </StyledFriend>
            )
          })}
        </p>
        <StyledButton onClick={props.onClose}>Close</StyledButton>
      </ProfileFriendsList>
    </FriendsModalContainer>
  )
}