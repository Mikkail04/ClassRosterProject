import "./styles.css";

let rosterInfo = [
  ["Mikkail", "Allen", "blue"],
  ["Derek", "Pitman", "green"]
];

function row(firstName, lastName, favColor) {
  return (
    <div class="row">
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span style={{ color: favColor }}>{favColor}</span>
    </div>
  );
}

export default function App() {
  let elements = [];
  for (let person of rosterInfo) {
    elements.push(row(person[0], person[1]));
  }
  return <div className="App"></div>;
}
