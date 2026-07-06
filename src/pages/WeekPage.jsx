import { useParams, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { ALL_WEEKS, MONTHS } from "../data/curriculum.js";
import { WeekCard } from "../components/WeekCard.jsx";

export function WeekPage() {
  const { weekId } = useParams();
  const { progress, toggleReading, toggleProject, updateNote, toggleRubric, stats, submitQuiz, getQuizState } = useOutletContext();

  const weekNum = parseInt(weekId, 10);
  const week = ALL_WEEKS.find((w) => w.week === weekNum);
  const month = week ? MONTHS.find((m) => m.weeks.some((w) => w.week === weekNum)) : null;

  if (!week || !month) {
    return (
      <div style={{ padding: "40px 0", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
        Week not found.{" "}
        <Link to="/path" style={{ color: "var(--text)" }}>← Back to path</Link>
      </div>
    );
  }

  const prevWeek = ALL_WEEKS.find((w) => w.week === weekNum - 1);
  const nextWeek = ALL_WEEKS.find((w) => w.week === weekNum + 1);
  const monthIdx = MONTHS.indexOf(month);

  return (
    <div className="week-page">
      {/* Breadcrumb */}
      <div className="week-page-breadcrumb">
        <Link to="/" className="week-page-back">← Home</Link>
        <span className="week-page-sep">·</span>
        <Link
          to={`/path?month=${monthIdx}`}
          style={{ color: month.color, textDecoration: "none", fontWeight: 600 }}
        >
          Month {month.month}: {month.shortTitle}
        </Link>
        <span className="week-page-sep">·</span>
        <span style={{ color: "var(--text-secondary)", fontSize: 12 }}>W{week.week}</span>
      </div>

      <WeekCard
        week={week}
        monthColor={month.color}
        progress={progress[week.week]}
        onToggleReading={(idx) => toggleReading(week.week, idx)}
        onToggleProject={() => toggleProject(week.week)}
        onAddNote={(note) => updateNote(week.week, note)}
        onToggleRubric={(idx) => toggleRubric(week.week, idx)}
        isExpanded={true}
        onToggle={() => {}}
        isNextUp={stats.nextIncompleteWeek?.week === week.week}
        quizState={getQuizState(week.week)}
        onSubmitQuiz={(answers) => submitQuiz(week.week, answers)}
      />

      {/* Week navigation */}
      <div className="week-page-nav">
        {prevWeek ? (
          <Link to={`/week/${prevWeek.week}`} className="week-page-nav-btn">
            ← W{prevWeek.week}: {prevWeek.title}
          </Link>
        ) : (
          <Link to={`/path?month=${monthIdx}`} className="week-page-nav-btn">
            ← Module overview
          </Link>
        )}
        {nextWeek ? (
          <Link to={`/week/${nextWeek.week}`} className="week-page-nav-btn week-page-nav-btn-next">
            W{nextWeek.week}: {nextWeek.title} →
          </Link>
        ) : (
          <Link to={`/path?month=${Math.min(monthIdx + 1, MONTHS.length - 1)}`} className="week-page-nav-btn week-page-nav-btn-next">
            Next module →
          </Link>
        )}
      </div>
    </div>
  );
}
