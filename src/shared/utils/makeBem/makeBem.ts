import clsx from "clsx";

export const makeBem = (block: string, modifier?: string) => (base: string) =>
   clsx(
      base,
      `${block}__${base}`,
      modifier && `${block}__${base}--${modifier}`
   );
