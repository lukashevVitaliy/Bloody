import { useEffect, OverlayScrollbars } from 'services/imports-npm';

const config = {
  scrollbars: {
    visibility: 'auto',
    autoHide: 'leave',
    autoHideDelay: 300,
  },
};

export const useScrollbar = (root) => {
  useEffect(() => {
    let scrollbars;

    if (root.current) {
      scrollbars = OverlayScrollbars(root.current, config);
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root]);
};
