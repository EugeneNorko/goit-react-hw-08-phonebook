import css from './Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={css.contact__item}>
            {name}: {number}
            <button
              className={css.contacts__btn}
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
