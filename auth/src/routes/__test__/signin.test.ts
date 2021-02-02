import request from 'supertest';
import { app } from "../../app";

it('fails when a email that does not exist is supplies', async() => {
    await request(app)
        .post('/api/users/signin')
        .send({
            email:'test@test.com',
            password: 'password'
        })
        .expect(400);
})

it('fails when an incorrect password is supplied', async() =>{
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test3@test.com",
            password: 'password'
        })
        .expect(201);

    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test3@test.com',
            password: 'notthepassword'
        })
        .expect(400);
})

it('responds with a cookie by giving valid credentials', async() =>{
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: 'password'
        })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined()
})