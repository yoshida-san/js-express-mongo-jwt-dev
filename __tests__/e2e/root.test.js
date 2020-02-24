const app = require('../../src/app')
const supertest = require('supertest')
const request = supertest(app)

describe('Testing /', () => {
  it('[Get]', async done => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Hello...?')
    done()
  })
  it('[Get]{name="John"}', async done => {
    const response = await request.get('/').query({ name: 'John' })
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Hello, John!')
    done()
  })
  it('[Post]', async done => {
    const response = await request.post('/')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Hello...?')
    done()
  })
  it('[Post]{name="Jessie"}', async done => {
    const response = await request.post('/').send({ name: 'Jessie' })
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Hello, Jessie!')
    done()
  })
})
