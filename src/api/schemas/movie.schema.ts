import { z } from 'zod';

// Validação do filme individual
export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  release_date: z.string(),
});

// Validação da resposta paginada do TMDB
export const TMDBResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

// Exportação dos tipos para usar no seu código
export type Movie = z.infer<typeof MovieSchema>;
export type TMDBResponse = z.infer<typeof TMDBResponseSchema>;