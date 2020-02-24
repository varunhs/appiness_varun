import { toast } from 'react-toastify';

export const toaster = (toastType, message) => {
    switch (toastType) {
        case 'success':
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
            });
            break;
        case 'error':
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
            break;
        case 'warn':
            toast.warn(message, {
                position: toast.POSITION.TOP_CENTER
            });
            break;
        case 'info':
            toast.info(message, {
                position: toast.POSITION.TOP_CENTER
            });
        default: { }
    }
};