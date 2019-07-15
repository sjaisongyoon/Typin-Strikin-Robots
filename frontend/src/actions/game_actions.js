export const RECEIVE_PASSAGE = 'RECEIVE_PASSAGE';
export const SET_GAME_TIME = 'SET_GAME_TIME'

const receivePassage = passage => ({
    type: RECEIVE_PASSAGE,
    passage
});

export const setGameTime = time => ({
    type: SET_GAME_TIME,
    time
})

const passage1 = "The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty."
const passage2 = "Those poems reflected the perplexed struggle for supremacy between the two grand elements of our language, which marked the twelfth and thirteenth centuries; a struggle intimately associated with the political relations between the conquering Normans and the subjugated Anglo-Saxons."
const passage3 = "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars."

const passages = [passage1, passage2, passage3]

export const fetchPassage = () => dispatch => {
    const passage = passages[Math.floor(Math.random() * passages.length)]
    return dispatch(receivePassage(passage))
};

export const randomPassage = () => (
    passages[Math.floor(Math.random() * passages.length)]
)