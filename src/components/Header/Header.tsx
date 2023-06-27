import AddTask from '../AddTask/AddTask';
import style from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={ style.header }>
      <h1 className={ style.title }>ToDoS - your personal helpers!</h1>
      <AddTask />
    </header>
  )
};

export default Header;