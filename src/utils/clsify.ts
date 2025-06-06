import clsx from "clsx";

type Modifiers = Record<string, boolean>;

export function clsify(baseClass: string, modifiers: Modifiers = {}, rest: string[]): string {
   return clsx(
      baseClass,
      Object.entries(modifiers)
         .filter((_, isOn) => isOn)
         .map(([mod]) => `${baseClass}--${mod}`),
      ...rest
   );
}
export default clsify;
