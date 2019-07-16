

const generateGamePassage = () => {
  const passage1 = "The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts.";
  const passage2 = "Those poems reflected the perplexed struggle for supremacy between the two grand elements of our language.";
  const passage3 = "The only people for me are the mad ones, the ones who are mad to live, mad to talk.";

  // const passage1 = "The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.";
  // const passage2 = "Those poems reflected the perplexed struggle for supremacy between the two grand elements of our language, which marked the twelfth and thirteenth centuries; a struggle intimately associated with the political relations between the conquering Normans and the subjugated Anglo-Saxons.";
  // const passage3 = "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.";
  // const passage4 = “Atticus said to Jem one day, “I’d rather you shot at tin cans in the backyard, but I know you’ll go after birds. Shoot all the blue jays you want, if you can hit ‘em, but remember it’s a sin to kill a mockingbird.” That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. “Your father’s right,” she said. “Mockingbirds don’t do one thing except make music for us to enjoy. They don’t eat up people’s gardens, don’t nest in corn cribs, they don’t do one thing but sing their hearts out for us. That’s why it’s a sin to kill a mockingbird.”;
  // const passage5 = “The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them — words shrink things that seemed limitless when they were in your head to no more than living size when they’re brought out. But it’s more than that, isn’t it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you’ve said at all, or why you thought it was so important that you almost cried while you were saying it. That’s the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.”;
  // const passage6 = "There, right there is the difference between the heroes and the nobodies. The difference between people like you and people like me. People like me know that there is no magic. There is only the grind. Work looks like magic to those unwilling to do it. You say you’re not a hero? Heroes aren’t born. You just go out there and grind it out. You fail and you look foolish and you just keep grinding. There is nothing else. There is no ‘chosen one,’ there is no destiny, nobody wakes up one day and finds out they’re amazing at something. There’s just slamming your head into the wall, refusing to take no for an answer. Being relentless, until either the wall or your head breaks. You want to be a hero? You don’t have to make some grand decision. There’s no inspirational music, there’s no montage. You just don’t quit.";
  // const passage7 = "Object-oriented programming is a programming paradigm that privileges objects rather than actions and data rather than functions or logic. Adherents to OOP conceive of a program as a society of objects that receive messages that they then use to perform their own discrete operations. Objects typically contain data in fields known as attributes and a set of associated methods that may access and manipulate these attributes.";

  
  const passages = [passage1, passage2, passage3];

  return passages[Math.floor(Math.random() * passages.length)];
}

export default generateGamePassage;
