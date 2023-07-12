import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Buttons } from '../../components/Buttons'

import { Container, Form } from './styles'


export function New() {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [infos, setInfos] = useState('')
  const [tags, setTags] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  let tagsList =[]
  
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:3333/persons')
      .then(res => res.json())
      .then(data => {
        setPersons(data)
      })
      .catch(err => {
        console.error(err)
      })
    }, []
  )

  tagsList = persons.map((p) => p.tags )
  tagsList = [... new Set(tagsList)]
    
  function handleSubmit(e) {
    e.preventDefault()

    if (id) {
      fetch('http://localhost:3333/persons/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, infos, tags, imageUrl })
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
        body: JSON.stringify({ name, infos, tags, imageUrl })
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
            <h1>Adicionar personagem</h1>
          </header>
          
          <Input 
            value={name}
            placeholder="Nome" 
            onChange={(e) => setName(e.target.value)} 
            required
          />

          <Textarea 
            defalultValue={infos}
            placeholder="Informações" 
            onChange={(e) => setInfos(e.target.value)}
          />

          <Section title="Categoria">
            <div className="tags">
              { tagsList.map((tags) => 

                <span 
                  key={tags} 
                  id={tags} 
                  // isActive={false}
                  onClick={(e) => {
                    setTags(e.target.value)
                    const pressedTag = document.querySelector(`#${e.target.value} .gbswIs`)

                    if(pressedTag.classList.contains('isActive')) {
                      setTags('Não definido')
                      pressedTag.classList.remove('isActive')
                    }
                    else {
                      setTags(e.target.value)

                      tagsList.map(t => {
                        const eachTag = document.querySelector('t .gbswIs')
                        pressedTag.classList.add('isActive')
                      })
                    }
                  }}
                >

                  <NoteItem value={tags} />
                </span>
              )}

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
