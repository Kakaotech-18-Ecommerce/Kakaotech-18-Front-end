import React from 'react';
import { Typo, Image } from '../../atoms/index.js';
import { Col, Row } from "../../../layout/index.js";
import Kakao_login from '../../../assets/images/kakao_login_medium_wide.png';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import naverBtn from "../../../assets/icons/naverBtn.png"
import kakaoBtn from "../../../assets/icons/kakaoBtn.png"

const SnsLoginBtn = styled.div`
    margin : 5px 0;
    height : 4rem;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    position : relative;
    background-color: ${props => props.$naver ? `#1EC800` : `#F5E901`};
    color: ${props => props.$naver ? `#fff` : `#000`};
    border-radius : 4px;
    cursor : pointer;
`
const SnsIconWrapper = styled.div`
    position : absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    width : 4rem;
    padding :0 1rem;
    height : 100%;
    border-right:2px solid white;
    cursor : pointer;

`

const LoginModalForm = ({ handleLoginModalClose, handleKakaoLogin, handleNaverLogin }) => {
  return (
    <>
      <Row justify={'center'}>
        <Col span={12} justify={'flex-end'} style={{ paddingBottom: "1rem" }}>
          <CloseIcon onClick={handleLoginModalClose} style={{ fontSize: "23px", color: "rgb(112, 121, 143)", cursor: "pointer" }} />
        </Col>
        <Col span={12} justify={'center'} align={'center'}>
          <Typo size={'1.3rem'} color={'#414141'} weight={'500'}>
            소셜계정으로 간편하게 !
          </Typo>
        </Col>
        <Col span={11} justify={'center'} style={{ marginTop: '1rem' }}>
          <Row justify={'space-between'} >
            {/* //SECTION - JSX 소셜로그인 */}
            <Col span={12} style={{ paddingTop: '1rem' }} justify={'center'}>
              {/* <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo> */}
              <SnsLoginBtn $naver onClick={handleNaverLogin}>
                <SnsIconWrapper >
                  <Image src={naverBtn} alt="NAVER" width={"80%"} />
                </SnsIconWrapper>
                <Typo width={'100%'} cursor={"pointer"} textAlign={"center"} size={"1.2rem"} style={{ justifyContent: "center" }}>네이버로 시작하기</Typo>
              </SnsLoginBtn>
            </Col>
            <Col span={12} style={{ padding: '10px 0' }} justify={'center'}>
              {/* <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo> */}
              <SnsLoginBtn onClick={handleNaverLogin}>
                <SnsIconWrapper >
                  <Image src={kakaoBtn} alt="KAKAO" width={"80%"} />
                </SnsIconWrapper>
                <Typo width={'100%'} cursor={"pointer"} textAlign={"center"} size={"1.2rem"} style={{ justifyContent: "center" }}>카카오로 시작하기</Typo>
              </SnsLoginBtn>
            </Col>
            {/* //!SECTION - 소셜로그인 */}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LoginModalForm;
