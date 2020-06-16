const knex = require('../database/connection');

class QuestionController {
    async index (_req, res) {
        const questions = await knex('questions')
            .select([
                'questions.*',
            ]);
            
        return res.status(200).send({
            questions,
        });
    }

    async total (req, res) {
        const { id } = req.query;
        const [count] = await knex('answers')
            .where('question_id', id)
            .select([
                'answers.id',
            ]).count();

        return res.status(200).send({total: count['count(*)']});
    }

    async create (req, res) {
        const { text, user } = req.body;

        const questionData = {
            text,
            user: user.email,
            creationDate: new Date(),
            
        }
    
        const insertedId = await knex('questions').insert(questionData);
    
        const question = insertedId[0];
        
        return res.status(200).send({
            question,
            user: user.email,
        });
    }
}

module.exports = QuestionController;