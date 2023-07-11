import { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'
import { VscGraph } from "react-icons/vsc";
import { Link } from 'react-router-dom';

import { Brand } from '../../components/Brand'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
// import { Dashboard } from '../../components/Dashboard'
// import { Person } from '../../components/Person'
// import { Tag } from '../../components/Tag'

import { 
  ContainerHome, 
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
  const [category, setCategory] = useState('')
  const [show, setShow] = useState(true)
  
  const tagsList = [... new Set(persons.map((p) => p.tags))]
  
  // pega palavra p filtro do search
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  
  // filtro do search
  const filteredSearch = (() =>
  document.querySelector(".categoria").classList.add('hide'),
  
  persons.filter((res) => 
  res.name?.toLowerCase().includes(message?.toLocaleLowerCase()) || !message
  ))
  
  // pega palavra p filtro da categoria
  const handleClick = (category) => {
    setCategory(category)
    // document.querySelector(category).classList.add("isActive")
    // document.querySelector(".menuTodas").classList.remove("isActive")
    // document.querySelector(".menuTodas").classList.remove("isActive")
  }

  // filtro da categoria
  const filteredCategory = (() =>
    setShow(!show),

    persons.filter((res) => 
    res.tags?.toLowerCase().includes(category?.toLocaleLowerCase()) || !category
  ))

  // define se filtra por busca ou categoria
  const changeFilter = () => setShow(!show)
  
  
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
  

  return (
    <ContainerHome >
      <Brand />
      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="Todas" 
            className={"menuTodas isActive"} 
            onClick={() => handleClick(persons.tags)} 
            // isActive
          />
        </li>

        { tagsList.map((t) => 
            <li key={t}>
              <ButtonText 
                title={t} 
                className={t} 
                onClick={() => (handleClick(t), changeFilter())} 
              />
            </li>
          )
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar por personagem" 
          icon={ FiSearch }
          onChange={handleChange}
          onClick={changeFilter}
        />
      </Search>

      <Content>
        <div className='persons '>
          <Section title="Meus personagens">
            {show ? (
              <div className="cards categoria">
                {
                  filteredCategory.map((res) => {
                    return (
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
                    )
                  })
                }
              </div>
            ) : (
              <div className="cards busca">
              {
                filteredSearch.length > 0 ? (
                  filteredSearch.map((res) => {
                    return (
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
                    )
                  })
                ) : (
                  <p id='EmptySearch'>Nenhum personagem encontrado</p>
                )
              }
              </div>              
            )}
          </Section>
        </div>

        <div className='graph hide'>  
          <Dashboard />
        </div>
      </Content>

      <Dashboard to="/dashboard">
        <VscGraph />
        Dashboard
      </Dashboard>

      <NewPerson to="/new">
        <FiPlus />
        Adicionar personagem
      </NewPerson>
    </ContainerHome>
  )
}