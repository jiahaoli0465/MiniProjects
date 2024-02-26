import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

const URL = "https://deckofcardsapi.com/api/deck";
const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(() => {
        async function getDeck() {
            const res = await axios.get(`${URL}/new/shuffle/`);
            setDeck(res.data);
        }
        getDeck();
    }   , []);

    const drawCard = async () => {
        try {
            const res = await axios.get(`${URL}/${deck.deck_id}/draw/`);
            if (res.data.remaining === 0) {
                throw new Error("No cards remaining!");
            }
            const card = res.data.cards[0];
            setDrawn(d => [
                ...d,
                {
                    id: card.code,
                    name: `${card.value} of ${card.suit}`,
                    image: card.image
                }
            ]);
        } catch (e) {
            alert(e);
        }
    }

    const shuffleDeck = async () => {
        setIsShuffling(true);
        try {
            await axios.get(`${URL}/${deck.deck_id}/shuffle/`);
            setDrawn([]);
        } catch (e) {
            alert(e);
        } finally {
            setIsShuffling(false);
        }
    }

    const renderDrawBtnIfOk = () => {
        return (
            <button onClick={drawCard} disabled={isShuffling}>
                Draw a card!
            </button>
        )
    }

    return (
        <div className="Deck">
            {deck ? (
                <button onClick={shuffleDeck} disabled={isShuffling}>
                    Shuffle deck
                </button>
            ) : null}
            {renderDrawBtnIfOk()}

            <div style={{marginTop: "100px"}} >
                {drawn.map(c => (
                    <Card key={c.id} name={c.name} image={c.image} />
                ))}
            </div>
        </div>
    )

}

export default Deck