import styled, { keyframes } from 'styled-components';

const themeColors = {
  primary: ({ theme }) => theme.colors.primary,
  secondary: ({ theme }) => theme.colors.secondary,
  success: ({ theme }) => theme.colors.success,
};
export const HomeLayout = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: auto auto;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  background: #ffffff;
`;

export const HomePageWrapper = styled.div`
  width: calc(100dvw - (100dvw - 100%));
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 95dvw;
  height: 93dvh;
  border-radius: 50px;

  display: grid;
  grid-template-rows: ${(props) => props.theme.sizes.headerHeight} auto;
  background: linear-gradient(
    338deg,
    rgba(215, 222, 214, 1) 38%,
    rgba(228, 229, 213, 1) 55%,
    rgba(247, 247, 245, 1) 84%
  );
`;

export const ColWrapper = styled.div`
  grid-row: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  /* border: black 5px solid; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const FirstColItem = styled.div`
  grid-column: 1; // 첫 번째 열에 위치
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const RowWrapper = styled.div`
  grid-row: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  /* border: red 5px dashed; */
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;
export const FirstRowItem = styled.div`
  grid-row: 1; // 첫 번째 열에 위치
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TextContainer = styled.div`
  display: flex;
  font-size: 70px;
  flex-direction: column;
  align-items: center;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  gap: 1rem;
  text-align: center;
  position: relative;

  &::after {
    content: 'with Golla-Golla!';
    display: block;
    font-size: 0.8em;
    animation: ${fadeIn} 1s ease-out forwards;
  }
`;

export const MainText = styled.span`
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 1rem;
  text-fill-color: transparent;
`;

export const SubText = styled.span`
  background: black;
  font-size: 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Roboto', sans-serif;

  background-clip: text;
  padding-top: 2rem;
  text-fill-color: transparent;
  letter-spacing: 2px;
`;

export const Title = styled.h1`
  margin: 0;
  position: relative;
`;

export const Subtitle = styled.h1`
  margin: 0;
  position: relative;
  left: 100px; /* Adjust this value to move "아가씨" to the right */
`;

export const SecondRowItem = styled.div`
  grid-row: 2; // 첫 번째 열에 위치
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

//SECTION seaarch CARD

export const Card = styled.div`
  background-color: #f2f2f2;
  border-radius: 60px;
  padding: 4rem 5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 90%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr 2fr;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 30px;
  padding: 26px 20px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  flex-grow: 1;
  font-size: 16px;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 2fr 0.8fr;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.$primary ? themeColors.primary(props) : '#ffffff'};
  color: ${(props) => (props.$primary ? '#ffffff' : '#000000')};
  border: none;
  border-radius: 20px;
  padding: 30px 30px;
  font-size: 1.2rem;
  height: 80%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
