import "./select.css";

export default function FormSelect({
  id,
  nonoption,
  options
}: {
  id: string;
  nonoption: string;
  options: Object;
}) {
  return (
    <select name={id} title={"select " + id} className="form__select">
      <>
        <option selected disabled>
          {nonoption}
        </option>
        {Object.entries(options).map((array) => {
          <option value={array[0]}>array[1]</option>;
        })}
      </>
    </select>
  );
}
