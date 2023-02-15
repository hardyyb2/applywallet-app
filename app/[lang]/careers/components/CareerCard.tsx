import clsx from "clsx";

const CareerCard = () => {
  return (
    <div className={clsx("card / bg-base-200")}>
      <div className="card-body prose prose-headings:m-0 prose-p:mt-1 prose-h6:font-light prose-h6:underline">
        <h2 className="card-title">Yellow.ai</h2>
        <div>
          <h6> company description</h6>
          <p>
            <em>
              Company - Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Distinctio animi fuga rerum temporibus quasi, consequuntur
              ipsam veritatis voluptas. Eum odit ab accusantium sapiente impedit
              tenetur delectus vero quidem voluptatum perferendis.
            </em>
          </p>
        </div>

        <h3>SDE (UI)</h3>
        <div>
          <h6>role description</h6>
          <p>
            Role - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos itaque a sapiente eius nihil assumenda quaerat quis. Est
            veritatis, tempore ullam culpa aspernatur itaque et sequi
            consequatur aliquam temporibus veniam.
          </p>
        </div>

        <div>
          <h6> job description</h6>
          <p>
            <strong>
              <ul>
                <li>
                  this is the details this is the detailsthis is the detailsthis
                  is the detailsthis is the detailsthis is the details
                </li>
                <li>
                  this is the details this is the detailsthis is the detailsthis
                  is the detailsthis is the detailsthis is the details
                </li>{" "}
                <li>
                  this is the details this is the detailsthis is the detailsthis
                  is the detailsthis is the detailsthis is the details
                </li>{" "}
                <li>
                  this is the details this is the detailsthis is the detailsthis
                  is the detailsthis is the detailsthis is the details
                </li>
              </ul>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export { CareerCard };
