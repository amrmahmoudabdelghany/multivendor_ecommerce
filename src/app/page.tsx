import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex gap-x-4 justify-end w-100">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="font-barlow text-blue-500">Home Page</h1>
    </div>
  );
}
