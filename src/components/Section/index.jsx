import { Container } from './styles'
import { PropTypes } from 'prop-types'

export function Section({ title, children }) {
  return (
    <Container>
      <h3>{title}</h3>
      {children}
    </Container>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}