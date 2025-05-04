export default function ServiceBlock({ icon, header, children }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-secondary rounded-full h-16 w-16 p-4 flex flex-col items-center justify-center mb-4">
          {icon}
        </div>

        <h3 className="font-bold mb-2">{header}</h3>
        <p className="max-w-m lg:max-w-m text-xl ">{children}</p>
      </div>
    </>
  );
}
