import { motion } from "framer-motion";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";
import { accordionItems } from "./accordionItems";

const TableAccordion = () => {
  const [activeItem, setActiveItem] = useState(1);

  // Function to handle the toggle of each item
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Box>
        <Title title="Table Accordion Active background" />
        <div className="mx-auto flex flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-primary/100">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className="border-b-[1px] border-slate-200 last:border-0 dark:border-b-primary/100"
            >
              <div
                className={`flex cursor-pointer items-center justify-between bg-white p-3 text-black transition-all hover:bg-[#F2F2F2] hover:text-black dark:bg-[#11112b] dark:text-white dark:hover:bg-primary/100 dark:hover:text-white ${
                  activeItem === item.id
                    ? "!bg-[#F2F2F2] dark:!bg-primary/100 dark:text-white dark:hover:text-white"
                    : ""
                } `}
                onClick={() => toggleItem(item.id)}
              >
                <h4 className="text-[15px] font-semibold">{item.title}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down transition-transform ${
                    activeItem === item.id ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeItem === item.id ? 1 : 0,
                  height: activeItem === item.id ? "auto" : 0,
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <article className="bg-transparent p-3 text-sm text-slate-600 dark:text-slate-200">
                  {item.content}
                </article>
              </motion.div>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default TableAccordion;