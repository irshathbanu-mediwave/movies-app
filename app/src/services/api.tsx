import axios from "axios";

const axiosIntsance = axios.create({
  baseURL: "http://localhost:5476",
});
export const getmovies = () => {
  return axiosIntsance.get("/movies");
};
interface IMovieadd {
  title: string;
  year: number;
}
export const postmovies = (load:IMovieadd) => {
    return axiosIntsance.post("/movies",load);
    //add movie
  };
  export const putmovies = (load:IMovieadd,movieid:number) => {
    return axiosIntsance.put(`/movies/${movieid}`,load);
    //update
  };
  export const deletemovies = (movieid:number) => {
    return axiosIntsance.delete(`/movies/${movieid}`);
  };