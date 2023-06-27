import style from './TasksList.module.css';
import { ITask } from '@/stores/TaskStore';
import Task from '../Task/Task';

interface TasksListProps {
  tasks: ITask[],
};

const TasksList: React.FC<TasksListProps> = ({ tasks }) => {
  return (
    <ul className={ style.list }>
      { tasks.length > 0 ? (
        tasks.map((task: ITask) => <Task key={ task.id } task={ task } />)
      ) : (
        <li className={ style.noTask }>You do not have any tasks yet</li>
      ) }
    </ul>
  )
};

export default TasksList;