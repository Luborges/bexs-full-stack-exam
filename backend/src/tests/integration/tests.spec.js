const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('question', () => {
    let token;

    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
        
        await request(app).post('/user').send({
            email: "contato@teste.com",
            password: '123456',
        });
        
        const response = await request(app).post('/login').send({
            email: "contato@teste.com",
            password: '123456',
        });

        token = response.body.token;
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new question', async () => {
        const response = await request(app).post('/questions').set('Authorization', `Bearer ${token}`).send({
            text: 'Primeira pergunta',
            creationDate: new Date(),
        });
        
        expect(response.body.question).toBe(1);
    });

    it('should be able to find all questions', async () => {
        const response = await request(app).get('/questions').set('Authorization', `Bearer ${token}`).send();
        
        expect(response.body.questions[0].id).toBe(1);
        expect(response.body.questions[0].text).toBe('Primeira pergunta');
    });

    it('should be able to create a new question', async () => {
        const response = await request(app).post('/answers').set('Authorization', `Bearer ${token}`).send({
            text: 'Primeira resposta',
            id: 1,
        });
        
        expect(response.body.answer).toBe(1);
    });

    it('should be able to find all answers for one question', async () => {
        const response = await request(app).get('/answers/?id=1').set('Authorization', `Bearer ${token}`).send();
        
        expect(response.body.answers[0].id).toBe(1);
        expect(response.body.answers[0].text).toBe('Primeira resposta');
        expect(response.body.answers[0].question_id).toBe(1);
    });

    it('should be able to count the answers for a given question', async () => {
        const response = await request(app).get('/questions-count/?id=1').set('Authorization', `Bearer ${token}`).send();
        
        expect(response.body.total).toBe(1);
    });
});