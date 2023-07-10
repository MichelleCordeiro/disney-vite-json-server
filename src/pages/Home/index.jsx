import { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'
import { VscGraph } from "react-icons/vsc";
import { Link } from 'react-router-dom';


import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
// import { SearchBar } from '../../components/SearchBar';
// import { Person } from '../../components/Person'
// import { Tag } from '../../components/Tag'

import { 
  ContainerHome, 
  Brand, 
  Menu, 
  Search, 
  Content, 
  NewPerson, 
  Dashboard,
  Person, 
  Tag 
} from './styles';


export function Home() {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    fetch('http://localhost:3333/persons')
      .then(resp => resp.json())
      .then(data => {
        setPersons(data)
      })
      .catch(err => {
        console.error(err)
      })
    }, []
  )
  
  const tagsList = [... new Set(persons.map((p) => p.tags))]

  return (
    <ContainerHome>
      <Brand>
        <h1>Find Disney</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos Static" isActive/></li>
        <li><ButtonText title="Teste Static" /></li>

        { tagsList.map((t) => 
          <li key={t}><ButtonText title={t} /></li>
        )}
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar por personagem" 
          icon={ FiSearch }
          onChange={handleChange}
        />
      </Search>

      <Content>
        <Section title="Meus personagens">
          <div className="cards">
            {persons.filter((res) => {

              if (message === "") {
                return res;
              } 
              else if ( res.name?.toLowerCase().includes(message?.toLocaleLowerCase()) ) {
                return res
              }
              
            }).map((res) => (
              <Person key={res.id} >
                <Link to={"/details/" + res.id} id='card' >
                  <h2>{res.name}</h2>

                    {
                      res.tags &&
                      <footer>
                        {
                          <Tag>
                            {res.tags}
                          </Tag>
                        }
                      </footer>
                    }
                </Link>
              </Person>
            // )}}
            )) }
          </div>

          <div className="cards">

          </div>
        </Section>
      </Content>

      <NewPerson to="/new">
        <FiPlus />
          Adicionar personagem
      </NewPerson>

      <Dashboard to="/dashboard">
        <VscGraph />
          Dashboard
      </Dashboard>
    </ContainerHome>
  )
}