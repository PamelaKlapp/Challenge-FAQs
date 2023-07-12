import { faqs } from '../data';

const Spotify = () => {
    const music = faqs.find((faq) => faq.name === 'Music');
  const musicChild = music.children;

  const publications = musicChild.find((faq) => faq.name === 'Publication');
  const publiChild = publications.children

  const portals = publiChild.find(
    (faq) => faq.name === 'Portals'
  );
  const portalsChild = portals.children;

  const spotify = portalsChild[2]
  const spotifyChild = spotify.children

  return (
    <>
    {spotifyChild.map(({ question, answer }, id) => {
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

export default Spotify