import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

import styles from "../Filter/Filter.module.css";

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onFilterValue = (event) => {
    dispatch(contactsActions.changeFilter(event.currentTarget.value));
  };
  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onFilterValue}
        />
      </label>
    </>
  );
}
Filter.defaultProps = {
  value: "",
};
