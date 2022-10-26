import Card from "./components/Card"

const App = () => {
  const cardIds = [0, 1, 2, 3]

  return (
    <div>
      {cardIds.map(cardId => (
        <Card key={cardId} cardId={cardId} />
      ))}
    </div>
  );
}

export default App;
