import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CustomizedSnackbars from '../Snackbar';
import { TGlobalSnackbarProps } from '../../../utils/types';

function GlobalSnackbar({ children }: TGlobalSnackbarProps) {
    const { error } = useSelector((state: RootState) => state.talent);

    const [snackbarsType, setSnackbarsType] = useState("success");

    useEffect(() => {
        if (!error) {
            setSnackbarsType("success");
        } else if (error) {
            setSnackbarsType('error');
        }
    }, [error]);

    return (
        <div>
            {children}
            <CustomizedSnackbars tipo={snackbarsType} error={(error)} />
        </div>
    );
}

export default GlobalSnackbar;