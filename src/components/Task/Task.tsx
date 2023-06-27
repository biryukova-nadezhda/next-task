'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from '@/app/RootProvider';

import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import style from './Task.module.css';
import { ITask } from '@/stores/TaskStore';
import Form from '../Form/Form';
import Input from '../Input/Input';

interface TaskProps {
  task: ITask
};

const Task: React.FC<TaskProps> = observer(({ task }) => {
  const router = useRouter();
  const rootStore = useContext(RootStoreContext);
  const { taskStore } = rootStore;

  const [ editOpen, setEditOpen ] = useState<boolean>(false); 
  const [ deleteOpen, setDeleteOpen ] = useState<boolean>(false); 
  const [ editTaskValue, setEditTaskValue ] = useState<string>(task.title);

  const editHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskStore.editTaskAction({
      id: task.id,
      title: editTaskValue,
      completed: task.completed,
    });
    setEditOpen(false);
    router.refresh();
  };

  const deleteHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskStore.deleteTaskAction(task.id);
    setDeleteOpen(false);
    router.refresh();
  };


  return (
    <li className={ style.task }>
      <p className={ style.description }>{ task.title }</p>

      <div className={ style.wrapperBtn }>
        <Button typeBtn='button' classBtn={ style.btn } onClick={ () => setEditOpen(true) }>Edit</Button>
        <Popup title='Edit Task' open={ editOpen } setOpen={ setEditOpen }>
          <Form nameBtn='Edit' onSubmit={ editHandler }>
          <Input
            id='inputAddTask'
            className={ style.input }
            value={ editTaskValue }
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setEditTaskValue(e.target.value) }
          />
          </Form>
        </Popup>

        <Button typeBtn='button' classBtn={ style.btn } onClick={ () => setDeleteOpen(true) }>Delete</Button>
        <Popup title='Delete Task' open={ deleteOpen } setOpen={ setDeleteOpen }>
          <Form nameBtn='Delete' onSubmit={ deleteHandler }>
            <p className={ style.deleteTaskDescr }>Are you sure you want to delete the task &quot;{task.title}&quot; ?</p>
          </Form>
        </Popup>
      </div>
    </li>
  )
});

export default Task;