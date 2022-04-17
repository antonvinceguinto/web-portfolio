import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 });

function ScrollObserver({ children }: any) {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const value = useMemo(() => ({ scrollY }), [scrollY]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollObserver;
