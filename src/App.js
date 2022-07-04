import React from "react";
import "./App.css";
import friendsData from "./data";

function App() {
  const [friends, setFriends] = React.useState(friendsData);
  const handleClick = () => {
    console.log("handleclick");
    setFriends([]);
  };
  const removeHandle = (id) => {
    setFriends(friends.filter((person) => person.id != id));
  };
  return (
    <div className="container">
      <div className="list-container">
        <p>{friends.length} Birthdays this week</p>
        {friends.map((person) => {
          return (
            <div key={person.id} className="person-container">
              <img className="avatar" src={person.imgUrl} alt={person.name} />
              <section className="info">
                <p className="name">{person.name}</p>
                <p className="age">{person.age}</p>
                <p onClick={() => removeHandle(person.id)}>Remove</p>
              </section>
            </div>
          );
        })}
        <button onClick={() => handleClick()}>Clear all</button>
      </div>
    </div>
  );
}

export default App;
