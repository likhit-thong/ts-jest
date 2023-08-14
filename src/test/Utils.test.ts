import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("StringUtils tests", () => {
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup !!");
    });

    it("should return string upper case", () => {
      const actual = sut.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });

    it("should return throw error on invalid argument - arrow function", () => {
      // call back
      expect(() => sut.toUpperCase("")).toThrow();
      expect(() => sut.toUpperCase("")).toThrowError("Invalid argument !!");
    });

    it("should return throw error on invalid argument - try catch", (done) => {
      try {
        sut.toUpperCase("");
        done("");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument !!");
        done();
      }
    });
  });

  it("should return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });
  describe("ToUpperCase example", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    const actual = getStringInfo("My-String");
    test("return right upper case", () => {
      expect(actual.upperCase).toBe("MY-STRING");
    });
    test("return right lower case", () => {
      expect(actual.lowerCase).toBe("my-string");
    });

    test("return right length", () => {
      expect(actual.length).toBe("my-string".length);
    });

    test("return right extra info", () => {
      expect(actual.extraInfo).toBeDefined();
    });
  });
});
