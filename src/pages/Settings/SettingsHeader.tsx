export default function SettingsHeader({heading, desc}) {
    return ( <div className="">
    <h2 className="font-semibold leading-7">{heading}</h2>
    <p style={{ maxWidth: "40ch" }}>
     {desc}
    </p>
  </div>)
}