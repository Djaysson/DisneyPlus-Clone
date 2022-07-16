import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
  padding: 30px 0 26px;
  margin-top: 30px;
`;
export const Card = styled.div`
  border: 3px solid var(--transparent-white);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: var(--transparent-white-200);
  }
`;
