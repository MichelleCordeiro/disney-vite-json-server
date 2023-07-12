import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Buttons } from '../../components/Buttons'

import { Container, Form } from './styles'


export function Edit() {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [infos, setInfos] = useState('')
  const [tags, setTags] = useState('')
  
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:3333/persons/' + id)
      .then(res => res.json())
      .then(data => {
        setPersons(data)
      })
      .catch(err => {
        console.error(err)
      })
    }, [id]
  )
    
  function handleSubmit(e) {
    e.preventDefault()

    if (id) {
      fetch('http://localhost:3333/persons/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, infos, tags })
      }).then (() => {
        console.log("Registro alterado!")
        navigate('/')
      }).catch((erro) => {
        console.error(erro)
      })

    } else {
      fetch('http://localhost:3333/persons', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, infos, tags })
      }).then (() => {
        console.log("Novo registro criado!")
        navigate('/')
      }).catch((erro) => {
        console.error(erro)
      })
    }
  }

  
  return (
    <Container>
      <Header />

      <main>
        <Form onSubmit={handleSubmit}>
          <header>
            <h1>Editar personagem</h1>
          </header>
          
          <Input 
            name={persons.name}
            placeholder={persons.name}
            defaultValue={persons.name}

            onChange={(e) => e.target.value !== "" ? setName(e.target.value) : ""}
              // required)
          />

          <Textarea 
            name={persons.infos}
            defaultValue={persons.infos}
            onChange={(e) => e.target.value !== "" ? setInfos(e.target.value) : ""}
          />

          <Section title="Categoria">
            <div className="tags">
              <Input 
                name={persons.tags}
                className={"inputTag"} 
                defaultValue={persons.tags}
                onChange={(e) => e.target.value !== "" ? setTags(e.target.value) : ""}
              />

            </div>
          </Section>

          <Buttons />
        </Form>
      </main>
    </Container>
  )
}
