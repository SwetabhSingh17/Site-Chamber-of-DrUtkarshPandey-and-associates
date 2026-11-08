import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component that automatically scrolls the viewport to the top
 * whenever the user transitions between routes.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

