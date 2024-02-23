import React, { Fragment, useState } from 'react'
import '../App.css';

const Translator = () => {

    const [englishtext, setEnglishText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const translator = async () => {
        try {
            const responce = await fetch("api/v1/translator", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: englishtext })
            })
            const data = await responce.json();
            console.log(data.translation)
            setTranslatedText(data.translation)

        } catch (error) {
            console.log("Error:", error)
        }
    }

    return (
        <Fragment>
            <div className='container'>
                <div>
                    <div>
                        <h2>Enter Your Text here(in English):</h2>
                        <input type='text' value={englishtext} onChange={(e) => setEnglishText(e.target.value)} />
                    </div>
                    <button onClick={translator}>Translate</button>
                    <div>
                        <h2>Tranlated to French:</h2>
                        <p>
                            {translatedText}
                        </p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Translator