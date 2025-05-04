import { CreditCard } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Layers } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";

import ServiceBlock from "./ServiceBlock";

export default function ServicesSection() {
  return (
    <>
      <section className="mx-8 mb-24 md:col-start-1 md:col-end-5 lg:col-end-9 xl:col-start-2 xl:col-end-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ServiceBlock
            header={"Accessible and Convenient"}
            icon={<CreditCard size={40} color="#bc8afc" />}
          >
            Access the app from anywhere, anytime, stay on top of your finances.
            No unnecessary fees, and manage your finances with ease.
          </ServiceBlock>
          <ServiceBlock
            header={"Personalized Suggestions"}
            icon={<Lightbulb size={40} color="#bc8afc" />}
          >
            Our app analyzes your spending patterns and offers advice to help
            you improve your habits, helping you save more and spend less.
          </ServiceBlock>
          <ServiceBlock
            header={"Improved Financial Management"}
            icon={<Layers size={40} color="#bc8afc" />}
          >
            Our budgeting app provides a complete overview of your finances.
            Track your spending, set budgets, and monitor your progress.
          </ServiceBlock>
          <ServiceBlock
            header={"Automated expenses"}
            icon={<ChartNoAxesCombined size={40} color="#bc8afc" />}
          >
            Automatically categorizes your transactions, making it easier to
            monitor your spending and budgeting.
          </ServiceBlock>
        </div>
      </section>
    </>
  );
}
