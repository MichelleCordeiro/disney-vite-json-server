import { Container } from './styles';

export function Brand() {
  const refresh = () => window.location.reload(true)

  return (
    <Container>
      <h1 onClick={refresh}>Find Disney</h1>
    </Container>
  )
}