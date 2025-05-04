import { MoveRight } from "lucide-react";

export default function Button({ children, position }) {
  return (
    <>
      <button
        className={`bg-primary rounded-lg px-4 py-3 flex items-center gap-2 hover:bg-white hover:text-primary hover:cursor-pointer duration-300 ease-in-out transition-colors ${position}`}
      >
        <span className="font-semibold text-xl">{children}</span>
        <MoveRight />
      </button>
    </>
  );
}
