import styled from "styled-components";
import LoginPageBackgroundImage from "../../assets/images/login-background.jpg";
export const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${LoginPageBackgroundImage}) center center / cover no-repeat
      fixed;
    z-index: -1;
    opacity: 0.7;
  }
`;
export const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  margin-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogoOne = styled.img``;
export const LogoTwo = styled.img`
  width: 95%;
`;

export const SignUp = styled.a`
  width: 100%;
  background: var(--blue-100);
  font-weight: bold;
  padding: 1rem 0;
  color: var(--white);
  border-radius: 4px;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;

  &:hover {
    background: var(--blue-300);
  }
`;
export const Description = styled.p`
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin: 0.75rem 0;
`;
