console.log('start pro');
const argv = require('yargs').argv;

const contacts = require('./src/contacts');

async function invokeAction({ action, id, name, phone, email }) {
  switch (action) {
    case 'list':
      const getAllContacts = await contacts.getContacts();
      console.table(getAllContacts);
      break;

    case 'get':
      const getContact = await contacts.getContactById(id);
      console.table(getContact);
      break;

    case 'add':
      const data = await contacts.addContact(name, email, phone);
      console.table(data);
      break;

    case 'remove':
      const dataRemove = await contacts.removeContact(id);
      console.table(dataRemove);
  }
}

invokeAction(argv);
