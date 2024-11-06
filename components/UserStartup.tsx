import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartupCard, { StartTypeCard } from "./StartupCard";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

const UserStartup = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((idx: number) => (
      <li key={cn("skeleton", idx)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);
export default UserStartup;
