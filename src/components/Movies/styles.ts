import styled from "styled-components";

export const Container = styled.div`
  h4 {
    padding: 26px 0;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
`;
export const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid var(--transparent-white);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: var(--transparent-white-200);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
  }
`;
