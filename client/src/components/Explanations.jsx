import { faqs } from '../data';

const Explanations = () => {
  const music = faqs.find((faq) => faq.name === 'Music');
  const musicChild = music.children;

  const publications = musicChild.find((faq) => faq.name === 'Publication');
  const publiChild = publications.children

  const explanations = publiChild.find(
    (faq) => faq.name === 'Explanations'
  );
  const explanationsChild = explanations.children;


  return (
   <>
    {explanationsChild.map(({ question, answer }, id) => {
        return (
          <div className="my-5" key={id}>
            <h4 className="font-bold bg-gray-200">{question}</h4>
            <p>{answer}</p>
          </div>
        );
      })}
   </>
  )
}

export default Explanations