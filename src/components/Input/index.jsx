import { Container } from './styles';
import { PropTypes } from 'prop-types';

// p não ferir as boas práticas e usar sempre componentes c letras maiusculas converte  icon p Icon na passgem de parâmetro
export function Input({ icon: Icon, ...rest}) {
  return (
    <Container>
      {/* apenas se existir icone seta ele */}
      {Icon && <Icon size={20} />}  
      <input {...rest} />
    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.func
}