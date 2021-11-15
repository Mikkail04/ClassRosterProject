import "./styles.css";

function addPerson(
  name,
  pronouns,
  school,
  year,
  color,
  platform,
  animal,
  nickname
) {
  return (
    <div class="row">
      <div class="name">{name}</div>
      <div class="pronouns">{pronouns}</div>
      <div class="school">{school}</div>
      <div class="year">{year}</div>
      <div class="color">{color}</div>
      <div class="platform">{platform}</div>
      <div class="animal">{animal}</div>
      <div class="nickname">{nickname}</div>
    </div>
  );
}

export default function App() {
  let Mikkail = addPerson(
    "Mikkail Allen",
    "He/His",
    "WCHS",
    "2022",
    "Blue",
    "Tiktok",
    "Dogs",
    "yes"
  );
  let Justin = addPerson(
    "Justin Apupalo",
    "He/His",
    "NYIT",
    "2025",
    "Blue",
    "Insta",
    "Rooster",
    "si"
  );

  let rows = [];
  rows.push(Mikkail);
  rows.push(Justin);

  return (
    <div className="App">
      <h1>Class Roster Project</h1>
      <div class="people"></div>
      <div class="row">
        <div>{rows}</div>
      </div>
    </div>
  );
}
