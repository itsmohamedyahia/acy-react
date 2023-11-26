function Main({ children }) {
  return (
    <main className="lg:pb-20 overflow-x-hidden overflow-y-auto h-[calc(100%-3.5rem)]">
      {children}
    </main>
  );
}

export default Main;
