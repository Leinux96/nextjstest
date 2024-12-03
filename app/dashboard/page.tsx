'use client'
import { DataTable } from "@/components/data-table"
import { columns } from "./columns"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const res = await fetch('http://localhost:8082/users', {
          cache: 'no-store'
        })
       
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
       
        const jsonData = await res.json()
        setData(jsonData)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
  
  if (isLoading) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  if (error) {
    return <div className="container mx-auto py-10">Error: {error}</div>
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
