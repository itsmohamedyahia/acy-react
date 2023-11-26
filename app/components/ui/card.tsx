export default function Card(props) {
  const styles =
    " p-6 bg-white border border-gray-200 rounded-lg shadow " +
    " " +
    props.className;

  return <div className={styles}>{props.children}</div>;
}
