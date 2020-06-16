const knex = require('../database/connection');

class AnswerController {
    async find (req, res) {
        const { id } = req.query;

        const question = await knex('questions')
            .where('id', id)
            .select([
                'questions.text',
                'questions.creationDate',
                'questions.user'
            ]).first();

        const answers = await knex('answers')
            .where('question_id', id)
            .select([
                'answers.*',
            ]);

        return res.status(200).send({
            question,
            answers,
        });
    }

    async create (req, res) {
        const { text, user, id } = req.body;

        const answerData = {
            text,
            user: user.email,
            creationDate: new Date(),
            question_id: id,
        }
    
        const insertedId = await knex('answers').insert(answerData);
    
        const answer = insertedId[0];
        
        return res.status(200).send({
            answer,
            user: user.email,
        });
    }
}

module.exports = AnswerController;