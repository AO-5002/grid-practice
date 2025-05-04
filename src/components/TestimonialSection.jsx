import Button from "./Button";

export default function TestimonialSection() {
  return (
    <>
      <section className="mx-8 mb-24 md:col-start-1 md:col-end-5 lg:col-end-9 xl:col-end-12 xl:col-start-2">
        <div className="flex flex-col items-center gap-12 lg:flex-row ">
          <div className="flex w-full justify-center">
            <img src="src/assets/rando.png" alt="" className=" " />
          </div>
          <div className=" lg:max-w-[50%]">
            <h1 className="max-w-full font-bold text-4xl mb-4">
              Finances, made easy. Track, manage & reach your financial goals.
            </h1>
            <p className="mb-8 text-sm/7">
              Designed to help you take control of your finances and achieve
              your financial goals. Our app is easy to use and provides a
              complete overview of your finances, allowing you to manage your
              money with confidence.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
    </>
  );
}
