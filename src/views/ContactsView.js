import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";

import "../styles.css";

const ContactsView = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <Filter />
    <ContactList />
  </>
);

export default ContactsView;
