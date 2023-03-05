"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";
import { CareerInformationItem } from "../CareerInformationItem";

const CareerSettingsContent = () => {
  const [items, setItems] = useState(["1", "2"]);

  return (
    <section className="prose">
      <h2>information settings</h2>

      <Reorder.Group
        className="list-none pl-0"
        axis="y"
        values={items}
        onReorder={setItems}
      >
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <CareerInformationItem />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
};

export { CareerSettingsContent };
