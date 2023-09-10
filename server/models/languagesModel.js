import mongoose from 'mongoose';

const languageSchema = mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

const LanguageModel = mongoose.model('Language', languageSchema);
export default LanguageModel;
