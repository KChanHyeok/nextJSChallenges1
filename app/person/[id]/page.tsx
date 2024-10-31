import { Suspense } from "react";
import PersonInfo from "../../../components/person-info";

interface PersonProps {
  params: Promise<{ id: string }>;
}

export default async function Person({ params }: PersonProps) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading Person info</h1>}>
        <PersonInfo id={id} />
      </Suspense>
    </div>
  );
}
