import { forwardRef, type ComponentProps, type ReactNode } from "react";

export const HorizontalPadding = forwardRef<
  HTMLDivElement,
  ComponentProps<"div">
>(({ ...props }, ref) => {
  return <div ref={ref} style={{ padding: "0px 20px" }} {...props} />;
});
