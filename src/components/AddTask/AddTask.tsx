'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from '@/app/RootProvider';


import Popup from '../Popup/Popup';
import style from './AddTask.module.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

const AddTask: React.FC = observer(() => {
  const router = useRouter();
  const rootStore = useContext(RootStoreContext);
  const { taskStore } = rootStore;

  const [open, setOpen] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskStore.addTask(taskName);
    setOpen(false);
    router.refresh();
  };

  return (
    <>
      <button
        type="button"
        className={ style.btn }
        onClick={ () => setOpen(true) }
      >
        Add new Task +
      </button>

      <Popup title='Add new task' open={ open } setOpen={ setOpen }>
        <Form nameBtn='Add' onSubmit={ addTaskHandler }>
          <Input
            id='inputAddTask'
            className={ style.input }
            value={ taskName }
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value) }
          />
        </Form>
      </Popup>
    </>
  )
});

export default AddTask;