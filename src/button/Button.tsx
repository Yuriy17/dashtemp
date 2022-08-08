import styles from './Button.module.css'

interface IProps {
  onClick: () => void
  disabled: boolean
  children: JSX.Element | JSX.Element[] | string
}
export const Button = ({onClick, disabled, children}:IProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>{children}</button>
  )
}
