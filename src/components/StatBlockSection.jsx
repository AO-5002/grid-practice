import StatBlock from "./StatBlock";

export default function StatBlockSection() {
  return (
    <>
      <section className="bg-white text-black shadow flex justify-center items-center rounded-2xl min-w-[358px] min-h-[434px] mt-24 p-8 mx-8 mb-24 md:col-start-1 md:col-end-5 lg:col-end-9 lg:min-h-[170px] xl:col-end-12 xl:col-start-2">
        <div className="flex flex-col p-4 h-full justify-between m-2 gap-8 lg:flex-row lg:items-center lg:w-full">
          <StatBlock stat={"10K"} description={"Active Users"} />
          <StatBlock stat={"$2M"} description={"Transaction"} />
          <StatBlock stat={"70"} description={"Countries"} />
        </div>
      </section>
    </>
  );
}
