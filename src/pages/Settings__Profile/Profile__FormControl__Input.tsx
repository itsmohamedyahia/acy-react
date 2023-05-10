import "./Profile__FormControl__Input.css";

export default function Profile__FormControl__Input({
  id,
  dbName,
  placeholder
}) {
  if (id === "uni" || id === "major") {
    return (
      <select
        disabled
        id="countries_disabled"
        // className="block w-full p-2 mt-1 text-sm text-gray-900 Profile__FormControl__Input rounded-lgfocus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        className="form__select"
      >
        {id === "uni" && (
          <>
            <option selected>Choose a country</option>
            <option selected value="US">
              Menofia University
            </option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
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
