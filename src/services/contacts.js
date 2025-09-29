import { contactCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactCollection.find();
  return contacts;
};

export const getContactsById = async (contactstId) => {
  const contact = await contactCollection.findById(contactstId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const contact = await contactCollection.findByIdAndUpdate(
    contactId,
    payload,
    { new: true },
  );
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await contactCollection.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};
