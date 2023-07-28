import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const genreService = {
    getAllGenres: () => axiosService.get(endPoints.genres    , {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGYyMjhlYzFjYTYxYjE3YjgxZGEyM2QyYzkwZGYyNCIsInN1YiI6IjY0YmZkMTNkMDU4MjI0MDEzMDNiM2M5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvzCJTF5ajoyDofXu0gf5JqDrL4B6FABwYBipPQoSEw'
        }
    }),
}

export {
    genreService,
}