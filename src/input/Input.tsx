import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'
interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string
    onChange: (e:any) => void
    type: string
    valid?: boolean
}
export const Input = ({value,onChange, type,valid, ...rest}:IProps) => {
    return (
      <label className={styles.label}>
          <input
            className={`${styles.input}`}
            type={type}
            value={value}
            onChange={onChange}
            {...rest}
          />
          {valid && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0004 0.518555C18.3416 0.518555
              23.4814 5.65884 23.4814 11.9996C23.4814 18.3407 18.3412 23.4806 12.0004 23.4806C5.6593
              23.4806 0.51944 18.3403 0.51944 11.9996C0.51944 5.65841 5.65973 0.518555 12.0004 0.518555ZM6.31672
              12.1496C5.89267 11.6808 5.92934 10.9573 6.39742 10.5339C6.86619 10.1098 7.5897 10.1465 8.01309 10.6146L10.8729
              13.7746L17.0529 7.39103C17.4942 6.93735 18.2193 6.92732 18.673 7.36877C19.1267 7.81007 19.1367 8.53512 18.6953
              8.98881L11.6671 16.2484L11.6656 16.2469C11.649 16.2641 11.6311 16.2814 11.613 16.2973C11.1449 16.7213 10.4214 16.6853
               9.99736 16.2166L6.31602 12.1493L6.31672 12.1496Z" fill="#D416B9"/>
          </svg>}
      </label>

    )
}
