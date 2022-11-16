const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9if4liux3lgg4KzVfTx_0A&part=snippet%2Cid&order=date&maxResults=1';

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f091fdbeamsh0936c003d4ce94bp1753ffjsnf828eb530e90',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function  fetchdata (urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data
}

(async () => {
    try {
        const video = await fetchdata(API);
        let view = `
        ${video.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,1).join("")}
        
        `;
    } catch (error) {
        
    }

})();