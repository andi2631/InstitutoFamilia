import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
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
                Thank you for your message! We will get back to you soon.
            </Alert>
        </Snackbar>
    );
}
