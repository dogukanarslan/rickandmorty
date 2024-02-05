import { useRouter } from 'next/router';
import Button from './Button';
import styles from '../styles/PaginationButtons.module.css';

const PaginationButtons = (props) => {
  const { changePage, currentPage } = props;

  return (
    <div className={styles.wrapper}>
      <Button label="&#9198;" onClick={() => changePage('prev')} />
      <h1 className={styles.title}>{currentPage}</h1>
      <Button label="&#9197;" onClick={() => changePage('next')} />
    </div>
  );
};

export default PaginationButtons;
