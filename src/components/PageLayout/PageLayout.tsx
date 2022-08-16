import { Box } from '@bigcommerce/big-design';
import React from 'react';

export const PageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <Box as="main" padding="xxLarge">
    {children}
  </Box>
);
