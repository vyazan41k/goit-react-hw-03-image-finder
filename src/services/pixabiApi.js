import axios from "axios";

const fetchPictures = ({ query = "", page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=19059245-b594f8376705d9c7e4f842c86&image_type=photo&orientation=horizontal&per_page=12`
      // `https://pixabay.com/api/?key=19059245-b594f8376705d9c7e4f842c86&q=${query}&page=${page}&per_page=12`
    )
    .then((res) => res.data.hits);
};

export default { fetchPictures };

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
