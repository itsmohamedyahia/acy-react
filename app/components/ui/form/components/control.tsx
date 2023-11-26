import "./control.css";
import FormControlInput from "../../../../settings/profile/formControlInput";

export default function FormControl({ label, id, type = "input" }) {
  let dbName = "fromDatabase";
  return (
    <div className="FormControl">
      <label htmlFor={id} className="Profile__FormControl__label">
        {label}
      </label>
      <FormControlInput id={id} dbName={dbName} type={type} />
    </div>
  );
}
