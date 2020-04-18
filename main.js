export default function (stream) {
	return new Promise((resolve, reject) => {
		const contents = []
		stream.on('data', response => {
			const content = response.toString()
			contents.push(content)
		})
		
		stream.on('end', response => {
			const content = contents.join("")
			resolve(content)
		})
		
		stream.on('error', response => {
			reject(response)
		})
	})
}