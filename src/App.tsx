import { useState } from "react";
import ImageHandlingSection from "./sections/ImageHandling/ImageHandling";
import MenuBarComponent from "./components/MenuBar/MenuBar";
import ExtractedTextSection from "./sections/ExtractedText/ExtractedText";

function App() {
  const [text, setText] = useState("");

  return (

    <div className="container">

      <MenuBarComponent />

      <main>
        <ImageHandlingSection setText={setText} />
        <ExtractedTextSection text={text} setText={setText} />
      </main>

      <footer>
        <p>Developed by <a href="https://github.com/Lucas-Granucci">Lucas Granucci</a></p>
      </footer>
    </div>

  )
}

export default App
