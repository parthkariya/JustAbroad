// DragAndDropComponent.js
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  CARD: "card",
};

const Card = ({ id, text, index, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        marginBottom: "4px",
        opacity: isDragging ? 0.5 : 1,
      }}>
      {text}
    </div>
  );
};

const DragAndDropComponent = () => {
  const [box1, setBox1] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const [box2, setBox2] = useState([]);

  const moveCard = (fromBox, toBox, fromIndex, toIndex) => {
    const updatedFromBox = [...fromBox];
    const updatedToBox = [...toBox];
    const [movedCard] = updatedFromBox.splice(fromIndex, 1);
    updatedToBox.splice(toIndex, 0, movedCard);

    setBox1(updatedFromBox);
    setBox2(updatedToBox);
  };

  const [{ isOver: isOver1 }, drop1] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      if (monitor.isOver({ shallow: true })) {
        moveCard(box2, box1, item.index, box1.length);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isOver2 }, drop2] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      if (monitor.isOver({ shallow: true })) {
        moveCard(box1, box2, item.index, box2.length);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div ref={drop1} style={{ border: "1px dashed #ccc", padding: "8px" }}>
          <h2>Box 1</h2>
          {box1.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              text={card.text}
              index={index}
              moveCard={(fromIndex, toIndex) =>
                moveCard(box1, box2, fromIndex, toIndex)
              }
            />
          ))}
        </div>
        <div ref={drop2} style={{ border: "1px dashed #ccc", padding: "8px" }}>
          <h2>Box 2</h2>
          {box2.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              text={card.text}
              index={index}
              moveCard={(fromIndex, toIndex) =>
                moveCard(box2, box1, fromIndex, toIndex)
              }
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DragAndDropComponent;
