import logger from "../../src/utils/logger";

const spyLog = jest.spyOn(console, "log").mockImplementation();
const spyLogError = jest.spyOn(console, "error").mockImplementation();

beforeEach(() => {
  // spyLog.mockClear()
  // spyLogError.mockClear()
  jest.clearAllMocks();
});
afterAll(() => {
  // console.log("não funciona");
  jest.restoreAllMocks();
  // console.log("isso funciona");
});

describe("Logger File", () => {
  it("Funções de logging: log", () => {
    logger.log("teste");
    expect.assertions(1);

    expect(spyLog).toHaveBeenCalledTimes(1);
  });
  it("Funções de logging: success", () => {
    logger.success("teste");
    expect.assertions(1);

    expect(spyLog).toHaveBeenCalledTimes(1);
  });
  it("Funções de logging: error", () => {
    logger.error("teste");
    expect.assertions(1);

    expect(spyLogError).toHaveBeenCalledTimes(1);
  });
});
