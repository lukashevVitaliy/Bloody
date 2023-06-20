import { React } from 'services/imports-npm';

export const AutoplayProgress = ({ progressCircle, progressContent }) => {
  return (
    <div className="autoplay-progress" slot="container-end">
      <svg viewBox="0 0 48 48" ref={progressCircle} role="img">
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <span ref={progressContent}></span>
    </div>
  );
};
