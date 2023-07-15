const request = require('supertest');
const app = require('../../src/index');

describe('GET /countries/:name', () => {
  test('should return country by name', async () => {
    const response = await request(app).get('/countries/jordan');

    expect(response.status).toBe(200);
  });

  test('should return 404 if country not found', async () => {
    const response = await request(app).get('/countries/Nonexistent');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'country not found' });
  });
});
