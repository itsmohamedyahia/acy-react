import "./FormControl__Input.css";

export default function FormControl__Input({
  id,
  dbName,
  placeholder = "",
  type
}) {
  // ??
  if (type === "select") {
    return (
      <select
        name={id}
        title={"select "+ id}
        // className="block w-full p-2 mt-1 text-sm text-gray-900 FormControl__Input rounded-lgfocus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        className="form__select"
      >
        {id === "uni" && (
          <>
            <option selected disabled>Choose a university</option>
            <option selected value="menofia">
              Menofia University
            </option>
            <option value="cairo">Cairo University</option>
            <option value="msa">MSA University</option>
            <option value="6th">6th October University</option>
          </>
        )}
        {id === "major" && (
          <>
            <option selected>Choose a country</option>
            <option selected value="US">
              Medicine and Surgery
            </option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </>
        )}
      </select>
    );
  }

  return (
    <input
      type="text"
      name={id}
      id={id}
      className="Profile__FormControl__input"
      placeholder={placeholder}
    ></input>
  );
}
