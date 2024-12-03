import { NextResponse } from 'next/server'

// Simulating database data
const users = [
  {
    id: "1",
    name: "Marco Rossi",
    email: "marco@example.com",
    role: "Developer",
    status: "Active",
    lastLogin: "2024-01-15",
    country: "Italy",
    projects: 5
  },
  {
    id: "2",
    name: "Giuseppe Verdi",
    email: "giuseppe@example.com",
    role: "Designer",
    status: "Active",
    lastLogin: "2024-01-14",
    country: "Italy",
    projects: 3
  },
  {
    id: "3",
    name: "Sofia Bianchi",
    email: "sofia@example.com",
    role: "Manager",
    status: "Inactive",
    lastLogin: "2024-01-10",
    country: "Italy",
    projects: 8
  },
  {
    id: "4",
    name: "Luca Ferrari",
    email: "luca@example.com",
    role: "Developer",
    status: "Active",
    lastLogin: "2024-01-13",
    country: "Italy",
    projects: 4
  },
  {
    id: "5",
    name: "Anna Romano",
    email: "anna@example.com",
    role: "Designer",
    status: "Active",
    lastLogin: "2024-01-12",
    country: "Italy",
    projects: 6
  },
]

export async function GET() {
  // Simulate database delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return NextResponse.json(users)
}
