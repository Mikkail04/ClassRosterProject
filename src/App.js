import "./styles.css";

let rosterInfo = [
  { firstName: "Mikkail", lastName: "Allen", favColor: "blue" },
  { firstName: "Derek", lastName: "Pitman", favColor: "green" }
];

// let myData = myList.map(function(singleItem) {
// row(singleItem.field, singleItem.otherField)
//});
let rosterRows = rosterInfo.map(intermediate);

function intermediate(rosterInfo) {
  // call row function assuming rosterInfo is an element of rosterInfo
  return row(rosterInfo.firstName, rosterInfo.lastName, rosterInfo.favColor);
}

function row(firstName, lastName, favColor) {
  return (
    <div className="row">
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{favColor}</span>
    </div>
  );
}

export default function App() {
  return rosterRows;
  // let elements = [];
  // for (let person of rosterInfo) {
  //   elements.push(row(person[0], person[1]));
  // }
  // return (<div className="App">{elements}</div>);
}
