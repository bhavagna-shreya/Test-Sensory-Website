import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Define the Card interface
interface Card {
  id: number;
  value: string;
  matched: boolean;
}

const cardValues = ['🍎', '🍌', '🍇', '🍉'];

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(shuffleCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  // Shuffle and initialize card values
  function shuffleCards(): Card[] {
    const initialCards: Card[] = cardValues.flatMap((value, index) => [
      { id: index * 2, value, matched: false },
      { id: index * 2 + 1, value, matched: false },
    ]);
    return initialCards.sort(() => Math.random() - 0.5);
  }

  // Handle card click
  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || matchedCards.includes(index) || cards[index].matched) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      checkMatch(newFlipped);
    }
  };

  // Check if two flipped cards match
  const checkMatch = (flipped: number[]) => {
    const [first, second] = flipped;
    if (cards[first].value === cards[second].value) {
      setMatchedCards((prev) => [...prev, first, second]);
      setCards((prev) =>
        prev.map((card) =>
          card.id === first || card.id === second ? { ...card, matched: true } : card
        )
      );
    }
    setTimeout(() => setFlippedCards([]), 1000);
  };

  // Reset the game
  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Memory Game</h2>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            index={index}
            card={card}
            flipped={flippedCards.includes(index) || card.matched}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
      >
        Reset Game
      </button>
    </div>
  );
};

interface CardComponentProps {
  index: number;
  card: Card;
  flipped: boolean;
  onClick: (index: number) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ index, card, flipped, onClick }) => {
  const springProps = useSpring({
    opacity: flipped ? 1 : 0.5,
    transform: flipped ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <animated.div
      onClick={() => onClick(index)}
      style={springProps}
      className={`w-16 h-16 flex items-center justify-center border rounded-md cursor-pointer transition-transform duration-300 ${
        flipped ? 'bg-green-200' : 'bg-gray-400'
      }`}
    >
      {flipped && <span className="text-xl">{card.value}</span>}
    </animated.div>
  );
};

export default MemoryGame;
