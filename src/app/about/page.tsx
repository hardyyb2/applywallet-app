const About = () => {
  return (
    <div className="p-4 w-full grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
      {Array(20)
        .fill(undefined)
        .map((_item, index) => (
          <div key={index} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
