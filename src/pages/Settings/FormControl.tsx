import "./FormControl.css";
import Profile__FormControl__Input from "./Settings__Profile/Profile__FormControl__Input";

export default function FormControl({ label, id}) {
  let dbName = "fromDatabase";
  return (
    <div className="FormControl">
      <label htmlFor={id} className="Profile__FormControl__label">
        {label}
      </label>
      <Profile__FormControl__Input id={id} dbName={dbName}  />
    </div>
  );
}
