import React, { useMemo, useState } from 'react';

export interface NavigationProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  isBurgerOpen: boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationContext = React.createContext<NavigationProps>(
  {} as NavigationProps,
);

function NavigationProvider({ children }: any) {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const value: NavigationProps = useMemo(
    () => ({ currentIndex, setCurrentIndex, isBurgerOpen, setIsBurgerOpen }),
    [currentIndex, setCurrentIndex, isBurgerOpen, setIsBurgerOpen],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
