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

	const ctas = [
		"Descúbrelo",
		"Vamos a por ello",
		"Ni lo pienses",
		"¿Qué más dará?",
		"¡Hola, caracola!",
		"Miraquitivoidisí",
		"Hey, ho, let's go!"
	]

	const urls = [
		"https://www.create-store.com/es/20772-comprar-mediterranean-collection",
		"https://www.create-store.com/es/content/2159-magazine-create-air",
		"https://www.create-store.com/es/content/2107-magazine-mom-camp-con-maria-y-teresa",
		"https://www.create-store.com/es/content/2100-magazine-mom-camp",
		"https://www.create-store.com/es/content/2090-magazine-big-little-things",
		"https://www.create-store.com/es/content/2055-recetas-blue-boom",
		"https://www.create-store.com/es/content/2050-magazine-blue-boom",
		"https://www.create-store.com/es/content/2048-magazine-sweet-valentine"
	]
 
	const randomTitle = quotes[Math.floor(Math.random() * quotes.length)]
	const randomText = ctas[Math.floor(Math.random() * ctas.length)]
	const targetURL = urls[Math.floor(Math.random() * urls.length)]
	const { width = "600" } = event.queryStringParameters;
	const { height = "400" } = event.queryStringParameters;
 
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