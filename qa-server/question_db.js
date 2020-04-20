class Db {
    /**
     * Constructors an object for accessing questions in the database
     * @param mongoose the mongoose object used to create schema objects for the database
     */
    constructor(mongoose) {
        // This is the schema we need to store questions in MongoDB
        const questionSchema = new mongoose.Schema({
            question: String,
            answers: [String] // A list of answers as string
        });

        // This model is used in the methods of this class to access questions
        this.questionModel = mongoose.model('question', questionSchema);
    }

    async getQuestions() {
        try {
            return await this.questionModel.find({});
        } catch (error) {
            console.error("getQuestions:", error.message);
            return {};
        }
    }

    async getQuestion(id) {
        try {
            return await this.questionModel.findById(id);
        } catch (error) {
            console.error("getQuestion:", error.message);
            return {};
        }
    }

    async createQuestion(newQuestion) {
        // TODO: Error handling
        let question = new this.questionModel(newQuestion);
        return await question.save();
    }

    async addAnswer(questionId, answer) {
        // TODO: Error handling
        const question = await this.getQuestion(questionId);
        question.answers.push(answer);
        return await question.save();
    }

}
// We export the object used to access the questiona in the database
module.exports = mongoose => new Db(mongoose);