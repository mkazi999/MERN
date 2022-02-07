import React, {forwardRef, useState, useRef, useEffect, useCallback, useImperativeHandle} from 'react';

export const NumericCellEditor = forwardRef((props, ref) => {
    

    const [value, setValue] = useState((props.value));
    const refInput =  useRef(null);

    useImperativeHandle(ref, () => {
        return {
            // the final value to send to the grid, on completion of editing
            getValue() {
                alert(value)
                return props.value;
            }
        };
    });

    // const onKeyPressListener = (event) => {
    //     console.log()
    // }

    // const onKeyPressListener = useCallback( event => {
    //     if (!isNumeric(event.nativeEvent)) {
    //         event.preventDefault();
    //     }

    //     function isNumeric(event) {
    //         let regexp = /^\d+\.\d{0,2}$/
    //         return /\d+\.\d{0,2}$/.test(event.key);
    //     }
    // }, []);

    const onChangeListener = useCallback( event => setValue(event.target.value), []);

    // afterGuiAttached
    useEffect( ()=> refInput.current.focus(), []);

    return (
        <input 
            // onKeyPress={onKeyPressListener}
            value={value}
            onChange={onChangeListener}
            ref={refInput} 
        />
    );  
});

