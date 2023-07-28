import {createBrowserRouter} from "react-router-dom";
import {MainRoutes} from "./MainRoutes/MainRoutes";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MoviesList from "../components/MoviesList/MoviesList";
import MovieListCardDetails from "../components/MovieListCardDetails/MovieListCardDetails";
import GenresPage from "../pages/GenresPage/GenresPage";

const router = createBrowserRouter([
    {
        path: MainRoutes.main,
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: MainRoutes.main,
            },
            {
                path: MainRoutes.movie,
                element: <MoviesList />
            },
            {
                path: MainRoutes.movieDetails,
                element: <MovieListCardDetails/>
            },
            {
                path: MainRoutes.genres,
                element: <GenresPage/>
            }
        ]
    }
])

export {
    router,
}