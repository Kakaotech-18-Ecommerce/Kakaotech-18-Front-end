import React, { useCallback, useState, useRef, useEffect } from "react";
import LayoutHeader from "../../widgets/LayoutHeader/ui/LayoutHeader.jsx"
import HomeContent from "../../Components/organisms/HomeContent/HomeContent.jsx"
const Home = () => {
  const searchMainRef = useRef(null); // 감지할 요소의 ref
  const [isEnded, setIsEnded] = useState(false); // 요소의 끝 감지 상태

  useEffect(() => {
    const sentinel = searchMainRef.current;

    // dvh를 px로 변환
    const dvhToPx = (dvh) => {
      return window.innerHeight * (dvh / 100);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 0) {
          setIsEnded(true); // 요소가 끝났을 때 true로 설정
        } else {
          setIsEnded(false); // 요소가 끝나지 않았을 때 false로 설정
        }
      },
      {
        root: null, // 뷰포트 기준
        threshold: 0, // 요소가 완전히 사라질 때 감지
        rootMargin: `-${dvhToPx(15.5)}px`, // 추가적으로 감지 여유를 줄 수 있음
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

  return (
    <>
      <LayoutHeader isEnded={isEnded}></LayoutHeader>
      <HomeContent searchMainRef={searchMainRef} />
    </>
  );
};

export default Home;
