const IMG_SIZES = {
    LARGE: 0,
    MEDIUM: 1,
    SMALL: 2
};

export default function getAlbumCover(album) {
    return album.images[IMG_SIZES.SMALL].url;
}
