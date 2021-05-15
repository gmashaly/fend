const urlChecker = require("../js/urlChecker");


test("Testing  validURL function", () => {
    expect(urlChecker.validURL("https://edition.cnn.com/2021/05/12/health/acip-cdc-pfizer-vaccine-teens/index.html")).toBe(true);
});

test("Testing  validURL function", () => {
    expect(urlChecker.validURL("cnn")).toBe(false);
});