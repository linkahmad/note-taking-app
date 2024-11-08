// src/components/NoteCard.js

import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteCard = ({ note, onDelete }) => {
    return (
        <Card style={{ margin: '10px', width: '300px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {note.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {note.content}
                </Typography>
                <Button
                    variant="contained"
                    color="error"
                    style={{ marginTop: '10px' }}
                    onClick={() => onDelete(note.id)}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
};

export default NoteCard;
