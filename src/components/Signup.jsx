/* eslint-disable no-useless-escape */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../actions/authActions';
import WelcomeSvg from '../asset/images/welcome.svg';
import Loading from './Loading';
import {
  mq, inputStyle, inputButtonStyle, alertStyleAbsolute, baseAlertStyle,
} from '../configs/styleConfigs';
import { reset } from '../actions/generalActions';

const Login = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState({
    email: '',
    password: '',
    firstName: '',
  });
  const apiErrMsg = useSelector((state) => state.auth.errors.message);

  // reset errors and success toggles when un-mounting component
  useEffect(() => (() => dispatch(reset())), [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = {};

    // validate credentials
    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!”#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]).{8,}$/;
    if (!emailRegEx.test(email)) error.email = 'Invalid email, input a valid email and try again';
    if (!passwordRegEx.test(password)) error.password = 'Your password must be greater than 8 characters and must contain at least one uppercase letter, one lowercase letter, one number, and a special character';
    if (!firstName) error.firstName = 'First name is required';
    if (Object.keys(error).length) return setErrorMsg(error);

    const formData = {
      email, password, first_name: firstName, last_name: lastName,
    };
    return dispatch(signUp(formData));
  };

  return (
    <div>
      {apiErrMsg && <div css={[baseAlertStyle, alertStyleAbsolute]}>{apiErrMsg}</div>}
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
          [mq[1]]: {
            display: 'none',
          },
        }}
        >
          <WelcomeSvg />
        </div>
        <div css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-start',
          [mq[1]]: {
            width: '100%',
          },
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
              paddingLeft: '0',
              width: '100%',
            },
          }}
          >
            <h1>Sign up</h1>
            <div css={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
              [mq[1]]: {
                display: 'block',
                marginBottom: '0',
              },
            }}
            >
              <div
                css={{
                  width: '45%',
                  margin: '0',
                  [mq[1]]: {
                    width: '100%',
                    marginBottom: '20px',
                  },
                }}
              >
                <input
                  css={[inputStyle]}
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  name="firstName"
                  required
                  onChange={(event) => {
                    setErrorMsg({ ...errorMsg, firstName: '' });
                    setFirstName(event.target.value);
                  }}
                />
                <span css={{ color: 'red', marginBottom: '20px' }}>{errorMsg.firstName}</span>
              </div>
              <input
                css={[inputStyle, {
                  width: '45%',
                  margin: '0',
                  [mq[1]]: {
                    width: '100%',
                    marginBottom: '20px',
                  },
                }]}
                type="text"
                value={lastName}
                placeholder="Last Name"
                name="lastName"
                required
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <input
              css={[inputStyle]}
              type="email"
              value={email}
              placeholder="Email"
              name="email"
              required
              onChange={(event) => {
                setErrorMsg({ ...errorMsg, email: '' });
                setEmail(event.target.value);
              }}
            />
            <span css={{ color: 'red', marginBottom: '20px' }}>{errorMsg.email}</span>
            <input
              css={[inputStyle]}
              type="password"
              value={password}
              placeholder="Password"
              name="password"
              required
              onChange={(event) => {
                setErrorMsg({ ...errorMsg, password: '' });
                setPassword(event.target.value);
              }}
            />
            <span css={{ color: 'red', marginBottom: '20px' }}>{errorMsg.password}</span>
            <div css={{ marginBottom: '20px' }}>
              Already have an account? click
              <Link
                css={{
                  color: '#3dc0a6',
                  '&:hover': {
                    color: '#319b86',
                  },
                }}
                to="/login"
              >
                <b>  here</b>
              </Link>
            </div>
            <input
              css={[inputStyle, inputButtonStyle]}
              type="submit"
              value="Sign up"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
