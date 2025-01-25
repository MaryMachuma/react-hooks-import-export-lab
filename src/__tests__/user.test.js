import { username, city, image } from "../data/user";

describe("user.js exports", () => {
  test("username should be a string", () => {
    expect(typeof username).toBe("string");
  });

  test("city should be a string", () => {
    expect(typeof city).toBe("string");
  });

  test("image should be a valid URL", () => {
    expect(image).toMatch(/^https?:\/\/.+/); // Checks if the URL starts with http or https
  });
});
