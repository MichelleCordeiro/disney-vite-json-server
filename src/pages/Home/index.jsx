import { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'

import { ContainerHome, Brand, Menu, Search, Content, NewPerson, Person, Tag } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Link } from 'react-router-dom';
// import { Person } from '../../components/Person'
// import { Tag } from '../../components/Tag'

export function Home() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/persons')
      .then(resp => resp.json())
      .then(data => {
        setPersons(data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  return (
    <ContainerHome>
      <Brand>
        <h1>Find Disney</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="Pessoas" /></li>
        <li><ButtonText title="Animais" /></li>
        <li><ButtonText title="Objetos" /></li>
        <li><ButtonText title="Outros" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar por personagem" icon={ FiSearch }/>
      </Search>

      <Content>
        <Section title="Meus personagens">
          {persons.map((p) => 

            <Person key={p.id} >
              <Link to={"/details/" + p.id} >
                <h2>{p.name}</h2>

                {
                  p.tags &&
                  <footer>
                    {
                      <Tag>
                        {p.tags}
                      </Tag>
                    }
                  </footer>
                }
              </Link>
            </Person>
          )}
        </Section>
      </Content>

      <NewPerson to="/new">
        <FiPlus />
          Adicionar personagem
      </NewPerson>
    </ContainerHome>


  )
}