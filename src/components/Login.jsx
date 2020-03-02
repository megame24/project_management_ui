/* eslint-disable no-useless-escape */
/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/loginActions';
import LoginSvg from '../asset/images/login.svg';
import Loading from './Loading';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`,
);

const inputStyle = {
  display: 'block',
  width: '100%',
  margin: '0 auto',
  padding: '15px 10px',
  border: '1px solid #e7e7e7',
  borderRadius: '3px',
  '&:focus': {
    outline: 'none',
    borderColor: '#3dc0a6',
  },
  [mq[1]]: {
    padding: '10px',
  },
};

const inputButtonStyle = {
  fontSize: '19px',
  cursor: 'pointer',
  padding: '10px 20px',
  textAlign: 'center',
  display: 'inline-block',
  color: '#fff',
  borderRadius: '3px',
  border: 'none',
  '&:hover': {
    backgroundColor: '#319b86',
    transition: 'background-color 0.3s',
  },
  backgroundColor: '#3dc0a6',
  [mq[1]]: {
    padding: '7px',
    fontSize: '90%',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState({ email: '', password: '' });
  const isLoading = useSelector((state) => state.auth.isLoading);
  const apiErrMsg = useSelector((state) => state.auth.errors.message);

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = {};

    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!”#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]).{8,}$/;
    if (!emailRegEx.test(email)) error.email = 'Invalid email, input a valid email and try again';
    if (!passwordRegEx.test(password)) error.password = 'Your password must be greater than 8 characters and must contain at least one uppercase letter, one lowercase letter, one number, and a special character';
    if (Object.keys(error).length) return setErrorMsg(error);

    const formData = {
      email, password, isAdmin,
    };
    return dispatch(login(formData));
  };

  return (
    <div>
      {apiErrMsg
        && (
          <div
            css={{
              padding: '1em 1.5em',
              border: '1px solid red',
              backgroundColor: '#fff6f6',
              color: '#9f3a38',
              borderRadius: '5px',
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%)',
              fontSize: '110%',
              top: '9%',
              textAlign: 'center',
            }}
          >
            {apiErrMsg}
          </div>
        )}
      <div css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        padding: '10px',
      }}
      >
        <Loading isLoading={isLoading} />
        <div css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '15px',
        }}
        >
          <LoginSvg />
        </div>
        <div css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
        >
          <div css={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '15px',
            [mq[3]]: {
              width: '70%',
            },
            [mq[1]]: {
              width: '100%',
            },
          }}
          >
            <h1>Login</h1>
            <input
              css={[inputStyle]}
              type="email"
              value={email}
              placeholder="Email"
              name="email"
              required
              onChange={(event) => {
                setErrorMsg({ email: '', password: errorMsg.password });
                setEmail(event.target.value);
              }}
            />
            <span
              css={{
                color: 'red',
                marginBottom: '20px',
              }}
            >
              {errorMsg.email}
            </span>
            <input
              css={[inputStyle]}
              type="password"
              value={password}
              placeholder="Password"
              name="password"
              required
              onChange={(event) => {
                setErrorMsg({ email: errorMsg.email, password: '' });
                setPassword(event.target.value);
              }}
            />
            <span
              css={{
                color: 'red',
                marginBottom: '20px',
              }}
            >
              {errorMsg.password}
            </span>
            <div
              css={{
                marginBottom: '20px',
              }}
            >
              <input
                css={{
                  marginRight: '10px',
                }}
                type="checkbox"
                name="isAdmin"
                value={isAdmin}
                onChange={(event) => setIsAdmin(event.target.checked)}
              />
              I am an admin
            </div>
            <input
              css={[inputStyle, inputButtonStyle]}
              type="submit"
              value="Login"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
