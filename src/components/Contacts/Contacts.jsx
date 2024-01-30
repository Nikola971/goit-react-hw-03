export const Contact = ({ contact }) => {
  return (
    <li>
          <strong>{contact.name}</strong> - {contact.number}
          {/* <button onClick={() => onDelete(contact.id) }>Delete</button> */}
    </li>
  );
};