"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Icon } from "components";
import clsx from "clsx";

export const Accordion = ({ title, items }) => {
  for (const item of items) {
    const { title: itemTitle, text } = item;
    if (!itemTitle || !text)
      throw new Error("Accordion items must have a title and text.");
  }

  return (
    <section className="container flex flex-col gap-y-4 px-6 sm:px-20">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="flex flex-col divide-y divide-[#edede3] rounded-md border-[0.5px] border-[#edede3]/50 bg-[#443b4a]">
        {items.map((item, index) => {
          const { title: itemTitle, text } = item;
          return (
            <Disclosure
              key={`accordion-item-${index}`}
              as="div"
              className="w-full"
            >
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full flex-row items-center justify-between p-4 text-xl font-bold text-[#edede3]">
                    <div className="flex flex-row gap-x-2">
                      <p>{`${index + 1}.`}</p>
                      <p className="text-start">{itemTitle}</p>
                    </div>

                    <Icon
                      name="ChevronDown"
                      size="medium"
                      className={clsx(
                        "durartion-200 flex-shrink-0 transform transition-transform",
                        { "rotate-180": open },
                      )}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="p-4 font-bold text-[#edede3]">
                    {text}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </section>
  );
};
