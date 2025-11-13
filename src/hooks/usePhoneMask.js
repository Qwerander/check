import { useState } from 'react';

// Кастомный хук для маски телефона
export const usePhoneMask = () => {
  const [phone, setPhone] = useState('');

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    let formattedValue = '+7 ';
    
    if (numbers.length > 0) {
      formattedValue += '(' + numbers.substring(1, 4);
    }
    if (numbers.length >= 4) {
      formattedValue += ') ' + numbers.substring(4, 7);
    }
    if (numbers.length >= 7) {
      formattedValue += '-' + numbers.substring(7, 9);
    }
    if (numbers.length >= 9) {
      formattedValue += '-' + numbers.substring(9, 11);
    }
    
    return formattedValue;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(formatPhone(value));
  };

  return [phone, handlePhoneChange];
};