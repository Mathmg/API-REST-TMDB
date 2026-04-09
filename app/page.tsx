// src/app/page.tsx
import { MovieService } from '../src/api/services/movie.service';

export default async function Page() {
  try {
    const response = await MovieService.getTopRated(1);
    const sortedMovies = [...response.results].sort((a, b) => b.vote_average - a.vote_average);
    return (
  <main style={{ padding: '2rem', background: '#111', color: '#fff', minHeight: '100vh' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#f1c40f' }}>
      🏆 Melhores Filmes
    </h1>
    
    {/* CONTAINER DAS COLUNAS */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', // <--- A MÁGICA: Define 3 colunas iguais
      gap: '30px',                          // Espaço entre os filmes
      maxWidth: '1200px',                   // Centraliza o conteúdo
      margin: '0 auto'                      // Centraliza o container na tela
    }}>
      {sortedMovies.map((movie) => (
        <div key={movie.id} style={{ 
          backgroundColor: '#222', 
          borderRadius: '12px', 
          padding: '15px',
          border: '1px solid #333'
        }}>
          <div style={{ position: 'relative' }}>
             <span style={{ 
                position: 'absolute', top: '10px', right: '10px', background: '#f1c40f', 
                color: '#000', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' 
              }}>
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
              
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                style={{ width: '100%', borderRadius: '8px' }}
              />
          </div>
          
          <h3 style={{ marginTop: '15px', fontSize: '1.1rem', textAlign: 'center' }}>
            {movie.title}
          </h3>
        </div>
      ))}
    </div>

    {/* PAGINAÇÃO */}
    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
      {/* Seus links de Anterior/Próximo aqui */}
    </div>
  </main>
);

    return (
      <main style={{ padding: '2rem' }}>
        <h1>Filmes TMDB</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {response.results.map((movie) => (
            <div key={movie.id} style={{ border: '1px solid #444', padding: '10px' }}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                style={{ width: '100%' }}
              />
              <h3>{movie.title}</h3>
              <p>Nota: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    return <div>Erro ao carregar filmes. Verifique o console.</div>;
  }
}