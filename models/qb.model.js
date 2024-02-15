const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  optionType: { type: String, required: true },
});

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
});

const QuestionBank = mongoose.model("Subject", subjectSchema);

module.exports = QuestionBank;
