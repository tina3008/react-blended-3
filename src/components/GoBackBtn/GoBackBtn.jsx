import styles from './GoBackBtn.module.css';
import { Link } from 'react-router-dom';

export const GoBackBtn = ({ path, children }) => {
  return (
    <Link className={styles.link} to={path}>
      {children}
    </Link>
  );
};
