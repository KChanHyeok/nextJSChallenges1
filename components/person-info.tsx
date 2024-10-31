import styles from "../styles/person-info.module.css";

const getPersonInfo = async (id: string) => {
  const response = await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`);
  const data = await response.json();
  return data;
};

export default async function personInfo({ id }) {
  const personInfo = await getPersonInfo(id);
  return (
    <>
      <div className={styles.container}>
        <img src={personInfo.squareImage} />
        <span className={styles.title}>{personInfo.name}</span>
        <span>Networth: {personInfo.netWorth}</span>
        <span>Country: {personInfo.country}</span>
        <span>Industry: {personInfo.industries}</span>
        <span>{personInfo.bio}</span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>Financial Assets</span>
        <div className={styles.assetscontainer}>
          {personInfo.financialAssets.map((data) => (
            <div className={styles.assetsbox}>
              <span>Ticker: {data.ticker}</span>
              <span>Shares: {data.numberOfShares.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              {data.exerciseOptionPrice && <span>Excersie Price: ${data.exerciseOptionPrice}</span>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
