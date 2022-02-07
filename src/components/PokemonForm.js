import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleAddedPokemon }) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        handleAddedPokemon(data)
        setName("")
        setHp("")
        setFront("")
        setBack("")
      })

  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleHp(e) {
    setHp(e.target.value)
  }

  function handleFront(e) {
    setFront(e.target.value)
  }

  function handleBack(e) {
    setBack(e.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleName} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleHp} value={hp }fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
          />
          <Form.Input
            onChange={handleBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
