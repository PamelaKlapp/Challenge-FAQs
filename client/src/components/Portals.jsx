import { useState } from 'react';
import { faqs } from '../data';
import Spotify from './Spotify';
import AppleMusic from './AppleMusic';

const Portals = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };

  const music = faqs.find((faq) => faq.name === 'Music');
  const musicChild = music.children;

  const publications = musicChild.find((faq) => faq.name === 'Publication');
  const publiChild = publications.children

  const portals = publiChild.find(
    (faq) => faq.name === 'Portals'
  );
  const portalsChild = portals.children;
  console.log(portalsChild)

  return (
    <>
        {portalsChild.map(({ question, answer }, id) => {
        return (
          <div className="my-5" key={id}>
            <h4 className="font-bold bg-gray-100">{question}</h4>
            <p>{answer}</p>
          </div>
        );
      })}

<label className="my-5 block mb-3 font-bold text-gray-600 uppercase">
          Portals Categories
        </label>
        <select
          className="w-full p-3 bg-white border border-gray-400 rounded-md"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value=""> -- Select Category --</option>
          {portalsChild.map(({name},i) => {
            return <option key={i}>{name}</option>;
          })}
        </select>
        {selectedCategory === 'Spotify' && (
        <Spotify />
      )}
      {selectedCategory === 'Apple Music' && <AppleMusic />}
        
      </>
  )
}

export default Portals