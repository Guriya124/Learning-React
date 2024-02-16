import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";



export default function App() {
    return (
        <div>
            <Header />
            {notes.map(notesItem => (
                <Note
                    key={notesItem.key}
                    title={notesItem.title}
                    content={notesItem.content}
                />
            ))}
            <Footer />

        </div>


    );
};