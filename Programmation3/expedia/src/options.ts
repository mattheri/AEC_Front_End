export interface Option {
    val: string | Option | Option[];
    completed: boolean;
    color: "primary" | "accent" | "warn";
    subVal?: Exclude<Option, "subVal">[];
}