import { useState } from "react";

export function QuizBlock({ week, monthColor, quizState, onSubmit }) {
  const { quiz, title, week: weekNum } = week;
  const color = monthColor;
  const alreadySubmitted = quizState?.submitted;

  const [selected, setSelected] = useState(
    alreadySubmitted ? (quizState.answers || {}) : {}
  );
  const [submitted, setSubmitted] = useState(alreadySubmitted);

  const allAnswered = quiz.every((_, i) => selected[i] !== undefined);

  const handleSelect = (qi, oi) => {
    if (submitted) return;
    setSelected((p) => ({ ...p, [qi]: oi }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit(selected);
  };

  const correctCount = quiz.filter((q, i) => q.options[selected[i]]?.isCorrect).length;

  return (
    <div className="quiz-block" style={{ borderColor: `${color}30` }}>
      <div className="quiz-block-header">
        <div className="quiz-block-eyebrow" style={{ color }}>
          Knowledge check · W{weekNum}: {title}
        </div>
        <div className="quiz-block-title">Scenario-based question</div>
        {submitted && (
          <div
            className="quiz-score-badge"
            style={{ background: correctCount === quiz.length ? "var(--green)" : color }}
          >
            {correctCount}/{quiz.length} correct
          </div>
        )}
      </div>

      <div className="quiz-questions">
        {quiz.map((q, qi) => {
          const picked = selected[qi];
          const isCorrect = picked !== undefined && q.options[picked]?.isCorrect;
          const showResult = submitted && picked !== undefined;

          return (
            <div key={qi} className="quiz-question">
              <div className="quiz-q-num" style={{ color }}>Q{qi + 1}</div>
              <div className="quiz-q-text">{q.question}</div>
              <div className="quiz-options">
                {q.options.map((opt, oi) => {
                  let cls = "quiz-option";
                  if (picked === oi) cls += " quiz-option-selected";
                  if (showResult && opt.isCorrect) cls += " quiz-option-correct";
                  if (showResult && picked === oi && !opt.isCorrect) cls += " quiz-option-wrong";

                  return (
                    <button
                      key={oi}
                      className={cls}
                      onClick={() => handleSelect(qi, oi)}
                      disabled={submitted}
                    >
                      <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                      <span className="quiz-option-text">{opt.text}</span>
                      {showResult && opt.isCorrect && <span className="quiz-check">✓</span>}
                      {showResult && picked === oi && !opt.isCorrect && <span className="quiz-cross">✗</span>}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="quiz-rationale">
                  <span className="quiz-rationale-label">Why: </span>
                  {q.rationale}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button
          className="quiz-submit-btn"
          style={{ background: allAnswered ? color : undefined }}
          disabled={!allAnswered}
          onClick={handleSubmit}
        >
          {allAnswered ? "Check answer" : "Select an answer to submit"}
        </button>
      )}

      {submitted && correctCount < quiz.length && (
        <div className="quiz-retry-note">
          Review the rationale above, then revisit the week's reading before moving on.
        </div>
      )}
      {submitted && correctCount === quiz.length && (
        <div className="quiz-pass-note" style={{ color }}>
          Correct — well done.
        </div>
      )}
    </div>
  );
}
