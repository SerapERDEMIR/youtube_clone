import axios from "axios";

// yapıcağımız bütün api isteklerihin başına bu url'i ekler
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
    params: { geo: 'TR', lang: 'tr' },
    headers: {
      'X-RapidAPI-Key': '9f3f8f38d0msh179564bb64f635ep17229bjsn675f71cb2ab1',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

// parametre olark aldığı url'e api isteği atıp
// elde ettiği sonucu döndüren yardımcı fonk.
export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
