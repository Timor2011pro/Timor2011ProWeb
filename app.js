const APIkey = "AIzaSyCT3qx-EMhji0bnmNxTciloynsF1Qdu9qE";
const youtubeID = "UCit-gDLm3epkoxTA7VySjBQ";

const subCount = document.querySelector(".sub-count");

const getYouTubeSubs = async () => {
    const getData = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`
    );

    const ytSub = getData.data.items[0].statistics.subscriberCount;

    subCount.innerHTML = ytSub;
};

getYouTubeSubs();