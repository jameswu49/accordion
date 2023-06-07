import arrow from "./images/arrow-down.svg"
import { useState } from "react"

const questions = [
    { id: 1, text: 'How many team members can I invite?', subtext: "Our capacity can fit around 100-200 people!" },
    { id: 2, text: 'What is the maximum file upload size?', subtext: "No more than 2GB. All files in your account must fit your allotted storage space." },
    { id: 3, text: 'How do I reset my password?', subtext: "Reach out to support and they will be able to assist you with resetting your password." },
    { id: 4, text: 'Can I cancel my subscription?', subtext: "Yes, you can cancel it at anytime during your subscription." },
    { id: 5, text: 'Do you provide any additional support?', subtext: "Of course! Please reach out to customer support and they would be happy to assist you." }
]

export function Text() {
    const [clickedId, setClickedId] = useState(null)

    function expandArrow(id) {
        if (id === clickedId) {
            // Clicked on the same question, close it
            setClickedId(null);
        } else {
            // Clicked on a different question, toggle it
            setClickedId(id);
        }
    }

    return (
        <>
            <div className="h-3/4 md:h-full md:w-1/2 md:mr-10">
                <FAQ />
                <Questions expandArrow={expandArrow} clickedId={clickedId} />
            </div>
        </>
    )
}

function FAQ() {
    return (
        <>
            <div className="h-[10%] md:mt-10">
                <h1 className="text-center kumbh-700 text-3xl md:text-left">FAQ</h1>
            </div>
        </>
    )
}

function Questions({ expandArrow, clickedId }) {
    return (
        <>
            {questions.map((question) => (
                <>
                    <div key={question.id} className="h-[13%] flex items-center px-8 justify-between kumbh-400 blue md:pl-0 md:pr-20">
                        <p className={`hover:text-soft-red cursor-pointer ${question.id === clickedId ? "kumbh-700" : ''}`} onClick={() => expandArrow(question.id)}>
                            {question.text}
                        </p>
                        <img className="cursor-pointer" src={arrow} alt="" onClick={() => expandArrow(question.id)} />
                    </div>
                    <div className={`${question.id === clickedId ? 'subtext-expanded' : 'subtext-hidden'} px-8 pb-3 text-greyish-blue md:px-0 md:mr-12`}>{question.subtext}</div>
                    <hr className="mx-8 divider md:ml-0 md:mr-12" />
                </>
            ))}

        </>
    )
}