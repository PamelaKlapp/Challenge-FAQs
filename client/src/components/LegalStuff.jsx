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
                <div key={id}>
                    <h4>{question}</h4>
                    <p>{answer}</p>
                </div>
            )
        })}
    </>
    
  )
}

export default LegalStuff