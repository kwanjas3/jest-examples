const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log("Checking Name...");
describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("user is Jason", () => {
    const user = "Jason";
    expect(user).toBe("Jason");
  });
});

const initDatabase = () => console.log("DB Init");
const closeDatabase = () => console.log("DB Close");

test("adds 2 + 2 = 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("sohuld be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("sohuld be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("to be user Jason Kwan object", () => {
  expect(functions.createUser()).toEqual({
    firstname: "Jason",
    lastname: "Kwan"
  });
});

test("should be under 1600", () => {
  const load1 = 800,
    load2 = 800;

  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test("There is no I in Team", () => {
  expect("teami").not.toMatch(/I/);
});

test("admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//testing async code assertions is how many .thens
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//async await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
