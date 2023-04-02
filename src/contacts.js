const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

// console.log(fs)

// const contactsPath = path.join(process.env.HOME, 'src/db/contacts.json')
const contactsPath = path.join(process.cwd(), 'src', 'db', 'contacts.json');

console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function getContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  // console.log(JSON.parse(data))
  return JSON.parse(data);
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

console.log(nanoid())
module.exports = { getContacts, getContactById, removeContact, addContact };
