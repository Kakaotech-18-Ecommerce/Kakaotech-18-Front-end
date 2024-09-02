import React from 'react';
import { ContentStyle } from './ContentLayout.style.js';

const ContentLayout = ({ children, style }) => {
  return <ContentStyle style={style}>{children}</ContentStyle>;
};

export default ContentLayout;
