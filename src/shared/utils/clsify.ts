import clsx from "clsx";

type Modifiers = (string | undefined | false)[];

const clsify = (
   baseClass: string,

   modifiers: Modifiers = [],

   rest: (string | undefined)[] = []
): string => {
   const modClasses = modifiers.filter(Boolean).map((mod) => `${baseClass}--${mod}`);

   return clsx(baseClass, modClasses, ...rest.filter(Boolean));
};

export default clsify;
