export default function slugify(name) {

    if (typeof name === 'string') {
        const slug = name.toLowerCase().trim().subString(0, 20).replace(' ', '-').replace(/[*+~.()'"!:@]/g, '')
        console.log(slug)
        return slug
    }

    return console.error('argument was not a string');
}