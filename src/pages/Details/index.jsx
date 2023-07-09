import { Container, Links, Content } from './styles.js'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Details(){
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h1>FIND DISNEY</h1>
            <ButtonText title="Excluir personagem" />
          </div>

          <h2>Introdução ao react</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Non qui harum iste ipsam necessitatibus perspiciatis ex quasi 
            veritatis. Exercitationem cum enim dignissimos excepturi sit 
            reprehenderit quo consequatur consequuntur repellat eveniet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo 
            eius magnam accusantium, unde possimus quo non iure ipsam fugit 
            ad ex animi necessitatibus ratione nobis saepe facere? Veniam, 
            architecto illum. Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Similique exercitationem in quia quod minima, 
            esse facere, ab porro tenetur rerum quasi earum sequi fugit 
            olorum inventore enim, ex facilis necessitatibus!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><Link to="#">https://api.disneyapi.dev/</Link></li>
              <li><Link to="#">https://api.disneyapi.dev/</Link></li>
              <li><Link to="#">https://api.disneyapi.dev/</Link></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Desenho" />
            <Tag title="Filme" />
          </Section>

          {/* <Button title="Login" loading /> */}
          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}
