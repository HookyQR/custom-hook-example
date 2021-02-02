import { useEffect, useState } from "react";

const list = "abcde";

export const useGame = () => {
  const [word, setWord] = useState("");
  const [end, setEnd] = useState(false);

  const appendLetter = () => {
    if (end) return;
    setWord(
      (currentWord) =>
        currentWord + list[Math.floor(list.length * Math.random())]
    );
  };

  useEffect(() => {
    if (word.length >= 10) setEnd(true);
  }, [word]);

  return { word, end, appendLetter };
};
