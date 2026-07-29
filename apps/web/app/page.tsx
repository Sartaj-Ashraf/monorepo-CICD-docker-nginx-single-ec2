import { prismaClient } from "db/client";

console.log("DATABASE_URL =", process.env.DATABASE_URL);
export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}


// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'