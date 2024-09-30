import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage () {

//  const user = await currentUser();
// console.log(user)
  return (
    <div className=' mt-24'>
      <h1>Dashboard</h1>
      <p>This is a protected route.</p>
      <div>hello</div>
    </div>
  )
}
