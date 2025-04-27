import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex justify-end w-100">
        <ThemeToggle />
      </div>
      <h1 className="font-barlow text-blue-500">Welcome to the course</h1>
      <h1 className="  text-blue-500">Welcome to the course</h1>

      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
