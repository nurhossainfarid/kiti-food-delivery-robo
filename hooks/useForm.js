import { useState } from "react";
import { deepClone, isObjectEmpty } from "../utils/object-utils";

const useForm = ({ init, validate }) => {
    const [state, setState] = useState(mapValuesToState(init))
    const handleSubmit = (e, cb) => {
        e.preventDefault();
        const {hasError, errors, values} = getError()
        cb({
            hasError,
            errors,
            values,
            touch: mapStateToKeys(state, 'touch'),
            focus: mapStateToKeys(state, 'focus')
        })
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const oldState = deepClone(state);
        
        if (type === 'checkbox') {
            oldState[name].value = checked;
        } else {
            oldState[name].value = value;
        }
        const { errors } = getError();
        if (errors[name]) {
            oldState[name].error = errors[name];
        } else {
            oldState[name].error = '';
        }

        setState(oldState)
    }

    const handleFocus = (e) => {
        const { name } = e.target;

        const oldState = deepClone(state);
        oldState[name].focus = true;
        if (!oldState[name].touch) {
            oldState[name].touch = true;
        } 
        setState(oldState)
    }

    const handleBlur = (e) => {
        const { name } = e.target;
        const  {errors} = getError();
        const oldState = deepClone(state);

        if (oldState[name].touch && errors[name]) {
            oldState[name].error = errors[name];
        } else {
            oldState[name].error = ''
        }
        oldState[name].focus = false;
        setState(oldState)
    }

    const getError = () => {
        let hasError = null;
        let errors = null;
        const values = mapStateToKeys(state, 'value')
        if (typeof validate === 'boolean') {
            hasError = validate;
            errors = mapStateToKeys(state, 'error');
        } else if (typeof validate === 'function') {
            const errorFormCb = validate(values)
            hasError = !isObjectEmpty(errorFormCb);
            errors = errorFormCb;
        } else {
            throw new Error('validate property must be boolean or function')
        }
        return {
            hasError,
            errors,
            values
        }
    }

    const clear = () => {
        const newState = mapValuesToState(state, true)
        setState(newState)
    }

    return {
        state,
        handleSubmit,
        handleChange, 
        handleFocus,
        handleBlur,
        clear
    }
}

const mapValuesToState = (values, shouldClear = false) => {
    return Object.keys(values).reduce((acc, key) => {
        acc[key] = {
            value: !shouldClear ? values[key] : '',
            error: '',
            focus: false,
            touch: false
        }
        return acc;
    }, {})
}

const mapStateToKeys = (state, key) => {
    return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = state[cur][key];
        return acc;
    }, {})
}

export default useForm;