"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2023-01-01", desktop: 222, mobile: 150 },
  { date: "2023-01-02", desktop: 97, mobile: 180 },
  { date: "2023-01-03", desktop: 167, mobile: 120 },
  { date: "2023-01-04", desktop: 242, mobile: 260 },
  { date: "2023-01-05", desktop: 373, mobile: 290 },
  { date: "2023-01-06", desktop: 301, mobile: 340 },
  { date: "2023-01-07", desktop: 245, mobile: 180 },
  { date: "2023-01-08", desktop: 409, mobile: 320 },
  { date: "2023-01-09", desktop: 59, mobile: 110 },
  { date: "2023-01-10", desktop: 261, mobile: 190 },
  { date: "2023-01-11", desktop: 327, mobile: 350 },
  { date: "2023-01-12", desktop: 292, mobile: 210 },
  { date: "2023-02-01", desktop: 342, mobile: 380 },
  { date: "2023-02-02", desktop: 137, mobile: 220 },
  { date: "2023-02-03", desktop: 120, mobile: 170 },
  { date: "2023-02-04", desktop: 138, mobile: 190 },
  { date: "2023-02-05", desktop: 446, mobile: 360 },
  { date: "2023-02-06", desktop: 364, mobile: 410 },
  { date: "2023-02-07", desktop: 243, mobile: 180 },
  { date: "2023-02-08", desktop: 89, mobile: 150 },
  { date: "2023-02-09", desktop: 137, mobile: 200 },
  { date: "2023-02-10", desktop: 224, mobile: 170 },
  { date: "2023-03-23", desktop: 138, mobile: 230 },
  { date: "2023-03-24", desktop: 387, mobile: 290 },
  { date: "2023-03-25", desktop: 215, mobile: 250 },
  { date: "2023-03-26", desktop: 75, mobile: 130 },
  { date: "2023-03-27", desktop: 383, mobile: 420 },
  { date: "2023-03-28", desktop: 122, mobile: 180 },
  { date: "2023-03-29", desktop: 315, mobile: 240 },
  { date: "2023-03-30", desktop: 454, mobile: 380 },
  { date: "2023-04-01", desktop: 165, mobile: 220 },
  { date: "2023-04-02", desktop: 293, mobile: 310 },
  { date: "2023-04-03", desktop: 247, mobile: 190 },
  { date: "2023-04-04", desktop: 385, mobile: 420 },
  { date: "2023-04-05", desktop: 481, mobile: 390 },
  { date: "2023-04-06", desktop: 498, mobile: 520 },
  { date: "2023-04-07", desktop: 388, mobile: 300 },
  { date: "2023-04-08", desktop: 149, mobile: 210 },
  { date: "2023-04-09", desktop: 227, mobile: 180 },
  { date: "2023-05-10", desktop: 293, mobile: 330 },
  { date: "2023-05-11", desktop: 335, mobile: 270 },
  { date: "2023-05-12", desktop: 197, mobile: 240 },
  { date: "2023-05-13", desktop: 197, mobile: 160 },
  { date: "2023-05-14", desktop: 448, mobile: 490 },
  { date: "2023-05-15", desktop: 473, mobile: 380 },
  { date: "2023-05-16", desktop: 338, mobile: 400 },
  { date: "2023-05-17", desktop: 499, mobile: 420 },
  { date: "2023-05-18", desktop: 315, mobile: 350 },
  { date: "2023-05-19", desktop: 235, mobile: 180 },
  { date: "2023-06-20", desktop: 177, mobile: 230 },
  { date: "2023-06-21", desktop: 82, mobile: 140 },
  { date: "2023-06-22", desktop: 81, mobile: 120 },
  { date: "2023-06-23", desktop: 252, mobile: 290 },
  { date: "2023-06-24", desktop: 294, mobile: 220 },
  { date: "2023-06-25", desktop: 201, mobile: 250 },
  { date: "2023-06-26", desktop: 213, mobile: 170 },
  { date: "2023-06-27", desktop: 420, mobile: 460 },
  { date: "2023-07-28", desktop: 233, mobile: 190 },
  { date: "2023-07-29", desktop: 78, mobile: 130 },
  { date: "2023-07-30", desktop: 340, mobile: 280 },
  { date: "2023-07-31", desktop: 178, mobile: 230 },
  { date: "2023-07-01", desktop: 178, mobile: 200 },
  { date: "2023-07-02", desktop: 470, mobile: 410 },
  { date: "2023-07-03", desktop: 103, mobile: 160 },
  { date: "2023-07-04", desktop: 439, mobile: 380 },
  { date: "2023-07-05", desktop: 88, mobile: 140 },
  { date: "2023-07-06", desktop: 294, mobile: 250 },
  { date: "2023-08-07", desktop: 323, mobile: 370 },
  { date: "2023-08-08", desktop: 385, mobile: 320 },
  { date: "2023-08-09", desktop: 438, mobile: 480 },
  { date: "2023-08-10", desktop: 155, mobile: 200 },
  { date: "2023-08-11", desktop: 92, mobile: 150 },
  { date: "2023-08-12", desktop: 492, mobile: 420 },
  { date: "2023-08-13", desktop: 81, mobile: 130 },
  { date: "2023-09-14", desktop: 426, mobile: 380 },
  { date: "2023-09-15", desktop: 307, mobile: 350 },
  { date: "2023-09-16", desktop: 371, mobile: 310 },
  { date: "2023-09-17", desktop: 475, mobile: 520 },
  { date: "2023-10-18", desktop: 107, mobile: 170 },
  { date: "2023-10-19", desktop: 341, mobile: 290 },
  { date: "2023-10-20", desktop: 408, mobile: 450 },
  { date: "2023-10-21", desktop: 169, mobile: 210 },
  { date: "2023-10-22", desktop: 317, mobile: 270 },
  { date: "2023-10-23", desktop: 480, mobile: 530 },
  { date: "2023-11-24", desktop: 132, mobile: 180 },
  { date: "2023-11-25", desktop: 141, mobile: 190 },
  { date: "2023-11-26", desktop: 434, mobile: 380 },
  { date: "2023-12-27", desktop: 448, mobile: 490 },
  { date: "2023-12-28", desktop: 149, mobile: 0 },
  { date: "2023-12-29", desktop: 103, mobile: 0 },
  { date: "2023-12-30", desktop: 446, mobile: 0},
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Overview() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <ResponsiveContainer width="100%" aspect={1}>

    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>User Growth Chart</CardTitle>
          <CardDescription>
            This Chart shows growth of users for the last 12 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
              key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t p-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
                >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
           className="w-full h-[300px]"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  />
                }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
              />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
    </ResponsiveContainer>          
  )
}
