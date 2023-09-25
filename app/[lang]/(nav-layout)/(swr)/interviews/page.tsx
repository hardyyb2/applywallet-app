import { cn } from "@/utils/styles.utils";

import { InterviewsList } from "./InterviewsList";

const Interviews = () => {
  return (
    <div className="p-8">
      <div
        className={cn(
          "grid w-full gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]",
        )}
      >
        <InterviewsList />
      </div>
    </div>
  );
};

export default Interviews;
