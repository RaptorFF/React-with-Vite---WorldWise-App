import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { cityName } = city;
  return <li className={styles.cityItem}>{cityName}</li>;
}

export default CityItem;
