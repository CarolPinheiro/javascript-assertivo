import { createUser } from "../../../src/database/user/create.js";

import * as file from "../../../src/database/file.js";

import ROLES from "../../../src/constants/roles.js";

jest.mock("../../../src/database/file.js");
jest.mock("../../../src/database/path.js");

const usuario = {
  email: "qualquer@email.com",
  password: "senha1234",
  userName: "usuárioQualquer",
  name: "Usuário",
  lastName: "Qualquer",
};

beforeEach(() => {
  file.loadDatabase.mockResolvedValueOnce([]);
});
afterEach(() => {
  jest.clearAllMocks();
});
afterAll(() => {
  jest.restoreAllMocks();
});
it("Cria	usuário	corretamente", async () => {
  const user = await createUser(usuario);

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.USER,
  });
});
it("Cria	usuário ADMIN	corretamente", async () => {
  const user = await createUser({ ...usuario, role: ROLES.ADMIN });
  expect.assertions(4);

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.ADMIN,
  });
});
