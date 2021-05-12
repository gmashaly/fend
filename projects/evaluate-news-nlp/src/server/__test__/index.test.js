const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);
import 'regenerator-runtime';
//import 'babel-polyfill'


it("Gets the test endpoint", async done => {
    const res = await request.get("/test");
    done();
  });



describe('test the endpoint', () => {
  it('should create a new post', async () => {
    const res = await request.post('/sentimentAnalysis')
      .send({
        "key": process.env.API_KEY,
        "txt": "www.goole.com",
        "lang": "en"
      });
    expect(res.statusCode).toEqual(200)
  })
})

