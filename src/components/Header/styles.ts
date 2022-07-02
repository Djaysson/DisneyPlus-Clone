import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: var(--dark-blue);
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
export const Logo = styled.img`
  width: 5rem;
`;
export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  li {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--white);
      padding: 0 12px;
      cursor: pointer;
      img {
        height: 1.25rem;
      }

      span {
        font-size: 1rem;
        letter-spacing: 1.42px;
        position: relative;
        &:after {
          content: "";
          height: 2px;
          background: var(--white);
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
      }
      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
`;

export const UserImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;
