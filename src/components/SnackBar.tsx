import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Alert } from '@mui/material';

// Función para la transición de deslizamiento
function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

// Definimos las props que recibirá TransitionsSnackbar
interface SnackbarProps {
    open: boolean;
    handleClose: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Transition?: React.ComponentType<TransitionProps & { children: React.ReactElement<any, any>; }>;
}

export default function TransitionsSnackbar({ open, handleClose }: SnackbarProps) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            autoHideDuration={3000}  // Oculta el snackbar después de 1200ms
        >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Gracias por su mensaje, nos contactaremos con usted a la brevedad.
            </Alert>
        </Snackbar>
    );
}
