
import MoviesList from "./components/MoviesList";

function App() {
  

  return (
    <>
      <div id="movies">
        <h1>Favorite Movies:</h1>
        <MoviesList
          movies={[
            {
              title: "The Matrix",
              description:
                "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
              genre: "Action"
            },
            {
              title: "Independence Day",
              description:
                "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
              genre: "Action"
            },
            {
              title: "Forrest Gump",
              description:
                "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
              genre: "Drama"
            },
            {
              title: "Terminator 2",
              description:
                "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
              genre: "Action"
            },
            {
              title: "Transformers",
              description:
                "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.",
              genre: "Action"
            },
            {
              title: "Avatar",
              description:
                "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
              genre: "Action"
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
