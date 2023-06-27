'use client';

import { useContext, useEffect } from 'react';
import { RootStoreContext } from '@/app/RootProvider';
import { observer } from 'mobx-react-lite';
import style from './Main.module.css';
import TasksList from '../TasksList/TasksList';

const Main: React.FC = observer(() => {
  const rootStore = useContext(RootStoreContext);
  const { taskStore } = rootStore;

  useEffect(() => {
    taskStore.getAllTaskAction();
  }, []);

  return (
    <main className={ style.main }>
      <TasksList tasks={ taskStore.taskList }/>
    </main>
  )
});

export default Main;