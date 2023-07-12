import {faqs} from '../data'

const LegalStuff = () => {
    const lStuff = faqs.find((faq)=> faq.name === 'Legal stuff')
    console.log(lStuff)
    const lStuffChild = lStuff.children
    console.log(lStuffChild)


  return (
    <>
    
        {lStuffChild.map(({question, answer}, id) =>{
            return(
                <div className='my-5' key={id}>
                    <h4 className='font-bold bg-gray-100'>{question}</h4>
                    <p >{answer}</p>
                </div>
            )
        })}
       
    </>
    
  )
}

export default LegalStuff