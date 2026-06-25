// src/components/ui/Input/Input.tsx
import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  name = '',
  required = false,
  className = '',
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      required={required}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;