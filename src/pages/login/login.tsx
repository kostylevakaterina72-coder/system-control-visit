import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button/button';
import Input from '../../components/ui/input/input';
import RadioGroup from '../../components/ui/radioGroup/RadioGroup';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const roleOptions = [
    { value: 'student', label: 'Студент' },
    { value: 'teacher', label: 'Преподаватель' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Пока без проверки – сразу редирект
    if (role === 'student') {
      navigate('/student');
    } else {
      navigate('/teacher');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Контроль посещаемости</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Логин</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className={styles.field}>
            <label>Пароль</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <div className={styles.field}>
            <label>Роль</label>
            <RadioGroup
              name="role"
              options={roleOptions}
              selectedValue={role}
              onChange={(value) => setRole(value as 'student' | 'teacher')}
            />
          </div>
          <Button type="submit" className={styles.submitBtn}>
            ВОЙТИ
          </Button>
        </form>
        <p className={styles.footerText}>
          Войдите в систему для просмотра и редактирования 
        </p>
      </div>
    </div>
  );
};

export default Login;
