import Link from "next/link";

export default function Hello({ characters }) {
  return (
    <ul>
      {characters.results.map((character) => (
        <li key={character.name}>
          <Link href={`/characters/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}
