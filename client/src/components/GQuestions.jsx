import { faqs } from '../data';

const GQuestions = () => {
  const music = faqs.find((faq) => faq.name === 'Music');
  const musicChild = music.children;

  const gQuestions = musicChild.find(
    (faq) => faq.name === 'General questions and requirements'
  );
  const gQuestionsChild = gQuestions.children;

  return (
    <>
      {gQuestionsChild.map(({ question, answer }, id) => {
        return (
          <div className="my-5" key={id}>
            <h4 className="font-bold bg-gray-100">{question}</h4>
            <p>{answer}</p>
          </div>
        );
      })}
    </>
  );
};

export default GQuestions;
