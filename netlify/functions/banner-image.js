exports.handler = async (event, context) => {
	const quotes = [
		'I find your lack of faith disturbing.',
		'Do. Or do not. There is no try.',
		'A long time ago in a galaxy far, far away...',
		"You're gonna need a bigger boat.",
		"Go ahead, punk, make my day.",
		"Fortune and glory, kiddo, fortune and glory...",
		"I don't drink... wine."
	]
 
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
	const { width = "600" } = event.queryStringParameters;
	const { height = "400" } = event.queryStringParameters;
	const { targetURL = "https://www.create-store.com/es/content/1629-magazine-index" } = event.queryStringParameters
 
	const response = JSON.stringify({ 
		text: randomQuote, 
		url: "http://placekitten.com/" + width + "/" + height,  
		height: height,
		width: width,
		targetURL: targetURL
	})
 
	return {
		statusCode: 200,
		body: response,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
		},
	}
}