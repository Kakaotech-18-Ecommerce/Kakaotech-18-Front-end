// hooks/useCategoryInteractions.js
import { useState, useCallback } from 'react';
import useCategories from './useCategories';

const useCategoryInteractions = () => {
  const { categories } = useCategories();

  //카테고리 와퍼 bool
  const [isCategoryEnter, setCategoryEnter] = useState(false);
  //카테고리 value
  const [categoryValue, setCategoryValue] = useState('');
  //카테고리 세부사항
  const [isCategoryDetail, setIsCategoryDetail] = useState(false);
  //카테고리 세부사항 객체
  const [categoryValueDetail, setCategoryValueDetail] = useState([]);

  const mouseEnterHandler = useCallback(() => {
    setCategoryEnter(true);
    setIsCategoryDetail(false);
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    setCategoryValue('');
    setCategoryEnter(false);
  }, []);

  const valueMouseEnterHandler = useCallback(
    (event, value) => {
      setCategoryEnter(true);
      setCategoryValue(value);
      setCategoryValueDetail(categories[value] || []);
      setIsCategoryDetail(categories[value]?.length > 0);
    },
    [categories],
  );

  const valueMouseLeaveHandler = useCallback(() => { }, []);

  return {
    isCategoryEnter,
    categoryValue,
    isCategoryDetail,
    categoryValueDetail,
    setCategoryEnter,
    mouseEnterHandler,
    mouseLeaveHandler,
    valueMouseEnterHandler,
    valueMouseLeaveHandler,
  };
};

export default useCategoryInteractions;
