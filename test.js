import {
	Readable
} from "stream"
import {
	expect
} from "chai"
import toSlug from "../main.js"
import {
	generateParagraph as loremIpsum
} from 'dummy-text-generator'
import {stream} from "../components/component.stream"

const string = loremIpsum(10, 10).split('.')
const read = new Readable()
describe("Testing stream `module`", function ( ) {
	it("Testing response against streamlined text", function ( ) {
	stream.toString(read)
		.then(response => {
			expect(response).to.deep.equal(string.join(""))
		})
	})
	
	string.map(str => read.push(str))
	read.push(null)
})