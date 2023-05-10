import "./Profile__FormControl.css";
import Profile__FormControl__Input from "./Profile__FormControl__Input";

export default function Profile__FormControl({ label, id }) {
  let dbName = "fromDatabase";
  return (
    <div className="Profile__FormControl">
      <label htmlFor={id} className="Profile__FormControl__label">
        {label}
      </label>
      <Profile__FormControl__Input id={id} dbName={dbName} />
    </div>
  );
}
