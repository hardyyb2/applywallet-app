import clsx from "clsx";

import { CareerType } from "../career.types";
import { careerDataMock } from "../mock/careers";

import { CareerCard } from "./CareerCard";
import { CareerCardMini } from "./CareerCardMini/CareerCardMini";

const fetchCareers = (): Promise<CareerType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(careerDataMock);
    }, 2000);
  });
};

const CareerList = async () => {
  const careers = await fetchCareers();

  return (
    <div
      className={clsx(
        "w-full / grid gap-8",
        "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
      )}
    >
      {careers.map((career) => (
        <CareerCardMini key={career.company.name} />
      ))}
    </div>
  );
};

export { CareerList };
