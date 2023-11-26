export default function Form({action, className="", children}) {
  return (
    <form className={className} action={action} method="POST">
     {children}
    </form>
  );
}

