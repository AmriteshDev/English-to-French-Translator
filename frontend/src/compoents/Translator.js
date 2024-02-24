import React, { Fragment, useState } from 'react'
import '../App.css';
import Loader from './Loader';

const Translator = () => {

    const [englishtext, setEnglishText] = useState("");
    const [loading, setLoading] = useState(false);
    const [translatedText, setTranslatedText] = useState("");
    const translator = async () => {
        setLoading(true)
        try {
            const responce = await fetch("app/api/v1/translator", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: englishtext })
            })
            const data = await responce.json();
            console.log(data.translation)
            setTranslatedText(data.translation)
            setLoading(false)

        } catch (error) {
            console.log("Error:", error)
        }
    }

    return (
        <Fragment>
            {
                loading ? <Loader /> :
                    <Fragment>
                        <div className='container'>

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
                    </Fragment>
            }
        </Fragment>
    )
}

export default Translator