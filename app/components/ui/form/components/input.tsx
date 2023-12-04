export default function FormInput({
  id,
  dbName = "",
  placeholder = "",
  type = "text"
}) {
  return (
    <input
      type={type}
      name={id}
      id={id}
      className="Profile__FormControl__input"
      placeholder={placeholder}
    ></input>
  );
}
