const axios = require("axios");



// Translation API
const TRANSLATION_API_URL = "https://libretranslate.de/translate";

exports.englishToFrench = async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: "Please Enter the text" });
    }

    try {
        const response = await axios.post(TRANSLATION_API_URL, {
            q: text,
            source: 'en',
            target: 'fr',
        });
        const translatedText = response.data?.translatedText;
        if (!translatedText) {
            throw new Error("Translation failed. Please try again later.");
        }
        res.json({ translation: translatedText });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
