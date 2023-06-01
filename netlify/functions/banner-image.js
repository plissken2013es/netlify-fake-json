exports.handler = async (event, context) => {
	const quotes = [
		'I find your lack of faith disturbing.',
		'Do. Or do not. There is no try.',
		'A long time ago in a galaxy far, far away...',
		"You're gonna need a bigger boat.",
		"Go ahead, punk, make my day.",
		"Fortune and glory, kiddo, fortune and glory...",
		"I don't drink... wine.",
		"Here's looking at you, kid.",
		"Houston, we have a problem.",
		"There's no crying in baseball!",
		"A martini. Shaken, not stirred.",
		"You can't handle the truth!",
		"Where we're going we don't need roads."
	]

	const cta = [
		"Descúbrelo",
		"Vamos a por ello",
		"Ni lo pienses",
		"¿Qué mas da?",
		"¡Hola, caracola!",
		"Miraquitivoidisí",
		"Hey, ho, let's go!"
	]
 
	const randomTitle = quotes[Math.floor(Math.random() * quotes.length)]
	const randomText = cta[Math.floor(Math.random() * cta.length)]
	const { width = "600" } = event.queryStringParameters;
	const { height = "400" } = event.queryStringParameters;
	const { targetURL = "https://www.create-store.com/es/content/1629-magazine-index" } = event.queryStringParameters
 
	const response = JSON.stringify({ 
		title: randomTitle,
		text: randomText,
		image_url: "http://placekitten.com/" + width + "/" + height,  
		height: height,
		width: width,
		target_url: targetURL
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