import "../public/index.css";

const skills = [
  {
    name: "Meme Power",
    emoji: "💪🏼",
    level: "advanced",
    color: "#e74645",
  },
  {
    name: "Regeneration",
    emoji: "🌱",
    level: "advanced",
    color: "#1ac0c6",
  },
  {
    name: "Genius Intelligence",
    emoji: "🧠",
    level: "advanced",
    color: "#facd60",
  },
  {
    name: "Immortality",
    emoji: "♾️",
    level: "advanced",
    color: "#fb7756",
  },
  {
    name: "Enhanced Senses",
    emoji: "👁️",
    level: "intermediate",
    color: "#fdfa66",
  },
  {
    name: "Space-Time Manipulation",
    emoji: "✨",
    level: "advanced",
    color: "#75e8e7",
  },
  {
    name: "Power Absorption",
    emoji: "🔋",
    level: "beginner",
    color: "#ddacf5",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar imgName="Gigachad.jpeg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.imgName} alt="Giga chad" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Giga Chad</h1>
      <p>
        Ernest Khalimov, also known as the Gigachad, is the perfect human
        specimen destined to "lead us against the reptilians" and is the God of
        all chads. He is the strongest character and sigma male to have possibly
        ever existed, with very few ever even rivaling him. Not even blatantly
        OP characters can beat the Gigachad, he is just this powerful.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <SkillElement
          name={skill.name}
          emoji={skill.emoji}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </ul>
  );
}

function SkillElement({ name, emoji, level, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{emoji}</span>
      <span>
        {level === "beginner" && "| ★☆☆"}
        {level === "intermediate" && "| ★★☆"}
        {level === "advanced" && "| ★★★"}
      </span>
    </li>
  );
}

export default App;
