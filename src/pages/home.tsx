/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <ul className="menu">
            <li>yo</li>
            <li>yo</li>
            <li>yo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Home };
