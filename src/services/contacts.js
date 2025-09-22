import { contactCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactCollection.find();
  return contacts;
};

export const getContactsById = async (contactstId) => {
  const contact = await contactCollection.findById(contactstId);
  return contact;
};
