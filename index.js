console.log('start pro');
const argv = require('yargs').argv;

const contacts = require('./src/contacts');

async function invokeAction({ action, id }) {
  switch (action) {
    case 'list':
      const getAllContacts = await contacts.getContacts();
      console.table(getAllContacts);
      break;


      case 'get':
        const getContact = await contacts.getContactById(id);
        console.table(getContact)
        break;
  }
}

invokeAction(argv);
