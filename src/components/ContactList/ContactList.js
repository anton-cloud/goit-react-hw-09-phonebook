import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import style from "./ContactList.module.css";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();

  const contactsForList = useSelector(contactsSelectors.getVisibleContacts);

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    console.log(contactsOperations.fetchContacts());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={style.list}>
        {contactsForList.map((contact) => (
          <li key={uuidv4()} className={style.item}>
            <p className={style.info}>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                dispatch(contactsOperations.deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoadingContacts && <h2>Loading...</h2>}
    </>
  );
}

ContactList.defaultProps = {
  name: "",
  number: "",
  items: [],
};
