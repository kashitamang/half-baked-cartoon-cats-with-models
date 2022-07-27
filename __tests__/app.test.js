const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    expect(res.body.length).toEqual(8);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      // type: expect.any(String),
      // url: expect.any(String),
      // year: expect.any(Number),
      // lives: expect.any(Number),
      // isSidekick: expect.any(Boolean),
    });
  });

  it('/cats/:id should return cat detail', async () => {
    const res = await request(app).get('/cats/1');
    expect (res.body).toEqual({
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      isSidekick: false,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
