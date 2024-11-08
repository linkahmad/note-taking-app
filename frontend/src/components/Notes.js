// src/components/Notes.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import AddNote from './AddNote';
import { Container, Grid } from '@mui/material';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch notes from the API
        axios.get('http://127.0.0.1:8000/api/notes')
            .then(response => setNotes(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleAddNote = (newNote) => {
        axios.post('http://127.0.0.1:8000/api/notes', newNote)
            .then(response => {
                setNotes([...notes, response.data]); // Add the new note to the list
            })
            .catch(error => console.log(error));
    };

    const handleDeleteNote = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/notes/${id}`)
            .then(() => {
                setNotes(notes.filter(note => note.id !== id)); // Remove the deleted note from the list
            })
            .catch(error => console.log(error));
    };

    return (
        <Container>
            <h1>Notes</h1>
            {/* Add new note */}
            <AddNote onAdd={handleAddNote} />

            {/* Display list of notes */}
            <Grid container spacing={2}>
                {notes.map(note => (
                    <Grid item key={note.id}>
                        <NoteCard note={note} onDelete={handleDeleteNote} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Notes;
