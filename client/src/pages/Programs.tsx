import { useEffect, useState } from "react";
import "../style/programs.css";

type serieType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
};

const Programs = () => {
  const [programs, setPrograms] = useState<serieType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <div className="programs">
      <h1>Liste des séries</h1>
      <ul className="list">
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
