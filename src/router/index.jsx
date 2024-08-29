import React, { Suspense, lazy } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../entities/user/index.js';
import { notification } from 'antd';

const Home = lazy(() => import('./HomeRouter.jsx'));
const Result = lazy(() => import('./ResultRouter.jsx'));
const Main = lazy(() => import('./MainRouter.jsx'));

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = useSelector(selectUserRole);
  if (allowedRoles && !allowedRoles.includes(role)) {
    return notification['error']({
      message: role === "GUEST" ? `로그인이 필요합니다.` : "권한이 없습니다.",
      description: role === "GUEST" ? `모든 기능을 이용하려면 로그인해 주세요.` : "오류가 있다고 생각되면 관리자에게 문의해 주세요.",
      duration: 2,
    });
  }
  return children;
};


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/goods:id" element={<Home />} />
          <Route path="/proposal" element={<Home />} />
          <Route path="/search" element={<Main />} />

          <Route path="/cart" element={
            <ProtectedRoute allowedRoles={['USER']}>
              <Result />
            </ProtectedRoute>
          } />
          <Route path="/mypage/:menu" element={
            <ProtectedRoute allowedRoles={['USER']}>
              <Result />
            </ProtectedRoute>
          } />
          <Route path="/mypage" element={
            <ProtectedRoute allowedRoles={['USER']}>
              <Result />
            </ProtectedRoute>
          } />

          {/**
              * @description 주문관련 path
              * @param  {params} checkout - 주문서 
              * @param  {params} complete - 주문완료 
          */}
          <Route path="/order/:params" element={
            <ProtectedRoute allowedRoles={['USER']}>
              <Result />
            </ProtectedRoute>
          } />
          <Route path="/order" element={
            <ProtectedRoute allowedRoles={['USER']}>
              <Result />
            </ProtectedRoute>
          } />

          {/* ADMIN PAGE */}
          <Route path="/admin:menu" element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <Result />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <Result />
            </ProtectedRoute>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;