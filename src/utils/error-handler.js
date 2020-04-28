import dotProp from 'dot-prop';
import { showError } from './toast';
const GENERIC_ERROR = 'Something went wrong';
const EXCEPTION = 'Error Creating accountjava.lang.RuntimeException:';

export const getError = error => {
    if (!error) {
        return GENERIC_ERROR;
    }
    const message = dotProp.get(error, 'response.data.message');

    if (!message) {
        return GENERIC_ERROR;
    }

    if (message.indexOf(EXCEPTION) > -1) {
        return message.replace(EXCEPTION, '');
    }

    const exception = message.split(':');
    if (exception.length > 1) {
        showError(exception[1]);
    } else if (exception.length === 1) {
        showError(exception[0]);
    }

    if (exception) {
        return exception[1];
    }

    return message;
};
