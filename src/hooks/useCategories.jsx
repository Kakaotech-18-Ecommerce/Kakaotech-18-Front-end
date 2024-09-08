import React, { useState, useCallback, useMemo } from "react";

/** 기본 카테고리 객체를 컴포넌트 외부에 선언
 *'간식 · 과자': ['초콜릿 · 젤리', '간식 · 과자'],
  '와인 · 위스키': ["레드와인", '화이트 · 로제와인'],
  '유제품': ['우유 · 두유', '아이스크림'],
  '정육 · 가공육': ['소고기', '돼지고기']
 */
const DEFAULT_CATEGORIES = {
  'SNACK': ['CHOCOJELLY', 'SNACK'],
  'WINE': ['REDWINE', 'WHITEWINE'],
  'DAIRY': ['MILK', 'ICECREAM'],
  'MEAT': ['BEEF', 'PORK'],

};

const CATEGORIES_KOR = {
  'SNACK': '간식 · 과자',
  'CHOCOJELLY': '초콜릿 · 젤리',
  'WINE': '와인 · 위스키',
  'REDWINE': '레드와인',
  'WHITEWINE': '화이트 · 로제와인',
  'DAIRY': '유제품',
  'MILK': '우유 · 두유',
  'ICECREAM': '아이스크림',
  'MEAT': '정육 · 가공육',
  'BEEF': '소고기',
  'PORK': '돼지고기'
};


const useCategories = (initialCategories = DEFAULT_CATEGORIES) => {
  //카테고리 
  const [categories, setCategories] = useState(initialCategories);
  //카테고리 values
  const categoriesValues = useMemo(() => Object.keys(categories), [categories]);


  // useCallback을 사용하여 함수 재생성 방지
  const addCategory = useCallback((categoryName, categoryValue) => {
    setCategories(prevCategories => ({
      ...prevCategories,
      [categoryName]: Array.isArray(categoryValue) ? categoryValue : [categoryValue]
    }));
  }, []);

  const updateCategory = useCallback((categoryName, categoryValue) => {
    setCategories(prevCategories => {
      if (!prevCategories[categoryName]) {
        return prevCategories; // 카테고리가 없으면 변경하지 않음
      }
      return {
        ...prevCategories,
        [categoryName]: Array.isArray(categoryValue) ? categoryValue : [categoryValue]
      };
    });
  }, []);

  const removeCategory = useCallback((categoryName) => {
    setCategories(prevCategories => {
      const newCategories = { ...prevCategories };
      delete newCategories[categoryName];
      return newCategories;
    });
  }, []);

  const resetCategories = useCallback(() => {
    setCategories(DEFAULT_CATEGORIES);
  }, []);

  const getCategoryKorName = useCallback((category) => {
    return CATEGORIES_KOR[category] || category;
  }, []);

  return {
    categories,
    categoriesValues,
    addCategory,
    updateCategory,
    removeCategory,
    resetCategories,
    getCategoryKorName
  };
};

export default (useCategories);