import { useState, useEffect, createRef } from 'react';
import Card from './components/Card';

const App = () => {
  const cardIds = [0, 1, 2, 3];
  const [unclickedCardIds, setUnclickedCardIds] = useState(cardIds);
  const refs = cardIds.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (unclickedCardIds.length > 0 && (unclickedCardIds.length < cardIds.length)) {
      // scroll to highest unclicked
      const highestId = Math.min(...unclickedCardIds)
      refs[highestId].current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }, [cardIds.length, refs, unclickedCardIds]);

  return (
    <div>
      <header></header>
      {cardIds.map((cardId) => (
        <Card
          key={cardId}
          cardId={cardId}
          unclickedCardIds={unclickedCardIds}
          setUnclickedCardIds={setUnclickedCardIds}
          ref={refs[cardId]}
        />
      ))}
    </div>
  );
};

export default App;
