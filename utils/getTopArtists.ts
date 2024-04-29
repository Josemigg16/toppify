export async function getTopArtist() {
    const token = localStorage.getItem('access_token') as string
    const artists = fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return artists
}