export default function HeroSection({ children }) {
  return (
    <section className="bg-secondary min-h-screen xs:p-4 sm:p-4 md:col-start-1 md:col-end-5 lg:col-end-9 xl:col-end-13">
      <div className="xl:col-start-2 xl:col-end-12">{children}</div>
    </section>
  );
}
