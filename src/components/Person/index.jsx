import { PropTypes } from 'prop-types';
import { Container } from './styles';
import { Tag } from '../Tag';

export function Person({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.name}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => 
              <Tag key={tag.id} title={tag.title} />
            )
          }
        </footer>
      }
    </Container>
  )
}

Person.propTypes = {
  data: PropTypes.object.isRequired
}