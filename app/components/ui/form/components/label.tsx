export default function FormLabel({
  id,
  label
}: {
  id: string;
  label: string;
}) {
  return (
    <label htmlFor={id} className="Profile__FormControl__label">
      {label}
    </label>
  );
}
