console.log('@@@ Conectado...')

document.addEventListener('DOMContentLoaded', () => {
    loadData(city = null)
})

const loadData = async (city) => {
    if (!city) {
        city = 'new york'
    }
    const url =  `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${city}&limit=5`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
		'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
	}
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('@@@ result =>', result);
    } catch (error) {
        console.error(error);
    }
}