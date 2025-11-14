import { useParams } from "react-router-dom";
import lettersData from "./lettersContent.json";
import { useNavigate } from "react-router-dom";

export default function LettersDetail() {
  const { id } = useParams();
  const letter = lettersData[id];
  const navigate = useNavigate()

  if (!letter) return <p>Letter not found</p>;

  return (

    <div className="letter-detail">
        <button onClick={()=>navigate("/letters")}>Back to letters</button>
      <div className="letter-box">
        <h3 className="letter-title">{letter.title}</h3>

        <p className="letter-heading">{letter.heading}</p>

        <div>
          {letter.content.split("\n").map((line, idx) => (
            <p key={idx} className="letter-paragraph">
              {line}
            </p>
          ))}
        </div>

        {letter.verse && (
          <p className="letter-verse">{letter.verse}</p>
        )}

        <div className="letter-signature">
          <p>Your Cousin / Best Friend</p>
          <p>Hawraa</p>
        </div>
      </div>
    </div>
  );
}
