import type { InputType } from "@/shared/constants/input-types";
import type { IconType } from "@/shared/types/common-props.type";

export interface FieldConfig<V> {
   name: keyof V;
   type: InputType;
   placeholder?: string;
   ariaLabel?: string;
   icon?: IconType;
}
