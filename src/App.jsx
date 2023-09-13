import "../public/index.css";

function App() {
  return (
    <div className="card">
      <Avatar imgName="../public/Gigachad.jpg" />
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
        The Ultimate Man, the Chad to out Chad all Chads, the Alpha Male of the
        Alpha Males. If a woman were to look in his direction she would
        immediately get pregnant. His jawline is a perfect 116 degrees. The
        absolute Chad to end all absolute Chads.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skill-list">
      <SkillElement skillName="Test" style={{ backgroundColor: "red" }} />
      <SkillElement />
      <SkillElement />
      <SkillElement />
      <SkillElement />
      <SkillElement />
    </ul>
  );
}
function SkillElement(props) {
  return <li className="skill">{props.skillName}</li>;
}

export default App;
