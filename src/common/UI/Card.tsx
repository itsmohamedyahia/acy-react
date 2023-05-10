export default function Card(props) {
  const styles =
    " p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" +
    " " +
    props.addClass;

  return <div className={styles}>{props.children}</div>;
}
