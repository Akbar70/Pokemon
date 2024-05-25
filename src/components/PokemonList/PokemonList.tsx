import { FC, useEffect, useState } from "react";
import styles from "../PokemonList/PokemonList.module.scss";
import { useAppDispatch } from "../../store/redux-hooks";
import { setPok } from "../../store/pokS";

type AppProps = {
  pok: { name: string };
};

const PokemonList: FC<AppProps> = ({ pok }) => {
  const dispatch = useAppDispatch();
  const [p, serP] = useState<{
    name: string;
    sprites?: { back_default: string };
  } | null>(null);
  useEffect(() => {
    const getP = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok.name}`);
      const date = await res.json();
      serP(date);
    };
    getP();
  }, [pok.name]);

  const cindd = () => {
    dispatch(setPok(pok.name));
  };
  return (
    <div onClick={cindd} className={styles.Card}>
      <img src={p?.sprites?.back_default} alt="" />
      <h2>{pok.name}</h2>
    </div>
  );
};

export default PokemonList;
