const URI = process.env.VERCEL_URL || "http://localhost:3000";

export default async function fetchData(route, params = '') {
    try {
        const res = await fetch(`${URI}/api/${route}${params}`);
        const data = await res.json();
        return data
    } catch (error) {
        return console.error(error)
    }
}