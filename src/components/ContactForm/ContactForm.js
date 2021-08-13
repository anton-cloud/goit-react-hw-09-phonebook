import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);
      case "number":
        return setNumber(value);
      default:
        return null;
    }
  }, []);

  const existContacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContact = existContacts.some(
      (element) => element.name.toLowerCase() === name.toLowerCase()
    );
    checkContact
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact({ name, number }));

    resetInput();
  };

  const resetInput = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          className={styles.input}
          placeholder="Jon Jonson"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="111-11-11"
          value={number}
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.defaultProps = {
  name: "",
  number: "",
  items: [],
};
