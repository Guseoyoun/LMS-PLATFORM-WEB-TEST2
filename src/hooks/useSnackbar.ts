import { createContext, useContext } from 'react';

export type SnackbarConfig = {
  type?: 'success' | 'warning' | 'info' | 'error'
  text: string,
}

// @ts-ignore
export const SnackbarContext = createContext<(config: SnackbarConfig) => void>(null);

export const useSnackbar = () => useContext(SnackbarContext);