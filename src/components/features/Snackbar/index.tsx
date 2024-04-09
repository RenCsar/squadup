import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import { CustomizedSnackbarsProps, TransitionProps } from '../../../types/types';
import { Store } from '../../../store/store';
import { fetchAllTalents, limparError, limparMessage } from '../../../store/reducers/talent.Slice';
import { setEmail } from '../../../store/reducers/globalStates.Slice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
}

export default function CustomizedSnackbars({ error, tipo, message }: CustomizedSnackbarsProps) {
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState<React.ComponentType<SlideProps> | undefined>(undefined);

    React.useEffect(() => {
        if (error || message) {
            setOpen(true)
            setTransition(() => TransitionRight)
        } else {
            setOpen(false)
        }
    }, [error, message])


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        if (tipo == "error") {
            Store.dispatch(fetchAllTalents({ limit: 7, offset: 0 }));
        }
        Store.dispatch(setEmail(''));
        Store.dispatch(limparError());
        Store.dispatch(limparMessage());
        tipo = null;
        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                autoHideDuration={5000}
                TransitionComponent={transition}>
                <Alert onClose={handleClose} severity={tipo == null || tipo == undefined ? undefined : tipo as AlertColor} sx={{ width: '100%', background: tipo == "error" ? "red" : "green", color: "white" }}>
                    {error ? error : message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}