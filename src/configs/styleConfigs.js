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

const baseAlertStyle = {
  padding: '1em 1.5em',
  border: '1px solid red',
  backgroundColor: '#fff6f6',
  width: 'auto',
  opacity: 0.5,
  color: '#9f3a38',
  borderRadius: '5px',
  fontSize: '110%',
  textAlign: 'center',
  [mq[1]]: {
    padding: '7px',
    fontSize: '90%',
  },
};

const alertStyleAbsolute = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%)',
  top: '9%',
  [mq[1]]: {
    top: '7%',
  },
};

export {
  mq,
  inputStyle,
  inputButtonStyle,
  baseAlertStyle,
  alertStyleAbsolute,
};
