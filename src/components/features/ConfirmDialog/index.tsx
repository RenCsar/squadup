import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import React from 'react';
import { TOptionsConfirmDialogProps } from '../../../utils/types';

export const ConfirmDialog: React.FC<TOptionsConfirmDialogProps> = ({ confirmDialog, setConfirmDialog }: TOptionsConfirmDialogProps) => {

    return (
        <Dialog
            open={confirmDialog.isOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                "& .MuiPaper-root": {
                    padding: "10px",
                    background: "var(--bg-body)"
                }
            }}
        >
            <DialogTitle id="alert-dialog-title"
                sx={{
                    textAlign: "center",
                }}
            >
                Confirmar Exclusão
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {confirmDialog.title}
                </DialogContentText>
            </DialogContent>
            <DialogActions
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <Button color='primary' variant="contained" onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>Cancelar</Button>
                <Button color='error' onClick={confirmDialog.onConfirm} autoFocus variant="contained">
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
}