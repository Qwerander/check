// components/TrackedButton.jsx

import { sendMetrikaEvent } from "../../hooks/useMetrica";

const TrackedButton = ({ 
  children, 
  eventName, 
  eventParams = {}, 
  onClick, 
  component = 'button',
  href,
  ...props 
}) => {
  const handleClick = (e) => {
    // Отправляем событие в Метрику
    if (eventName) {
      sendMetrikaEvent(eventName, eventParams);
    }
    
    // Вызываем оригинальный onClick если есть
    if (onClick) {
      onClick(e);
    }
  };

  // Если component = 'a', рендерим ссылку
  if (component === 'a') {
    return (
      <a 
        href={href} 
        onClick={handleClick} 
        {...props}
      >
        {children}
      </a>
    );
  }

  // По умолчанию рендерим кнопку
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default TrackedButton;