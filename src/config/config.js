const environment = process.env.NODE_ENV || 'production';

const config = {
  environment: environment,
  isProduction: process.env.NODE_ENV === 'production',

  apiUrl: process.env.REACT_APP_API_URL,
  hostUrl: process.env.REACT_APP_HOST_URL,
};

// 환경 변수 사용 및 기본값 설정
export default environment === 'production'
  ? {
      ...config,
    }
  : {
      ...config,
      hostUrl: 'http://localhost:3000',
    };
