const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

// const contactsPath = path.join(__dirname, 'src/db/contacts.json')
const contactsPath = path.join(process.cwd(), 'src', 'db', 'contacts.json');

console.log(contactsPath);

async function getContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const data = await getContacts();
  const res = data.find(item => item.id === contactId);
  return res || null;
}

async function removeContact(contactId) {
  const dataContacts = await getContacts();
  const index = dataContacts.findIndex(item => item.id === contactId);
  if(index ===-1) return `not found ${contactId}`
  const [res] = dataContacts.splice(index,1);
  await fs.writeFile(contactsPath, JSON.stringify(dataContacts,null,2))
  return res;
}

async function addContact(name, email, phone) {
  const contacts = await getContacts();
  const newCotact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newCotact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newCotact;
}

console.log(nanoid());
module.exports = { getContacts, getContactById, removeContact, addContact };
