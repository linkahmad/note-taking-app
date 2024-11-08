<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Note;

class NoteSeeder extends Seeder
{
    public function run()
    {
        Note::create(['title' => 'Sample Note', 'content' => 'This is a sample note.']);
        Note::create(['title' => 'Another Note', 'content' => 'This is another sample note.']);
    }
}
