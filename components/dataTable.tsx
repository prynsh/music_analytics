"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type StreamData = {
  id: string
  date: string
  streamCount: number
  artist: string
  songName: string
}

const data: StreamData[] = [
  {
    id: "1",
    date: "2025-02-12",
    streamCount: 1500,
    artist: "Taylor Swift",
    songName: "Blank Space",
  },
  {
    id: "2",
    date: "2025-02-11",
    streamCount: 1200,
    artist: "Ed Sheeran",
    songName: "Shape of You",
  },
  {
    id: "3",
    date: "2025-02-10",
    streamCount: 1800,
    artist: "Drake",
    songName: "God's Plan",
  },
  {
    id: "4",
    date: "2025-02-09",
    streamCount: 1400,
    artist: "Adele",
    songName: "Hello",
  },
  {
    id: "5",
    date: "2025-02-08",
    streamCount: 2100,
    artist: "The Weeknd",
    songName: "Blinding Lights",
  },
]
export const columns: ColumnDef<StreamData>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
        <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date <ArrowUpDown />
      </Button>
    )
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => (
        <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        StreamCount <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("streamCount")}</div>
    ),
  },
  {
    accessorKey: "artist",
    header: "Artist",
    cell: ({ row }) => <div>{row.getValue("artist")}</div>,
  },
  {
    accessorKey: "songName",
    header: "Song Name",
    cell: ({ row }) => <div>{row.getValue("songName")}</div>,
  },
]

// DataTable Component
export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [globalFilter, setGlobalFilter] = React.useState('');


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter, 
    },
  })

  return (
      <div className="w-full">
        <div>
            Your Information
        </div>
        <div className="flex items-center py-4">
        
        <Input
          placeholder="Filter by artist or song..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
