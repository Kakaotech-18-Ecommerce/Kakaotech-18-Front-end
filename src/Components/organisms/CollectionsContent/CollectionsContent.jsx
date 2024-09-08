import React, { useEffect } from 'react';
import { ContentStyle, Row, Col } from "../../../layout/index.js"
import { Image, Typo } from "../../atoms/index.js"
import { useCategories } from "../../../hooks/index.js"
import styled from 'styled-components';

const CateCol = styled.div`
  border: 1px solid rgb(226, 226, 226);
  padding: 2.5rem 2.8rem ;
  flex-basis: 83.33%;
  display : flex;
  box-sizing : border-box;
  flex-wrap : wrap;
  @media (max-width: 576px) {
    padding: 1.3rem 1rem;
    flex-basis: 90%;
  }
`

const ResponsiveCol = styled(Col)`
  border: 1px solid rgb(226, 226, 226);
  padding: 2.5rem 2.8rem;

  @media (max-width: 576px) {
    display: none;
  }

  @media (min-width: 577px) {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
`;

const CategoriesBox = styled.div`
display : flex;
flex: 1;
gap : 1rem 0;
flex-direction: column;
position: relative;
justify-content: center;
align-items: center;

&:not(:last-child)::after  {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 35%; /* 세로선의 길이를 조절할 수 있습니다 */
    width: 1px;
    background-color: rgb(226, 226, 226); /* 세로선의 색상 */
  }
`


const HomeContent = ({ }) => {
  console.log('Effect 실행');

  const { categories, categoriesValues, getCategoryKorName } = useCategories();

  // useMemo를 사용하여 값을 메모이제이션
  const memoizedCategories = React.useMemo(() => categories, [categories]);
  const memoizedCategoriesValues = React.useMemo(() => categoriesValues, [categoriesValues]);

  // useEffect를 사용한 로깅
  React.useEffect(() => {
    console.log(memoizedCategoriesValues.length);
    console.log(memoizedCategories['SNACK']);
  }, [memoizedCategoriesValues, memoizedCategories]);


  return (
    <>
      <ContentStyle>
        <Row justify={"center"} align={"center"}>

          {/* //SECTION Title */}
          <Col span={12} justify={"center"} align={"center"} style={{ margin: "3rem 0" }}>
            <Typo size={'2.5rem'} weight={"bold"} color={"rgb(51,51,51)"} > 전체 상품</Typo>

          </Col>
          {/* //!SECTION Title */}

          {/* //SECTION Categories */}
          <Col span={12} justify={"center"} align={"center"} style={{ margin: "1rem 0 3rem 0" }}>
            <Row justify={"center"} align={"center"}>
              <CateCol >
                <Row>
                  {
                    memoizedCategoriesValues.map((category, index) => (
                      // <Col span={12 / categoriesValues.length} justify={"center"} align={"center"} key={index}  >
                      <CategoriesBox key={index} >
                        <Typo size={'1.3rem'} weight={"bold"} color={"rgb(51,51,51)"} >{getCategoryKorName(category)}</Typo>
                        {memoizedCategories[category].map((subCategory, index) => (
                          <Typo key={index} size={'1rem'} color={"rgb(51,51,51)"} >{getCategoryKorName(subCategory)}</Typo>
                        ))}
                      </CategoriesBox>
                      // </Col>
                    ))

                  }
                </Row>
              </CateCol>
            </Row>
          </Col>
          {/* //!SECTION Categories */}

          {/* //SECTION Content*/}

          <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
            <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
          </Col>

          {/* //!SECTION Content*/}


        </Row >
      </ContentStyle >
    </>
  )
}

export default React.memo(HomeContent);

