import styled from 'styled-components';

//SECTION - styledComponent

export const SenHeader = styled.div`
  position: fixed;
  top: 0;
  height: 3.5dvh;
  width: calc(100dvw - (100dvw - 100%));
  z-index: 22;
  transition: all 0.3s ease;
  background-color: #fff;
  opacity: ${(props) => (props['data-scrolled'] ? 1 : 0)};
`;

export const LayoutHeaderWrapper = styled.div`
  width: calc(100dvw - (100dvw - 100%));
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.sizes.headerHeight};
  box-sizing: border-box;
  position: fixed;
  top: 3.5dvh;
  z-index: 20;
  transition: background-color 0.3s ease;
  ${(props) =>
    props['data-scrolled'] &&
    `
    background-color: #fff;
  `}
`;

export const HeaderWrapper = styled.div`
  width: 95dvw;
  padding: 0 50px;

  @media screen and (max-width: 499px) {
    padding: 0px 20px;
    height: 64px;
  }
  @media screen and (max-width: 860px) {
    padding: 0px 32px;
  }
  @media screen and (max-width: 1279px) {
    padding: 0px 40px;
  }
`;

export const IconHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 3.5rem;
  padding-left: 1rem;
  border: 1px solid #0d7000;
  border-radius: 6px;
  box-shadow: rgb(247 247 247) 0px 0px 0px 1px inset;
  font-size: 1.2rem;
  opacity: ${(props) => (props.$isEnded ? 1 : 0)};
`;

export const IconHeaderButton = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
`;
export const VerticalDivider = styled.div`
  width: 1px;
  height: 1rem;
  border-right: 1px solid rgb(204, 204, 204);
  margin: 0 1rem;
  @media (max-width: 860px) {
    border: none;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: #c2e19d;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const CategoryBox = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  border-left: ${(props) => (props.red ? `#e64937` : `#545454`)} 2px solid;
  padding-left: 5px;
  color: ${(props) => (props.red ? `#e64937` : `#545454`)};
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  &:hover {
    transition: color 100ms ease 0s;
    border-left: #005e1a 2px solid;

    color: #005e1a;
  }
`;
export const LoginBtnBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem 2rem 0.5rem 5px;
  height: 3.5dvh;
  /*width:max-content;*/
  right: 10px;
  position: static;
  z-index: 26;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  border-bottom: 1px solid rgb(238, 238, 238);
  @media (max-width: 600px) {
    position: static;
    height: auto;
    justify-content: space-evenly;
  }
`;

export const LoginValueBtn = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: inherit;
  /* border-left : ${(props) => (props.red ? `#e64937` : `#545454`)} 2px solid; */
  padding-left: 5px;
  color: ${(props) => (props.red ? `#e64937` : `#888888`)};
  cursor: pointer;
  font-family: 'nixgon';
  margin-right: 20px;
  border-left-width: 1px;
  font-weight: bold;
  @media (max-width: 600px) {
    justify-content: center;
    border: none;
    padding: 5px 10px;
    font-size: 1.5rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const CategoryWrapper = styled.div`
  height: calc(95vh - 20rem);
  overflow-y: auto;
  position: absolute;
  display: flex;
  top: 5rem;
  margin-top: 1rem;
`;
export const CategoryContent = styled.div`
  position: relative;
  z-index: 21;
  min-width: 249px;
  border-bottom: 1px solid #dddddd;
  background-color: #ffffff;
  animation: 0s linear 0s 1 normal;
  box-sizing: border-box;
`;
export const CategoryValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Jeju';
  font-size: 1.2rem;
  color: #333333;
  padding: 15px 0px 15px 24px;
  box-sizing: border-box;
  &:hover {
    background-color: rgba(233, 233, 233, 0.3);
    color: #0280;
    font-weight: bold;
  }
`;
