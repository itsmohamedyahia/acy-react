import "./FormControl.css";
import FormControl__Input from "../../../../settings/profile/formControl__Input";

export default function FormControl({ label, id, type = "input" }) {
  let dbName = "fromDatabase";
  return (
    <div className="FormControl">
      <label htmlFor={id} className="Profile__FormControl__label">
        {label}
      </label>
      <FormControl__Input id={id} dbName={dbName} type={type} />
    </div>
  );
}
