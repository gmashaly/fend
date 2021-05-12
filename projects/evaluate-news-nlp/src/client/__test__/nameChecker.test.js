const urlChecker = require("../js/urlChecker");


test("Testing  validURL function", () => {
    expect(urlChecker.validURL("www.google.com")).toBe(true);
});

test("Testing  validURL function", () => {
    expect(urlChecker.validURL("google")).toBe(false);
});