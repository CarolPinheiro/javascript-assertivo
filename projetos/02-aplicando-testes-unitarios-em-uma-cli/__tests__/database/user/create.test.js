import { createUser } from '../../../src/database/user/create.js'

import *	as	file from '../../../src/database/file.js';
import path from '../../../src/database/path.js';


jest.mock('../../../src/database/file.js')
jest.mock('../../../src/database/path.js');

const usuario = {
  email: 'qualquer@email.com',
  password: 'senha1234',
  userName: 'usuárioQualquer',
  name: 'Usuário',
  lastName: 'Qualquer'
};

it('Cria	usuário	corretamente', async () => {
  file.loadDatabase.mockResolvedValueOnce([])
  const user = await createUser(usuario)

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
});
