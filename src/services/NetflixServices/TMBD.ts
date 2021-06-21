const API_KEY = '70938a787da0a0e9e6347ac33cc9c710'
const BASE_URL = 'https://api.themoviedb.org/3'

const basicFecth = async (endPoint: string) => {
  const req = await fetch(`${BASE_URL}${endPoint}`)
  const json = req.json()

  return json
}

export interface ResultsItemsMovies {
  backdrop_path: string
  first_air_date: string
  genre_ids: number
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export type Result = Pick<ResultsItemsMovies, 'original_title' | 'poster_path'>

export interface ItemsMovies {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Movies {
  slug: string
  title: string
  items: ItemsMovies[]
}

export default {
  getHomeList: async (): Promise<Movies[]> => {
    return [
      {
        slug: 'originals',
        title: 'Originals Netflix',
        items: await basicFecth(
          `/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFecth(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFecth(
          `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFecth(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFecth(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFecth(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFecth(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFecth(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        )
      }
    ]
  }
}
