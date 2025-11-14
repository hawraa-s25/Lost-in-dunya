import { useNavigate } from "react-router-dom";

export default function Letters() {
  const navigate = useNavigate();

  // List of letters with their index to pass in URL
  const letters = [
    {
      title: "When you feel tired",
      description: "For the weary soul who needs rest and reassurance",
      svgClass: "tired-svg",
      svgPath: (
        <>
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
        <path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path>
        </>
      )
    },
    {
      title: "When you feel far from Allah",
      description: "For the heart seeking to return home",
      svgClass: "far-svg",
      svgPath: (
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
      )
    },
    {
      title: "When life feels heavy",
      description: "For the moments when the burden feels too much to carry",
      svgClass: "heavy-svg",
      svgPath: (
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      )
    }
  ];

  return (
    <div className="letter">
      <button onClick={() => navigate("/")}>Back to Home</button>

      <div className="header">
        <h3>Letters for the Heart</h3>
        <p>Words written with love for whatever you're going through</p>
      </div>

      {letters.map((letter, index) => (
        <div
          key={index}
          className="letters-page-container"
          onClick={() => navigate(`/letters/${index}`)}
          style={{ cursor: "pointer" }}
        >
          <svg
            className={letter.svgClass}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 27"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {letter.svgPath}
          </svg>
          <div className="text-content">
            <p>{letter.title}</p>
            <p>{letter.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
