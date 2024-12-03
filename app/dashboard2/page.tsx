import { DataTable } from "@/components/data-table"
import { columns } from "./columns"
import { Suspense } from "react"

// This is a Server Component
async function getData() {
  const res = await fetch('http://localhost:8082/users', {
    // This forces the request to be refetched every time
    cache: 'no-store'
  })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function DashboardPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Dashboard 2 (Server-Side Rendered)</h1>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">{data.length}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-2xl font-bold">
              {data.filter(user => user.status === 'Active').length}
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Projects</h3>
            <p className="text-2xl font-bold">
              {data.reduce((acc, user) => acc + user.projects, 0)}
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Average Projects</h3>
            <p className="text-2xl font-bold">
              {(data.reduce((acc, user) => acc + user.projects, 0) / data.length).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading table...</div>}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  )
}
