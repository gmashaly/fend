import { handleSubmit } from "../js/formHandler";

test('handleSubmit should be defined', () => {
    expect(handleSubmit).toBeDefined();
});

test('handleSubmit should be a function', () => {
    expect(typeof handleSubmit).toBe("function");
});
