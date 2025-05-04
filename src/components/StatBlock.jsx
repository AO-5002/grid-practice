export default function StatBlock({ stat, description }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="font-bold text-5xl mb-2">
          {stat}
          <span className="text-primary">+</span>
        </span>
        <p>{description}</p>
      </div>
    </>
  );
}
