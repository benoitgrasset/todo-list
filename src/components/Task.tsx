import styles from '@/styles/Home.module.css';
import { Todo } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';
import CheckIcon from './CheckIcon';
import TrashIcon from './TrashIcon';

type Props = {
  todo: Todo;
  handleClickRemove: () => void;
  handleClickValidate: () => void;
};

const Task: FC<Props> = ({ todo, handleClickValidate, handleClickRemove }) => {
  const { text, state } = todo;
  const isValidated = state === 'DONE';
  return (
    <div className={clsx(styles.card, { [styles.validated]: isValidated })}>
      <span>{text}</span>
      <div className={styles.buttonWrapper}>
        <button onClick={handleClickValidate}>
          <CheckIcon color={isValidated ? 'grey' : 'green'} />
        </button>
        <button onClick={handleClickRemove}>
          <TrashIcon color={'red'} />
        </button>
      </div>
    </div>
  );
};

export default Task;
