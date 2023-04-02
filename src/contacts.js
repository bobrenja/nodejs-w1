const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');


// const contactsPath = path.join(__dirname, 'src/db/contacts.json')
const contactsPath = path.join(process.cwd(), 'src', 'db', 'contacts.json');

console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function getContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
}

async function getContactById(contactId) {
    const data = await getContacts();
    const res = data.find(item =>item.id===contactId)
    return res || null;

    
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

console.log(nanoid())
module.exports = { getContacts, getContactById, removeContact, addContact };
