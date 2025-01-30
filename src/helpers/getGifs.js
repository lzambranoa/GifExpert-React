export  const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=H6ED8U6WSVw9tCCKw6WoE67gLYegZCZ2&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    // innterface de la  respuesta que se va a usar
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }
    ));
    return gifs;
}