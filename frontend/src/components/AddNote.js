// src/components/AddNote.js

import React, { useState } from 'react';
import { TextField, Button, Box, FormHelperText, FormControl } from '@mui/material';

const AddNote = ({ onAdd }) => {
    const [note, setNote] = useState({ title: '', content: '' });
    const [errors, setErrors] = useState({ title: '', content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({ title: '', content: '' });

        // Simple validation
        let isValid = true;
        if (!note.title) {
            setErrors(prevErrors => ({ ...prevErrors, title: 'Title is required' }));
            isValid = false;
        }
        if (!note.content) {
            setErrors(prevErrors => ({ ...prevErrors, content: 'Content is required' }));
            isValid = false;
        }

        if (isValid) {
            onAdd(note);
            setNote({ title: '', content: '' }); // reset input fields
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: '20px' }}>
            <FormControl fullWidth error={!!errors.title} style={{ marginBottom: '10px' }}>
                <TextField
                    label="Title"
                    variant="outlined"
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
                {errors.title && <FormHelperText>{errors.title}</FormHelperText>}
            </FormControl>
            
            <FormControl fullWidth error={!!errors.content} style={{ marginBottom: '10px' }}>
                <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
                {errors.content && <FormHelperText>{errors.content}</FormHelperText>}
            </FormControl>

            <Button variant="contained" color="primary" type="submit">
                Add Note
            </Button>
        </Box>
    );
};

export default AddNote;
