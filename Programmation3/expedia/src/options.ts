export interface Option {
    val: string | Option | Option[];
    completed: boolean;
    color: "primary" | "accent" | "warn";
    subVal?: string | Option | Option[];
}