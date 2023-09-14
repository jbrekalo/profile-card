import "../public/index.css";

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
      <SkillElement
        skillName="Meme Power"
        skillEmoji="💪🏼"
        skillColor="#e74645"
      />
      <SkillElement
        skillName="Regeneration"
        skillEmoji="🌱"
        skillColor="#1ac0c6"
      />
      <SkillElement
        skillName="Genius Intelligence"
        skillEmoji="🧠"
        skillColor="#facd60"
      />
      <SkillElement
        skillName="Immortality"
        skillEmoji="♾️"
        skillColor="#fb7756"
      />
      <SkillElement
        skillName="Enhanced Senses"
        skillEmoji="👁️"
        skillColor="#fdfa66"
      />
      <SkillElement
        skillName="Space-Time Manipulation"
        skillEmoji="✨"
        skillColor="#75e8e7"
      />
      <SkillElement
        skillName="Power Absorption"
        skillEmoji="🔋"
        skillColor="#ddacf5"
      />
    </ul>
  );
}
function SkillElement(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.skillColor }}>
      <span>{props.skillName}</span>
      <span>{props.skillEmoji}</span>
    </li>
  );
}

export default App;
