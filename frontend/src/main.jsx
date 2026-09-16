import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>Sistema de Gestión de Tareas</h1>
      <p>Frontend funcionando correctamente.</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
