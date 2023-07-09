import { PropTypes } from 'prop-types';
// import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ isNew, val, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        key={val}
        type='text'
        value={val}
        readOnly={!isNew}
        {...rest}
      />

      {/* <button
        key={val}
        type='button'
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX />}
      </button> */}
    </Container>
  )
}

NoteItem.propTypes = {
  isNew: PropTypes.bool,
  val: PropTypes.array,
  onClick: PropTypes.func
}