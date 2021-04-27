export const getGifs = async (category) => {
    // encodeURI(string) One Punch Man => One+Punch+Man (lo prepara para una URI)
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Q0FMcpUXjZsZ4zrsmqQYVzsFuaTW5Rjx`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};