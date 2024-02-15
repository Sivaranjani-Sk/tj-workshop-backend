const QuestionBank = require('../models/qb.model');

const getAll = async (req, res) => {
  try {
    const allData = await QuestionBank.find();

    res.status(200).json({ data: allData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getSubjectData = async (req, res) => {
  try {
    const qbData = await QuestionBank.findOne({
      subjectName: req.query.subject,
    });
    res.status(200).json({ data: qbData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const submit = async (req, res) => {
  try {
    const { subject, answers } = req.body;

    const subjectData = await QuestionBank.findOne({
      subjectName: subject,
    });

    if (!subjectData) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    const { questions } = subjectData;

    let score = 0;
    answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.id);
      if (question && question.answer === answer.selectedAnswer) {
        score++;
      }
    });

    res.json({ data: score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const postQBData = async (req, res) => {
  try {
    const { subjectName, questions } = req.body;
    const subject = new QuestionBank({
      subjectName,
      questions,
    });
    const createdSubject = await subject.save();
    res.status(201).json(createdSubject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAll, getSubjectData, submit, postQBData };
