import PropTypes from 'prop-types';

export const ContactFilter = ({ onFilterContacts }) => {
  return <input type="text" name="filter" onChange={onFilterContacts} />;
};

ContactFilter.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
};
