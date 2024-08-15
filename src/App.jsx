import "./App.css"

import { useState } from "react";

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ])
  const [teamStrength, setTeamStrength] = useState(0)
  const [teamAgility, setTeamAgility] = useState(0)

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enought money")
    } else {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      handleTeamAgility("add", fighter.agility)
      handleTeamStrength("add", fighter.strength)
    }
  }

  const handleRemoveFighter = (fighter, fighterIdx) => {
    setMoney(money + fighter.price)
    if (team.length === 1) {
      setTeam([])
    } else setTeam([...team].filter((member, memberIdx) => memberIdx !== fighterIdx))
    handleTeamAgility("remove", fighter.agility)
    handleTeamStrength("remove", fighter.strength)
  }

  const handleTeamStrength = (operation, fighterStrength) => {
    if (operation === "add") {
      setTeamStrength(teamStrength + fighterStrength)
    } else if (operation === "remove") {
      setTeamStrength(teamStrength - fighterStrength)
    }
  }

  const handleTeamAgility = (operation, fighterAgility) => {
    if (operation === "add") {
      setTeamAgility(teamAgility + fighterAgility)
    } else if (operation === "remove") {
      setTeamAgility(teamAgility - fighterAgility)
    }
  }

  return (
    <>
      <h1>Hello Zombie Fighters!</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {teamStrength}</h3>
      <h3>Team Agility: {teamAgility}</h3>
      <h3>Team</h3>
      <ul>
        {team.length === 0 ? <h4>Pick some team members!</h4> :
          team.map((member, idx) => {
            return (
              <li key={`member${idx}`}>
                <img src={member.img} />
                <p>{member.name}</p>
                <p>Price: {member.price}</p>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <button onClick={() => handleRemoveFighter(member, idx)}>Remove</button>
              </li>
            )
          })
        }
      </ul>
      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((zombieFighter, idx) => {
          return (
            <li key={zombieFighter.name}>
              <img src={zombieFighter.img} />
              <p>{zombieFighter.name}</p>
              <p>Price: {zombieFighter.price} points</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App
