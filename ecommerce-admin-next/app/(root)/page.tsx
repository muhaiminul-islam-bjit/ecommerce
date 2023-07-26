import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton
        afterSignOutUrl="/"
        userProfileMode="navigation"
        userProfileUrl={
          typeof window !== "undefined"
            ? `${window.location.origin}/profile`
            : undefined
        }
      />
    </div>
  );
};

export default SetupPage;
