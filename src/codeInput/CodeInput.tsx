import ReactCodeInput from "react-verification-code-input";
import styles from './CodeInput.module.css'
import React, {useRef, useState} from "react";

interface IProps {
    test: (val:string) => void
    value: string[]
}

export const CodeInput = ({test, value}: IProps) => {


    return (
        <ReactCodeInput
            className={styles.temp}
            onChange={test}
            type="number"
            placeholder={['_']}
            values={value}
            required={true}
            autoFocus
            fields={6} />
    )
}