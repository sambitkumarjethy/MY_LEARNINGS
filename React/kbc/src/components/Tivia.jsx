import { useEffect, useState } from "react";
export default function Tivia(
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber
) {
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    // console.log("rest", data.data, questionNumber);
    setQuestion(data.data[1 - 1]);
  }, [data, questionNumber]);
  console.log("rest", questionNumber);

  const handleClick = () => {};
  return (
    <div className="trivia">
      <div className="qustion">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className="answer" onCLick={handleClick}>
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
