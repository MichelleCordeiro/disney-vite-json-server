import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
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
    }, []
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
            defaultValue={persons.name}
            placeholder="Nome" 
            onChange={(e) => setName(e.target.value)} 
            required
          />

          <Textarea 
            defaultValue={persons.infos}
            placeholder="Informações" 
            onChange={(e) => setInfos(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
                <Link 
                  to={""} 
                  key={persons.tags} 
                  id={persons.tags} 
                  // isActive={false}
                  onClick={(e) => {
                    setTags(e.target.value)
                    const patPressedTag = document.querySelector(`#${e.target.value} .bzWzyK`)

                    if(patPressedTag.classList.contains('isActive')) {
                      setTags('Não definido')
                      patPressedTag.classList.remove('isActive')
                    }
                    else {
                      setTags(e.target.value)
                      patPressedTag.classList.add('isActive')
                    }
                  }}>

                  <NoteItem value={tags} />
                </Link>

              <NoteItem 
                isNew 
                placeholder="Nova tag" 
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </Section>

          <Buttons />
        </Form>
      </main>
    </Container>
  )
}
