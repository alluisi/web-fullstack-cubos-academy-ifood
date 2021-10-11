export default function getArtistsNames(artists) {
    const artistsNames = artists.map((artist) => artist.name);
    return artistsNames.join(", ");
}
