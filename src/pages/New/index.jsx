import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'
let tagsList =[]

export function New() {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [infos, setInfos] = useState('')
  const [tags, setTags] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:3000/persons')
      .then(res => res.json())
      .then(data => {
        setPersons(data)
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

    tagsList = persons.map((p) => p.tags )
    // tagsList = tagsList.filter((value, index, array) => array.indexOf(value) === index)
    tagsList = [... new Set(tagsList)]
    // console.log(tagsList)
    // console.log(typeof(tagsList))
    
  function handleSubmit(e) {
    e.preventDefault()

    if (id) {
      fetch('http://localhost:3000/persons' + id, {
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
      fetch('http://localhost:3000/persons/', {
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
            <Link to="/">
              Voltar
            </Link>
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

          <Section title="Marcadores">
            <div className="tags">
              { tagsList.map((tags) => 

                <Link 
                  to={""} 
                  key={tags} 
                  id={tags} 
                  // isActive={false}
                  onClick={(e) => {
                    setTags(e.target.value)
                    // console.log(e.target.value);
                    // const pathAhllTag = document.querySelector('.tags a')
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
              )}

              <NoteItem 
                isNew 
                placeholder="Nova tag" 
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </Section>

          <Button type="submit" title="Salvar" />

        </Form>
      </main>
    </Container>
  )
}
