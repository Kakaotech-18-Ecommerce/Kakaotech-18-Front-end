import React from 'react';
import { Image } from "../../index.js"
import Kakao_login from "../../../assets/images/kakao_login.png"
import { useNavigate } from 'react-router-dom';
import { HomeLayout, HomePageWrapper, HomeWrapper, ColWrapper, FirstColItem, RowWrapper, FirstRowItem, TextContainer, MainText, SubText, Card, SearchBar, SearchInput, ButtonGroup, Button, SecondRowItem } from './HomeContent.styles.js';
import { Col, Row } from "../../../shared/ui/index.js"
import hero_Img from "../../../assets/images/man1.png"
import { Search, Mic, ChevronRight } from 'lucide-react';

const HomeContent = ({ searchMainRef }) => {
  const navigate = useNavigate();

  return (
    <>
      <HomeLayout>
        <HomePageWrapper>
          <HomeWrapper>
            <ColWrapper>
              <FirstColItem>
                <Image onClick={() => { navigate('/main') }} src={hero_Img} width={"45%"} cursor={"pointer"} />
              </FirstColItem>
            </ColWrapper>
            <RowWrapper>
              <FirstRowItem>
                <TextContainer>
                  <MainText>Let's shop</MainText>
                </TextContainer>
                <SubText>Search, Browse, and Fall in Love with Unique Finds</SubText>

              </FirstRowItem>
              <SecondRowItem>
                <Card>
                  <SearchBar ref={searchMainRef}>
                    <Search size={20} color="#888" />
                    <SearchInput type="text" placeholder="Search" />
                    <Mic size={20} color="#888" />
                  </SearchBar>
                  {/* <div ref={searchMainRef} style={{ position: 'absolute', top: '2.5dvh', height: '1px', width: '1px , border:"5px solid black' }} /> */}

                  <ButtonGroup>
                    <Button>마이페이지</Button>
                    <Button>
                      장바구니
                      <ChevronRight size={16} style={{ marginLeft: '5px' }} />
                    </Button>
                    <Button>
                      전체아이템
                      <ChevronRight size={16} style={{ marginLeft: '5px' }} />
                    </Button>
                    <Button $primary>
                      추천 상품
                      <ChevronRight size={16} style={{ marginLeft: '5px', color: 'white' }} />
                    </Button>
                  </ButtonGroup>
                </Card>
              </SecondRowItem>
            </RowWrapper>
          </HomeWrapper >
        </HomePageWrapper>
        <HomePageWrapper>
          <HomeWrapper>
          </HomeWrapper>
        </HomePageWrapper>


      </HomeLayout>


    </>
  )
}

export default HomeContent;
