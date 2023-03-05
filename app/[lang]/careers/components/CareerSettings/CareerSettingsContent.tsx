"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

const CareerSettingsContent = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <section className="prose">
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <h2>rearrange information order</h2>
    </section>
  );
};

export { CareerSettingsContent };
