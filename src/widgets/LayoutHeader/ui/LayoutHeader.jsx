import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { Row, Col, Image, Typo, TextBox, Button } from "../../../shared/ui/index.js";
import { LoginModalForm } from "../../LoginModalForm/ui/index.js";
import headerIcon from "../../../assets/icons/golla_Icon.png"
import HamburgerIcon from "../../../assets/icons/hamburgerIcon.png"
import { ReactComponent as SearchIcon } from '../../../assets/svg/searchIcon.svg';
import { ReactComponent as CartIcon } from '../../../assets/svg/cartIcon.svg';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { SenHeader, LayoutHeaderWrapper, HeaderWrapper, IconHeader, SearchWrapper, IconHeaderButton, VerticalDivider, CategoryHeader, CategoryBox, LoginBtnBox, LoginValueBtn, CategoryWrapper, CategoryContent, CategoryValue } from "./LayoutHeader.styles.js"

const LayoutHeader = ({ logined, role, isEnded }) => {
  //SECTION 스크롤 
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
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
  }, []);

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
    myPage: () => {
      logined ? navigate('/mypage/order') : doingLogin()
    },
    cart: () => {
      navigate('/cart');

    }
  }

  //!SECTION

  //SECTION 회원가입 정보

  const logOutOnClick = () => {
    //TODO logout_process
    // logout_process()
    navigate('/')
  }

  //!SECTION



  //SECTION - Login
  const handleNaverLogin = () => {
    if (document && document?.querySelector("#naverIdLogin")?.firstChild && window !== undefined) {
      const loginBtn = document.getElementById("naverIdLogin")?.firstChild;
      loginBtn.click();
    }
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
                <Col span={2} align={"center"}>
                  <Image src={headerIcon} width={'100%'} cursor={"pointer"} onClick={() => { navigate("/") }} />
                </Col>
                <Col xs={10} sm={10} md={9} lg={9} xl={9} xxl={8} span={8} justify={"space-evenly"} align={"center"}>
                  <CategoryBox onClick={() => navigate("/collections")}>전체상품</CategoryBox>
                  <CategoryBox onClick={() => navigate("/collections/signature")} >추천아이템</CategoryBox>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row align={"center"} justify={"space-between"}>
                <Col span={10}>
                  <SearchWrapper $isEnded={isEnded}>
                    <TextBox value={searchValue} onChange={searchIconOnChange} onKeyPress={onKeyPressSearch} placeholder={"검색어를 입력해 주세요"}></TextBox>
                    {/* <SearchOutlinedIcon style={{ fontSize: "2rem", marginRight: "1rem", color: "#0d7000", cursor: "pointer" }} /> */}
                    <SearchIcon onClick={searchSubmitOnClick} cursor={"pointer"} color={"#0d7000"} width={"2rem"} height={"2rem"} style={{ marginRight: "1rem" }} ></SearchIcon>
                  </SearchWrapper>
                </Col>
                <Col span={2}>
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
                        xs: "90%",
                        sm: "55%",
                        md: "55%",
                        lg: "55%",
                        xl: "55%",
                      },
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      borderRadius: '5px',
                      p: 4,
                      overflow: 'auto',
                      maxHeight: ' 80%'
                    }}>
                      <LoginModalForm handleNaverLogin={handleNaverLogin} />

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

export default LayoutHeader;