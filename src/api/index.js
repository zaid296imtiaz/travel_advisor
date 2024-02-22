import axios from "axios";

const options = {
  method: "POST",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/v2/list",
  params: {
    currency: "USD",
    units: "km",
    lang: "en_US",
  },
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "354e3deb21msh736fc26e9785d04p12c02fjsn6e12702bf48c",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
  data: {
    geoId: 293928,
    partySize: 2,
    reservationTime: "2022-03-07T20:00",
    sort: "POPULARITY",
    sortOrder: "desc",
    filters: [
      {
        id: "establishment",
        value: ["10591"],
      },
    ],
    boundingBox: {
      northEastCorner: {
        latitude: 12.248278039408776,
        longitude: 109.1981618106365,
      },
      southWestCorner: {
        latitude: 12.243407232845051,
        longitude: 109.1921640560031,
      },
    },
    updateToken: "",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
