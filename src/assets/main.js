const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9if4liux3lgg4KzVfTx_0A&part=snippet%2Cid&order=date&maxResults=2';

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
    return response.json();
    
}

(async () => {
    try {
        const video = await fetchdata(API);
        let view = `
        ${video.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full"> 
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
        content.innerHTML = view;
    }catch {
        throw new Error("API Not Found");
    }

})();

//RETO DE Playground: Crea una utilidad para hacer peticiones

// const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC9if4liux3lgg4KzVfTx_0A&part=snippet%2Cid&order=date&maxResults=2"
// export async function runCode(url) {
//   try {
//     new URL(url);
//     const response = await fetch(url);
//     return response.json();
//   } catch (error) {
//     if (error.message === "Failed to construct 'URL': Invalid URL") {
//       throw new Error('Invalid URL');
//     } else {
//       throw new Error('Something was wrong');
//     }
//   }
// }
// runCode(API)