/* eslint-disable no-useless-escape */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/loginActions';
import LoginSvg from '../asset/images/login.svg';
import Loading from './Loading';
import {
  mq, inputStyle, inputButtonStyle, alertStyleAbsolute, baseAlertStyle,
} from '../configs/styleConfigs';
import { reset } from '../actions/generalActions';

const Login = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState({ email: '', password: '' });
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
    if (Object.keys(error).length) return setErrorMsg(error);

    const formData = {
      email, password, isAdmin,
    };
    return dispatch(login(formData));
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
            <span css={{ color: 'red', marginBottom: '20px' }}>{errorMsg.email}</span>
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
            <span css={{ color: 'red', marginBottom: '20px' }}>{errorMsg.password}</span>
            <div css={{ marginBottom: '20px' }}>
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
