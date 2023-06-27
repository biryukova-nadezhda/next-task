import classNames from 'classnames';
import style from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode,
  className?: string,
};

const Container : React.FC<ContainerProps> = ({ children, className }) => {
  return (
      <div className={ classNames(style.container, className) }>
        { children }
      </div>
  );
};

export default Container;