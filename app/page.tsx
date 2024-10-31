import styles from "../styles/home.module.css";
import Person from "../components/person";

const getbillionaries = async () => {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const data = await response.json();
  return data;
};

export default async function home() {
  const billPerson = await getbillionaries();
  return (
    <div className={styles.container}>
      {billPerson.map((data) => (
        <Person
          key={data.id}
          id={data.id}
          industries={data.industries}
          name={data.name}
          net_worth={data.netWorth}
          square_image={data.squareImage}
        />
      ))}
    </div>
  );
}
