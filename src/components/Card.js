import { forwardRef } from "react";

const Card = ({cardId, unclickedCardIds, setUnclickedCardIds}, ref) => {
    
    const handleClick = () => {
        setUnclickedCardIds(unclickedCardIds.filter(id => id !== cardId))
    }
    
    return (
      <article ref={ref} className="card" onClick={handleClick}>
        {cardId}
      </article>
    );
  }
  
  export default forwardRef(Card);
  