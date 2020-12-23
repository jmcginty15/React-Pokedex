function shuffle(cards) {
    for (let i = cards.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * cards.length);
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}

export { shuffle };