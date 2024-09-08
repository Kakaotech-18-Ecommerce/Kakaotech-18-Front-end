import React from 'react';
import { ContentStyle, Row, Col } from "../../../layout/index.js"
import { Image, Typo } from "../../atoms/index.js"
import { Space } from 'antd';


const HomeContent = ({ }) => {

  return (
    <>
      <ContentStyle>
        <Row justify={"center"} align={"center"}>

          {/* //SECTION Title */}
          <Col span={12} justify={"center"} align={"center"} style={{ margin: "3rem 0" }}>
            <Typo size={'2.5rem'} weight={"bold"} color={"rgb(51,51,51)"} > 전체 상품</Typo>

          </Col>
          {/* //!SECTION Title */}



          {/* //SECTION Content */}

          <Col span={10} justify={"center"} align={"center"}>
            <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
              <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
            </Col>
            <Row justify={"center"} align={"center"}>
              {/* //SECTION list */}

              {/* <Col span={12} justify={"center"} align={"center"}> */}

              {/* {
                                    selectedCategory ?
                                        <Row justify={"flex-start"} align={"flex-start"}>
                                            {
                                                categoryList.length === 0 ?
                                                    <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
                                                        <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
                                                    </Col>
                                                    :
                                                    categoryList.map((lists) => {
                                                        return (
                                                            <GoodsForm
                                                                key={lists.id}
                                                                id={lists.id}
                                                                thumbnailImg={lists.thumbnailImg}
                                                                name={lists.name}
                                                                originalPrice={lists.originalPrice}
                                                                sellingPrice={lists.sellingPrice}
                                                                description={lists.description}
                                                                totalCount={lists.totalCount}
                                                                productOnClick={() => collectionProductOnClick(lists.id)}
                                                            />
                                                        )
                                                    })
                                            }
                                        </Row>
                                        :
                                        <Row justify={"flex-start"} align={"flex-start"}>
                                            {
                                                lists.length === 0 ?
                                                    <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
                                                        <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
                                                    </Col>
                                                    : lists.map((lists) => {
                                                        return (
                                                            <GoodsForm
                                                                key={lists.id}
                                                                id={lists.id}
                                                                thumbnailImg={lists.thumbnailImg}
                                                                name={lists.name}
                                                                originalPrice={lists.originalPrice}
                                                                sellingPrice={lists.sellingPrice}
                                                                description={lists.description}
                                                                totalCount={lists.totalCount}
                                                                productOnClick={() => collectionProductOnClick(lists.id)}
                                                            />
                                                        )
                                                    })
                                            }
                                        </Row>
                                } */}
              {/* </Col> */}
              {/* //!SECTION list */}


              {/* //SECTION Pagination */}
              <Col span={12} justify={'center'}>
                {/* <Pagination count={totalPageNum} onChange={pagingClick} key={pagingNum} defaultPage={pagingNum} shape="rounded" /> */}
              </Col>
            </Row>

          </Col>
          {/* //!SECTION Pagination */}

        </Row>
      </ContentStyle >
    </>
  )
}

export default HomeContent;
