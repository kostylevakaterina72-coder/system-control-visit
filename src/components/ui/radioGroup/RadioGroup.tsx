// src/components/ui/RadioGroup/RadioGroup.tsx
import React from 'react';
import styles from './RadioGroup.module.scss';

interface RadioGroupProps {
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  className = '',
}) => {
  return (
    <div className={`${styles.group} ${className}`}>
      {options.map((option) => (
        <label key={option.value} className={styles.label}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;