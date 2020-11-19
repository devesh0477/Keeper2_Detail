import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NotesData from "../notes";

function App() {
  return (
    <div>
      <Header />
      {NotesData.map((Data) => (
        <Note key={Data.id} a={Data.title} b={Data.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
