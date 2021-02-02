import request from 'supertest';
import { app } from '../../app';
import { currentUser } from '../../middlewares/current-user';
import { signinRouter } from '../signin';

it('responds with details about the current user', async () => {
  const cookie = await global.signin()

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {

  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200)
  
  console.log("response: ", response.body)

  expect(response.body.currentuser).toEqual(null)
});