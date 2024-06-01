import { ClimbingBoxLoader } from 'react-spinners';
import styles from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <ClimbingBoxLoader color="#36d7b7" />
    </div>
  );
};
