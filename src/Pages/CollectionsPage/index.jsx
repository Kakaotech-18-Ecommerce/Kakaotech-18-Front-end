import React, { useCallback, useState, useRef, useEffect } from "react";
import { LayoutHeader } from "../../layout/index.js"
import CollectionsContainer from "../../Containers/pages/collections/ContentContainer.jsx"
const Collections = () => {

  return (
    <>
      <LayoutHeader ></LayoutHeader>
      <CollectionsContainer />
    </>
  );
};

export default Collections;
