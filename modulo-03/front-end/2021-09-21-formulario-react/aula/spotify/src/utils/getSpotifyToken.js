const CLIENT_ID = "9d18c669d92746d8a91f3528757a1e0d";
const CLIENT_SECRET = "0e1928e9f9164c24b0521d2cf0516e6f";

const baseURL = (id, secret) => `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`;

export default async function getSpotifyToken() {
    try {
        const response = await fetch(baseURL(CLIENT_ID, CLIENT_SECRET), {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        });

        const { access_token, token_type } = await response.json();

        return `${token_type} ${access_token}`;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
