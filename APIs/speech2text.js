// Setting up a Node.js dev env: https://cloud.google.com/nodejs/docs/setup
// speech to text: https://www.youtube.com/watch?v=naZ8oEKuR44
// install node.js client 
// npm install --save @google-cloud/speech
const speech = require('@google-cloud/speech');

async function main() {

	// Speech2text
	const client = new speech.SpeechClient();
	const filename = 'the path of audio.raw';

	const file = fs.readFileSync(filename);
	const audioBytes = file.toString('base64');

	const audio = {
		content : audioBytes
	};

	const config = {
		encoding: 'LINEAR16',
		sampleRateHertz: 16000,
		languageCode: 'en-US'
	};

	const request = {
		audio: audio,
		config: config
	};

	const [response] = await client.recognize(request);
}