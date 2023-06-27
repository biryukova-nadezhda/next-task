/* import style from './Form.module.css';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from '@/app/RootProvider';

interface FormProps {
  setOpen: (open: boolean) => void | boolean,
}

const Form: React.FC<FormProps> = observer(({ setOpen }) => {
  const [titleTask, setTitleTask] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  
  const router = useRouter();

  const rootStore = useContext(RootStoreContext);
  const { taskStore } = rootStore;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskStore.addTask(titleTask);
    setTitleTask('');
    setOpen(false);
    setDisabled(true);
    router.refresh();
  };

  return (
    <form className={ style.form } onSubmit={ (e) => submitHandler(e) }>
      <label className={ style.label }>
        <input
          type="text"
          className={ style.input }
          value={ titleTask }
          onChange={ (e: ChangeEvent<HTMLInputElement>) => setTitleTask(e.target.value)} />
      </label>

      <button
        type="submit"
        className={ style.btn }
      >
        Add Task
      </button>
    </form>
  );
});

export default Form; */

/* import { ChangeEvent, useState } from 'react'; */
import Button from '../Button/Button';
import style from './Form.module.css';

interface FormProps {
  children: React.ReactNode,
  nameBtn: string,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
};

const Form: React.FC<FormProps> = ({ children, nameBtn, onSubmit }) => {

  return (
    <form className={ style.form } onSubmit={ (e) =>onSubmit(e) }>
      { children }
      <Button typeBtn='submit' classBtn={ style.btn }>{ nameBtn }</Button>
    </form>
  )
};

export default Form;