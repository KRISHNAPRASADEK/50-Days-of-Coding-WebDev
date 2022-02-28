import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  useRecoilState,
  selector,
  useRecoilValue,
} from "recoil";

function Main() {
  return (
    <div>
      <RecoilRoot>
        <h1>Char Counter</h1>
        <CharCount />
        <br />
        <br />
        <GetCharValue />
      </RecoilRoot>
    </div>
  );
}

const charAtom = atom({
  key: "charState",
  default: 0,
});

function CharCount() {
  const [text, setText] = useRecoilState(charAtom);
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
}

function GetCharValue() {
  const [text, setText] = useRecoilState(charAtom);
  return (
    <div>
      <h1>{text}</h1>
      <h3>{useRecoilValue(CharValueSelector)}</h3>
    </div>
  );
}

const CharValueSelector = selector({
  key: "CharValueSelector",
  get: ({ get }) => {
    const text = get(charAtom);
    return text.length;
  },
});

export default Main;
