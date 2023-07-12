import { useEffect, useState } from 'react';
import { FiHome } from 'react-icons/fi'
import { VscGraph } from "react-icons/vsc";

import { Brand } from '../../components/Brand'
import { Header } from '../../components/Header'

import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  LabelList
} from 'recharts';


import { 
  Container, 
  Menu, 
  Content, 
  Dashboard,
  NewPerson, 
} from './styles';


export function DashboardPage() {
  const [persons, setPersons] = useState([])
  const data = []
  let setCategories
  
  const cats = persons
    .map(dataItem => dataItem.tags) // get all tags
    .filter((cat, index, array) => array.indexOf(cat) === index); // filter out duplicates

  const tots = cats
    .map(cat => (
      persons.filter(item => item.tags === cat).length
    ))

  cats.unshift("all")
  tots.unshift(Object.keys(persons).length)

  let i = 0
  while(i < Object.keys(cats).length) {
    data.push({ "category": cats[i], "total": tots[i] })
    i++
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

  useEffect(() => {
    fetch('http://localhost:3333/categories')
      .then(resp => resp.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => {
        console.error(err)
      })
    }, []
  )
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff2828', '#c942ff']
  
  return (
    <Container >
      <Brand />
      <Header />
      <Menu />

      <Content>
        <div className='graphs'>
          <PieChart width={700} height={700}>
            <Pie 
            className='pie'
              data={data} 
              dataKey="total" 
              Legend

              
              cx="40%" 
              cy="40%" 
              innerRadius={80}
              outerRadius={120} 
              fill="#8884d8" 
              label
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
          </PieChart>

          <BarChart 
            className='bar' 
            width={700} 
            height={280} 
            data={data} 
            margin={{
              top: 20,
              right: 30,
              bottom: 5,
            }}
          >

            <Bar data={data} dataKey="total" fill="#8884d8" label={{ position: 'top' }}>
              <LabelList dataKey="total" />
            </Bar>

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
              
          </BarChart>
        </div>

      </Content>

      <Dashboard>
        <VscGraph />
        Dashboard
      </Dashboard>

      <NewPerson to="/">
        <FiHome />
        Home
      </NewPerson>
    </Container>
  )
}