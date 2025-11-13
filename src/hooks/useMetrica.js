// hooks/useMetrika.js
import { useEffect } from 'react';

export const useMetrika = () => {
  useEffect(() => {
    // Ждем загрузки Метрики
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105284877, 'hit', window.location.pathname);
    }
  }, []);
};

export const sendMetrikaEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(105284877, 'reachGoal', eventName, eventParams);
  }
};