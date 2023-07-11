import { Link } from 'react-router-dom'
import { Button } from '../Button/index.jsx'

import { Container } from './styles.js'

export function Buttons() {
  return (
    <Container>
      <Link to={"/"}>
        <Button title="Voltar" id="btnBack" />
      </Link>

      <Button type="submit" title="Salvar" />
    </Container>
  )
}
