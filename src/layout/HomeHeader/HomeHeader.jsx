import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Image, Typo, TextBox, Button } from "../../Components/atoms/index.js";
import { Row, Col } from "../index.js"
import { LoginModalForm } from "../../Components/molecules/index.js";
import headerIcon from "../../assets/icons/golla_Icon.png"
import { ReactComponent as SearchIcon } from '../../assets/svg/searchIcon.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cartIcon.svg';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { SenHeader, LayoutHeaderWrapper, HeaderWrapper, IconHeader, SearchWrapper, IconHeaderButton, VerticalDivider, CategoryHeader, CategoryBox, LoginBtnBox, LoginValueBtn, CategoryWrapper, CategoryContent, CategoryValue } from "./HomeHeader.styles.js"

const HomeHeader = ({ logined, role, isEnded = true }) => {
  const location = useLocation();


  //SECTION 스크롤 
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {

    // 홈 페이지가 아닐 경우 scrolled를 true로 설정
    if (location.pathname !== '/') {
      setScrolled(true);
      return; // 홈이 아니면 observer를 설정하지 않음
    }

    const sentinel = sentinelRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `0px 0px 0px 0px`
      }
    );

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [location.pathname]);

  console.log(isEnded, scrolled)


  //!SECTION

  //NOTE - JS
  const navigate = useNavigate()




  //SECTION modal , UI controls 
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleLoginModalOpen = () => setOpenLoginModal(true);
  const handleLoginModalClose = () => setOpenLoginModal(false);


  const doingLogin = () => {
    handleLoginModalOpen();
  }


  /**
      * @description 마이페이지, 장바구니 클릭시 func
      */

  const IconHeaderBtnOnClick = {
    home: () => {
      navigate('/');
    },

    myPage: () => {
      logined ? navigate('/mypage/order') : doingLogin()
    },
    cart: () => {
      navigate('/cart');

    }
  }

  //!SECTION

  //SECTION 회원가입 정보

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/logout', {
        method: 'GET',
        credentials: 'include' // 이 옵션을 사용하면 쿠키가 포함됩니다.
      });

      if (response.ok) {
        // 요청이 성공했을 때의 처리
        console.log('로그아웃 성공');
        // 로그아웃 후 원하는 페이지로 리다이렉트
        window.location.href = '/login';
      } else {
        // 요청이 실패했을 때의 처리
        console.error('로그아웃 실패');
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  const logOutOnClick = () => {
    //TODO logout_process
    // logout_process()
    handleLogout();
  }


  //!SECTION



  //SECTION - Login
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    handleLoginModalClose()
  }

  const handleNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    handleLoginModalClose()
  }
  //!SECTION - Login





  //SECTION - search
  /**
   * @description 검색 textBox value 
   * @hook useState
   */
  const [searchValue, setSearchValue] = useState('');

  /**
       * @description 검색value OnChange
       * @param event
       */
  const searchIconOnChange = (e) => {
    const search = e.target.value;
    return setSearchValue(search)
  }

  const onKeyPressSearch = (e) => {
    if (e.key === 'Enter') {
      return navigate(`/search?keyword=${searchValue}`)
    }
  }


  /**
       * @description 검색value OnClick
       */
  const searchSubmitOnClick = () => {
    return navigate(`/search?keyword=${searchValue}`)
  }

  //!SECTION - search



  //SECTION - return JSX
  return (
    <>

      <div ref={sentinelRef} style={{ position: 'absolute', top: '2.5dvh', height: '1px', width: '100%' }} />
      <SenHeader data-scrolled={scrolled}>
        {
          logined ?

            // SECTION - jsx 장바구니 | 로그인 | 회원가입
            <LoginBtnBox>
              {/* <LoginValueBtn onClick={() => navigate('/cart')} >마이페이지</LoginValueBtn> */}
              <LoginValueBtn onClick={logOutOnClick}>로그아웃</LoginValueBtn>
              {
                role === 'ADMIN' ?
                  <LoginValueBtn onClick={() => { navigate("/admin") }}>관리자 페이지</LoginValueBtn>
                  :
                  null
              }
            </LoginBtnBox>
            :
            <>
              <LoginBtnBox>
                {
                  role === 'ADMIN' ?
                    <LoginValueBtn onClick={() => { navigate("/admin") }}>관리자 페이지</LoginValueBtn>
                    :
                    null
                }
                <LoginValueBtn onClick={doingLogin} >회원가입</LoginValueBtn>
                {/*TODO 삭제  */}
                <LoginValueBtn onClick={logOutOnClick}>로그아웃</LoginValueBtn>

              </LoginBtnBox>
            </>
          // !SECTION - jsx 장바구니 | 로그인 | 회원가입

        }
      </SenHeader>
      <LayoutHeaderWrapper data-scrolled={scrolled} >
        <HeaderWrapper>
          <Row align={"center"} justify={"space-between"}>
            <Col span={6} align={"center"}>
              <Row align={"center"}>
                <Col xs={4} sm={3} span={3} align={"center"}>
                  <Image src={headerIcon} width={'100%'} cursor={"pointer"} onClick={() => { IconHeaderBtnOnClick.home() }} />
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} span={8} justify={"space-evenly"} align={"center"}>
                  <CategoryBox onClick={() => navigate("/collections")}>전체상품</CategoryBox>
                  <CategoryBox onClick={() => navigate("/collections/signature")} >추천아이템</CategoryBox>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row align={"center"} justify={"space-between"}>
                <Col md={9} span={10}>
                  <SearchWrapper $isEnded={isEnded}>
                    <TextBox value={searchValue} onChange={searchIconOnChange} onKeyPress={onKeyPressSearch} placeholder={"검색어를 입력해 주세요"}></TextBox>
                    {/* <SearchOutlinedIcon style={{ fontSize: "2rem", marginRight: "1rem", color: "#0d7000", cursor: "pointer" }} /> */}
                    <SearchIcon onClick={searchSubmitOnClick} cursor={"pointer"} color={"#0d7000"} width={"2rem"} height={"2rem"} style={{ marginRight: "1rem" }} ></SearchIcon>
                  </SearchWrapper>
                </Col>
                <Col md={3} span={2}>
                  <Button btnType={"black"} size={'large'} $bold onClick={doingLogin}
                    value={"로그인"}>
                  </Button>
                  <Modal
                    open={openLoginModal}
                    onClose={handleLoginModalClose}
                  >
                    <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: {
                        // xs: "90%",
                        // sm: "50%",
                        // md: "50%",
                        // lg: "50%",
                        // xl: "50%",
                      },
                      maxWidth: '500px',
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      borderRadius: '14px',
                      p: 4,
                      overflow: 'auto',
                      maxHeight: ' 80%',
                    }}>
                      <LoginModalForm handleLoginModalClose={handleLoginModalClose} handleNaverLogin={handleNaverLogin} handleKakaoLogin={handleKakaoLogin} />

                    </Box>
                  </Modal>
                </Col>
              </Row>
            </Col>
          </Row>
        </HeaderWrapper>
      </LayoutHeaderWrapper>
    </>

  )
  //!SECTION - return JSX


}

export default HomeHeader;