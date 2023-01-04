const characterPage = ({ character }) => {
  return (
    <main>
      <h1>Character {character.name}</h1>
      <h2>Species {character.species}</h2>
      <img src={character.image} alt={character.name} />
    </main>
  );
};

export default characterPage;

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  const characters = data.results;

  const paths = characters.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();

  return {
    props: {
      character: data,
    },
  };
}
