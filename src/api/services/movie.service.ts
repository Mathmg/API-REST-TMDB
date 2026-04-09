import { api } from '../axios-instance';
import { TMDBResponseSchema, TMDBResponse } from '../schemas/movie.schema';

export const MovieService = {
  // Função para buscar filmes com paginação
  getTopRated: async (page: number = 1): Promise<TMDBResponse> => {
    // 1. Faz a requisição HTTP
    const { data } = await api.get('/movie/top_rated', {
      params: {
        language: 'pt-BR', // Garante que venha em Português
        page: page
      }
    });

    // 2. O Zod valida o resultado e tipa os dados
    return TMDBResponseSchema.parse(data);
  }
};