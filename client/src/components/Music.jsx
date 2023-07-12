import { useState } from 'react'
import {faqs} from '../data'

const Music = () => {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleCategoryChange = e =>{
        setSelectedCategory(e.target.value)
    }

    const music = faqs.find((faq)=> faq.name === 'Music')
    const musicChild = music.children
    console.log(musicChild)

  return (
    <>
        <label className="my-5 block mb-3 font-bold text-gray-600 uppercase">Music Questions</label>
            <select className="w-full p-3 bg-white border border-gray-400 rounded-md"
            value={selectedCategory}
            onChange={handleCategoryChange}
            >
                <option value=""> -- Select Category --</option>
                {musicChild.map((faq, i)=>{
                    return(
                        <option key={i}>{faq.name}</option>
                    )
                })}

            </select>
    </>
  )
}

export default Music