import React, { useState } from "react";
import Feel3 from "./Feel3";
import SecondStage from "./SecondStage ";

export default function Feel2() {
  const questions = [
    {
      questionText:
        "אני מקבלת מבן הזוג שלי המון הודעות וטלפונים בצורה מוגזמת/אובססיבית",
      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },

    {
      questionText:
        "בן הזוג שלי חושב שאני משקיעה בעצמי יותר מידי (בעבודה, בלבוש, בלימודים, בבילויים)",

      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },

    {
      questionText:
        "בן הזוג שלי גורם לי להרגיש שאני יכולה לעשות הכל בצורה נכונה",
      answerOptions: [
        { answerText: "כן", isCorrect: false },
        { answerText: "לא ", isCorrect: true },
      ],
    },

    {
      questionText: "בן הזוג שלי לא מזלזל במה שאני מרגישה",
      answerOptions: [
        { answerText: "כן", isCorrect: false },
        { answerText: "לא ", isCorrect: true },
      ],
    },

    {
      questionText: "אני מרגישה שאני בן אדם פחות חופשי ממה שהרגשתי לפני היחסים",
      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },

    {
      questionText:
        "אני מרגישה שיש חשיבות לדעה שלי, ולרוב בן זוגי ואני מחליטים החלטות משותפות ",
      answerOptions: [
        { answerText: "כן", isCorrect: false },
        { answerText: "לא ", isCorrect: true },
      ],
    },

    {
      questionText: "בן הזוג שלי מעליב אותי",
      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },

    {
      questionText: "בן הזוג שלי יורד עליי או גורם לי להרגיש קטנה",
      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },

    {
      questionText:
        "בן הזוג שלי גורם לי להרגיש שאני לא יכולה לעשות שום דבר בצורה נכונה",
      answerOptions: [
        { answerText: "", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },
    {
      questionText: "בן זוגי אף פעם לא מעיר לי על  צורת הלבוש שלי ",
      answerOptions: [
        { answerText: "כן", isCorrect: false },
        { answerText: "לא ", isCorrect: true },
      ],
    },
    {
      questionText: "בן הזוג שלי בודק הרבה פעמים עם מי אני נפגשת או מדברת",
      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },
    {
      questionText:
        "בן זוגי מסתכל על הודעות ומיילים שלי, ולא  חוקר אותי לגביהם ",
      answerOptions: [
        { answerText: "כן", isCorrect: false },
        { answerText: "לא ", isCorrect: true },
      ],
    },
    {
      questionText: "בן הזוג מאוכזב ולא מרוצה ממני לעתים קרובות",
      answerOptions: [
        { answerText: "כן", isCorrect: true },
        { answerText: "לא ", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 40) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="container">
      <div className="app">
        {currentQuestion === 7 ? (
          <SecondStage />
        ) : showScore ? (
          <div className="score-section">
            <Feel3 props />
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(answerOption => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
