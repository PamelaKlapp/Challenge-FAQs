import { faqs } from '../data';

const AppleMusic = () => {
    const music = faqs.find((faq) => faq.name === 'Music');
  const musicChild = music.children;

  const publications = musicChild.find((faq) => faq.name === 'Publication');
  const publiChild = publications.children

  const portals = publiChild.find(
    (faq) => faq.name === 'Portals'
  );
  const portalsChild = portals.children;

  const appleMusic = portalsChild[3]
  const appleMusicChild = appleMusic.children

  return (
    <>
    {appleMusicChild.map(({ question, answer }, id) => {
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

export default AppleMusic