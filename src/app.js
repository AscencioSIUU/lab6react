const { useState, useEffect } = React;

function Memory() {
     return (
          <div className="game-container">
               <h1>Juego de memoria</h1>
               <div className="grid">
                    Tarjetas
               </div>
          </div>
     );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Memory />);