import classNames from 'classnames';
import style from './Button.module.css';

type ButtonType = 'submit' | 'button' | 'reset';

interface ButtonProps {
  typeBtn: ButtonType,
  classBtn: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
};

const Button: React.FC<ButtonProps> = ({ typeBtn='button', classBtn, onClick, children }) => {
  const classes = classNames(
    style.btn,
    classBtn
  )
  return (
    <button
      type={ typeBtn }
      className={ classes }
      onClick={ onClick ? (e) => onClick(e) : undefined }
    >
      { children }
    </button>
  )
};

export default Button;