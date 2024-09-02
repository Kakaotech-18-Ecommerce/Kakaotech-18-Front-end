import React from 'react';
import { Col, Row, Typo, Image } from '../../../shared/ui/index.js';
import Kakao_login from '../../../assets/images/kakao_login_medium_wide.png';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import naverBtn from "../../../assets/icons/naverBtn.png"


const SnsLoginBtn = styled.div`
    margin : 5px 0;
    height : 4.5rem;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background-color: ${props => props.$naver ? `#1EC800` : `#F5E901`};
    color: ${props => props.$naver ? `#fff` : `#000`};
    cursor : pointer;
`
const SnsIconWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width : 5rem;
    padding :0 10px;
    height : 100%;
    border-right:1px solid white;
    cursor : pointer;

`

const LoginModalForm = ({ handleLoginModalClose, handleKakaoLogin, handleNaverLogin }) => {
  return (
    <>
      <Row>
        <Col span={12} justify={'flex-end'} style={{ paddingBottom: "1rem" }}>
          <CloseIcon onClick={handleLoginModalClose} style={{ fontSize: "23px", color: "rgb(112, 121, 143)", cursor: "pointer" }} />
        </Col>
        <Col span={12} justify={'center'} align={'center'}>
          <Typo size={'1.3rem'} color={'#414141'} weight={'500'}>
            소셜계정으로 간편하게 !
          </Typo>
        </Col>
        <Col span={12} style={{ marginTop: '1rem' }}>
          <Row justify={'space-between'}>
            {/* //SECTION - JSX 소셜로그인 */}
            <Col span={12} style={{ padding: '1rem 0' }} justify={'center'}>
              {/* <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo> */}
              <SnsLoginBtn $naver onClick={handleNaverLogin}>
                <SnsIconWrapper >
                  <img src={naverBtn} alt="NAVER" width={"80%"} />
                </SnsIconWrapper>
                <Typo cursor={"pointer"} width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>네이버로 로그인</Typo>
              </SnsLoginBtn>
              <Image onClick={handleKakaoLogin} src={Kakao_login} cursor={"pointer"}></Image>
            </Col>
            {/* //!SECTION - 소셜로그인 */}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LoginModalForm;
