import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Buttons } from '../../components/Buttons/index.jsx'

import { Container, Content } from './styles.js'


export function Details(){
  const [persons, setPersons] = useState([])

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
    }, []
  )

  
  function handleDelete(e) {
    e.preventDefault()

    fetch('http://localhost:3333/persons/' + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ name, infos, tags })
    }).then (() => {
      console.log("Registro apagado!")
      navigate('/')
    }).catch((erro) => {
      console.error(erro)
    })
  } 


  return(
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h1>FIND DISNEY</h1>
            <Link to={"/"}>
              <ButtonText title="Excluir personagem" id="btnDel" onClick={handleDelete} />
            </Link>
          </div>

          <h2>{persons.name}</h2>

          <p>
            {persons.infos}
          </p>

          <Section title="Categoria">
            <Tag title={persons.tags} />
          </Section>

          <Buttons />
        </Content>
      </main>
    </Container>
  )
}
