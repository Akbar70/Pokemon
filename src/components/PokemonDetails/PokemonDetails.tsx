import { useAppSelector } from "../../store/redux-hooks";
import styles from "./PokemonDetails.module.scss";
import { useEffect, useState } from "react";
const PokemonDetails = () => {
  const name = useAppSelector((s) => s.pokS.name);
  const [p, serP] = useState<{
    name: string;
    sprites?: { back_default: string };
    stats: Array<{ base_stat?: number }>;
    abilities: Array<{ ability: { name: string } }>;
  } | null>(null);
  useEffect(() => {
    const getP = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name || "charmander"}`
      );
      const date = await res.json();
      serP(date);
    };
    getP();
  }, [name]);
  return (
    <>
      <div className={styles.PokemonDetails}>
        <h1>{p?.name}</h1>
        <img src={p?.sprites?.back_default} alt="" />
        <div className={styles.abilities}></div>
        <div className={styles.abilities}>
          {p?.abilities.map((el) => (
            <div className={styles.group}>
              <h2>{el.ability.name}</h2>
            </div>
          ))}
        </div>
        <div className={styles.BaseStat}>
          <h3>HP: {p?.stats?.[0].base_stat}</h3>
          <h3>atack: {p?.stats?.[1].base_stat}</h3>
          <h3>special-atack: {p?.stats?.[3].base_stat}</h3>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
