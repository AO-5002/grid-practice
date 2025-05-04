import Button from "./Button";

export default function Hero() {
  return (
    <section className="mt-24 flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-center">
      <div className="flex flex-col p-4 mx-8 sm:max-w-m lg:max-w-lg">
        <div className="flex flex-col items-center lg:mb-16">
          <h1 className="text-white text-6xl font-bold max-w-m">
            Your one stop Budgeting tool
          </h1>
          <p className="text-white mt-8 mb-8 text-center max-w-full text-sm/7 md:text-base lg:mb-16 lg:text-left">
            A budget is a plan for every dollar you have. It’s not magic, but it
            represents more financial freedom and a life with much less stress A
            budget is a plan,
          </p>
          <Button position={"lg:self-start"}>Get Started</Button>
        </div>
      </div>
      <img src="./src/assets/cards.png" className="m-12 lg:h-96 lg:w-96" />
    </section>
  );
}
