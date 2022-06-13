import styled from "@emotion/styled";
import React from "react";

import { constants } from "./constants";

function takeRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

type Candidate = {
  lang?: string;
  cite?: string;
  content: string;
};

const candidates: Candidate[] = [
  {
    // 表示の都合
    content: "",
    cite: "",
  },
  {
    content:
      "日常にあるものについては消えてしまうまで気にかけないものである。自由はそのようなものだ。それを甘受している限り、それに気づくことはない。",
    cite: "ボリス・エリツィン",
  },
  {
    content: "奇跡に希望を委ねるな。",
    cite: "ウラジーミル・プーチン",
  },
  {
    content: "我々はあまりに多くの壁を築いてしまったが、橋はそうではない。",
    cite: "アイザック・ニュートン",
  },
  {
    content: "天才とは忍耐のことだ。",
    cite: "アイザック・ニュートン",
  },
  {
    content:
      "もし貴方が何のリスクも取らなければ、貴方は何の敗北も喫しない。しかしそうしなければ、貴方はどんな勝利も得られない。",
    cite: "リチャード・M・ニクソン",
  },
  {
    content: "理由は常に存在しているが、理想的な形態で顕われるとは限らない。",
    cite: "カール・マルクス",
  },
];

const BlockQuote = styled.blockquote`
  margin: 1rem 0;
  padding: 0.5rem;
  border-left: 0.3rem solid ${constants.ACCENT_GRAY};
`;

const render = () => {
  const quote = takeRandom(candidates);

  return (
    <figure>
      <BlockQuote>{quote.content}</BlockQuote>
      <cite>― {quote.cite || "典拠不明"}</cite>
    </figure>
  );
};

const NotFound = () => {
  return render();
};

export default NotFound;
