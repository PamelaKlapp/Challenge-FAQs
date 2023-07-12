import { useState } from 'react'
import {faqs} from '../data'
import Music from './Music'
import LegalStuff from './LegalStuff'

const Form = () => {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleCategoryChange = e =>{
        setSelectedCategory(e.target.value)
    }

  return (
    <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-600 uppercase">Category</label>
            <select name="category" className="w-full p-3 bg-white border border-gray-400 rounded-md"
            value={selectedCategory}
            onChange={handleCategoryChange}
            >
                <option value=""> -- Select Category --</option>
                {faqs.map((faq, i)=>{
                    return(
                        <option key={i}>{faq.name}</option>
                    )
                })}

            </select>
            {selectedCategory === 'Music' && <Music/>}
            {selectedCategory === 'Legal stuff' && <LegalStuff/>}
        </div>
    </form>
  )
}

export default Form