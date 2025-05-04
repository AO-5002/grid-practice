import { CircleCheck } from "lucide-react";

export default function BenefitBlock({ children }) {
  return (
    <>
      <div className="flex gap-4 items-center">
        <CircleCheck color="#bc8afc" size={40} />
        <p className="text-xl">{children}</p>
      </div>
    </>
  );
}
