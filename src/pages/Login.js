import styled from 'styled-components/macro';

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: var(--spacing-xl) 0;
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 650;
  font-size: var(--fz-lg);
  padding: var(--spacing-md) var(--spacing-xl);
  text-transform: uppercase;
  letter-spacing: var(--spacing-xxxs);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const StyledTitle = styled.h1`
  display: inline-block;
  color: var(--white);
  font-weight: 500;
  font-size: var(--fz-xxxl);
  padding-bottom: 12px;
`;

const StyledSignature = styled.h1`
  display: inline-block;
  color: var(--white);
  font-weight: 400;
  font-size: var(--fz-xxs);
  padding: var(--spacing-sm) var(--spacing-xl);
  position: absolute;
  top: 0;
`;

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://jesus-spotify-app.herokuapp.com/login';

const Login = () => (
  <StyledLoginContainer>
    <StyledSignature>
      Designed & Built by Jesus Gutierrez
    </StyledSignature>
    <StyledTitle>
      Spotify Profile
    </StyledTitle>
    <StyledLoginButton href={LOGIN_URI}>
      Log in to Spotify
    </StyledLoginButton>
  </StyledLoginContainer>
);

export default Login;