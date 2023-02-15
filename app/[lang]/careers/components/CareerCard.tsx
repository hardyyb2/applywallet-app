import clsx from "clsx";

const CareerCard = () => {
  return (
    <div className={clsx("card  / prose prose-h2:m-0 / bg-base-100")}>
      <div className="card-body">
        <h2 className="card-title">Yellow.ai</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export { CareerCard };
