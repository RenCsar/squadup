import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CustomizedSnackbars from '../Snackbar';
import { TGlobalSnackbarProps } from '../../../types/types';

function GlobalSnackbar({ children }: TGlobalSnackbarProps) {
    const { error, message } = useSelector((state: RootState) => state.talent);

    const [snackbarsType, setSnackbarsType] = useState("success");

    useEffect(() => {
        if (message != null && error == null) {
            setSnackbarsType("success");
        } else if (error != null && message == null) {
            setSnackbarsType('error');
        }
    }, [error, message]);

    return (
        <div>
            {children}
            <CustomizedSnackbars tipo={snackbarsType} error={error} message={message} />
        </div>
    );
}

export default GlobalSnackbar;