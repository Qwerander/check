import { createPortal } from 'react-dom';

export const Portal = (props) => {
  const { children } = props;

  const element = document.getElementById('portal');

  return createPortal(children, element);
};
