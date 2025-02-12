import { cnM } from "@/utils/styles";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return <div {...props} className={cnM("d-skeleton", className)}></div>;
};

export { Skeleton };
