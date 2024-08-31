import React from 'react';
import { Col, Row, Typo, Image } from '../../../shared/ui/index.js';
import Kakao_login from '../../../assets/images/kakao_login_large_wide.png';

const LoginModalForm = ({ handleKakaoLogin }) => {
  return (
    <>
      <Row>
        <Col
          span={12}
          style={{ borderBottom: '2px solid #393939', paddingBottom: '0.5rem' }}
        >
          <Row>
            <Col span={12}>
              <Typo size={'1.5rem'} color={'#414141'} weight={'bold'}>
                소셜계정으로 간편하게
              </Typo>
            </Col>
          </Row>
        </Col>

        <Col span={12} style={{ marginTop: '1.5rem' }}>
          <Row justify={'space-between'}>
            {/* //SECTION - JSX 소셜로그인 */}
            <Col span={12} style={{ padding: '1rem 0' }}>
              {/* <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo> */}

              <Image onClick={handleKakaoLogin} src={Kakao_login}></Image>
            </Col>
            {/* //!SECTION - 소셜로그인 */}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LoginModalForm;
