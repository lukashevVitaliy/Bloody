const body = document.body;

export const useToggleClassBody = (isLockScroll: boolean) => {
  {
    isLockScroll
      ? body.classList.add('scroll-off')
      : body.classList.remove('scroll-off');
  }
};
