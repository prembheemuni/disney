import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getEmail, getPhoto } from "../reducers/SignInReducer";
import { SignInOperation, SignOutOperation } from "../reducers/SignInReducer";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getEmail);
  const userPhoto = useSelector(getPhoto);

  const setUser = (user) => {
    dispatch(
      SignInOperation({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuthSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user.photoURL);
        setUser(res.user);
      })
      .catch((ex) => {
        alert(ex);
      });
  };

  const handleAuthSignOut = () => {
    dispatch(SignOutOperation());
  };

  return (
    <Nav>
      <DisneyLogo href="/">
        <img src="/images/logo.svg" alt="disney" />
      </DisneyLogo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHlIST</span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
      </NavMenu>
      {!userName ? (
        <Login onClick={handleAuthSignIn}>Login</Login>
      ) : (
        <Login onClick={handleAuthSignOut}>Logout</Login>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 8px;
  z-index: 3;
`;

const DisneyLogo = styled.a`
  width: 80px;
  max-height: 70px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  position: relative;

  margin: 0px;
  padding: 0px;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 15px;
    //border: 2px solid green;
    img {
      min-width: 25px;
      width: 25px;
      object-fit: contain;
      //margin-right: 5px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 3px;
      line-height: 5px;
      padding: 5px;
      white-space: nowrap;
      position: relative;
    }

    span:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -8px;
      content: "";
      height: 2px;
      opacity: 0;
      left: 0px;
      position: absolute;
      right: 0px;
      transform-origin: left right;
      transform: scaleX(0);
      transition: 1s;
      //visibility: hidden;
      width: auto;
      //border: 2px solid green;
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        //visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.5s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

const UserImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 20px;
`;
