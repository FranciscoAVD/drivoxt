import { cn } from "@/lib/utils";

export default function Blob({
  className,
  active,
}: {
  className?: string;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        ` flex items-center justify-center h-9 w-9 rounded-full ${className}`,
        {
          "bg-[#FFE1A9]": active === true,
          "bg-[#E5D7BB]": active === false,
        }
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center h-6 w-6 rounded-full ",
          {
            "bg-[#FFCF76]": active === true,
            "bg-[#B7AC96]": active === false,
          }
        )}
      >
        <div
          className={cn("h-3 w-3 rounded-full ", {
            "bg-accent/70": active === true,
            "bg-[#807768]": active === false,
          })}
        />
      </div>
    </div>
  );
}
