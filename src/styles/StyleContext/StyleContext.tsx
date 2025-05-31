import React, { createContext, FC } from 'react';

import { initialStyleContext } from './initialStyleContext';
import { StyleContextType } from './types';
import { useCssVariablesInjection } from '../utils/useCssVariablesInjection';

export const styleContext = createContext<StyleContextType | null>(null);

export const StyleContextProvider: FC<{
  children: React.ReactNode;
  styleConfig?: StyleContextType;
}> = ({ children, styleConfig = initialStyleContext }) => {
  useCssVariablesInjection(styleConfig);
  return (
    <styleContext.Provider value={styleConfig}>
      {children}
    </styleContext.Provider>
  );
};
