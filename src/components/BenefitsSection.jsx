import BenefitBlock from "./BenefitBlock";

export default function BenefitsSection() {
  return (
    <>
      <section className="mx-8 mb-24 md:col-start-1 md:col-end-5 lg:col-end-9 xl:col-end-12 xl:col-start-2">
        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-2">
          <div className="hidden lg:flex lg:justify-center">
            <img
              src="./src/assets/smileguy.jpg"
              className="rounded-xl object-cover max-w-[365px] max-h-[530px]"
              alt=""
            />
          </div>
          <div className="min-w-[365px] ">
            <h1 className="text-4xl font-bold mb-4">Benefits</h1>
            <p className="mb-8 max-w-full text-xl">
              Designed to help you take control of your finances and achieve
              your financial goals. Our app is easy to use and provides a
              complete overview of your finances, allowing you to manage your
              money with confidence.
            </p>
            <div className="flex flex-col gap-8 lg:gap-12">
              <BenefitBlock>Accessible and Convenient</BenefitBlock>
              <BenefitBlock>Personalized Suggestions</BenefitBlock>
              <BenefitBlock>Improved Financial Management</BenefitBlock>
              <BenefitBlock>Automated expenses</BenefitBlock>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
