'use client'
import { employees } from '@/data/employees '
import { useState } from 'react'

type FilterType = 'all' | 'name' | 'phone'

type Employee = {
  id: number
  name: string
  phone: string
  email: string
  address: string
}

const Page = () => {
  const [search, setSearch] = useState<string>('')
  const [filterBy, setFilterBy] = useState<FilterType>('all')
  const filteredEmployees = employees.filter((emp: Employee) => {
    if (!search) return true
    if (filterBy === 'name') {
      return emp.name.toLowerCase().includes(search.toLowerCase())
    }
    if (filterBy === 'phone') {
      return emp.phone.includes(search)
    }
    return (
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.phone.includes(search)
    )
  })

  return (
    <div className=''>
      <div className=' max-w-md mx-auto p-4 space-y-4'>
        <h1 className='text-xl font-semibold text-center'>Employee Search</h1>
        {/* Filter */}
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value as FilterType)}
          className='w-full border p-2 rounded'
        >
          <option value='all'>All</option>
          <option value='name'>Name</option>
          <option value='phone'>Phone</option>
        </select>
        {/* Search */}
        <input
          type='text'
          placeholder='Type name or phone'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full border p-2 rounded'
        />
        {/* Result */}
        {filteredEmployees.length === 0 ? (
          <p className='text-gray-500'>No result found</p>
        ) : (
          <ul className='space-y-2'>
            {filteredEmployees.map((emp: Employee) => (
              <li key={emp.id} className='border p-2 rounded'>
                <p className='font-semibold'>{emp.name}</p>
                <p className='text-sm text-gray-600'>{emp.phone}</p>
                <p className='text-sm text-gray-600'>{emp.address}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Page
