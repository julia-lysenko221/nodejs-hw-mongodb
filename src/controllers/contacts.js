import { getAllContacts, getContactsById } from './services/contacts.js';

export const getContactsController = async (res, req) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (res, req) => {
  const { contactId } = req.params;
  const contact = await getContactsById(contactId);

  if (!contact) {
    res.status(404).json({ message: 'Contact not found' });
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
