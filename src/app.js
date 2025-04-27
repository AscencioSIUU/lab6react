const { useState, useEffect } = React;

function Memory() {
     const initialCards = [
          './assets/andy.jpg',
          './assets/andy.jpg',
          './assets/carlos.jpg',
          './assets/carlos.jpg',
          './assets/fererer.jpg',
          './assets/fererer.jpg',
          './assets/novak.jpg',
          './assets/novak.jpg',
          './assets/rafa.jpg',
          './assets/rafa.jpg',
          './assets/serena.jpg',
          './assets/serena.jpg'
     ]
     const [cards, setCards] = useState([]);
     const [flipped, setFlipped] = useState([]);
     const [matched, setMatched] = useState([]);
     const [moves, setMoves] = useState(0);
     const [gameOver, setGameOver] = useState(false);

     function shuffleCards() {
          const shuffled = [...initialCards.sort(() => Math.random() - 0.5)];
          setCards(shuffled);
          setMoves(0);
          setFlipped([]);
          setMatched([]);
          setGameOver(false);
     }
     function handleClick() {
          if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
               return;
          }
          const newFlipped = [...flipped, index];
          setFlipped(newFlipped);
          if (newFlipped.length === 2) {
               setMoves(prev => prev + 1);
               const [firstIndex, secondIndex] = newFlipped;
               if (cards[firstIndex] === cards[secondIndex]) {
                    setMatched(prev => [...prev, firstIndex, secondIndex]);
                    setFlipped([]);
               } else {
                    setTimeout(() => {
                         setFlipped([]);
                    }, 1000);
               }
          }
     }
     useEffect(() => {
          if (matched.length === cards.length && cards.length > 0) {
               setGameOver(true);
          }
     }, [matched, cards]);
     return (
          <div className="memory-game">
               <h1>Juego de Memoria</h1>
               <p>Movimientos: {moves}</p>
               <div className="grid">
                    {cards.map((card, index) => (
                         <div
                              key={index}
                              className={`card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
                              onClick={() => handleClick(index)}
                         >
                              <div className="card-inner">
                                   <div className="card-front">❓</div>
                                   <div className="card-back">
                                        <img src={card} alt="carta" />
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>

               {gameOver && <p className="win-message">¡Juego Completado!</p>}

               <button onClick={shuffleCards}>Reiniciar Juego</button>
          </div>
     );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Memory />);