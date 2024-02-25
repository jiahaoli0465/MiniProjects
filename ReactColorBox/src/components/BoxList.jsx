import React, { useState } from "react";
import Box from "./Box";
import NewBox from "./NewBox";


const BoxList = ({ box }) => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes((prevBoxes) => {
            return [...prevBoxes, newBox];
        });
    }
    const removeBox = (boxId) => {
        setBoxes((prevBoxes) => {
            return prevBoxes.filter((box) => box.id !== boxId);
        });
    }

    return (
        <div>
            <NewBox addBox={addBox} />
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    id={box.id}
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.height}
                    removeBox={removeBox}
                />
            ))}

        </div>
    )

        

};

export default BoxList;
