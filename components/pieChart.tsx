"use client"

import { LabelList, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
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
  { browser: "Subscriptions", revenue: 260, fill: "var(--color-Subscriptions)" },
  { browser: "Ads", revenue: 150, fill: "var(--color-Ads)" },
  { browser: "Collaborations", revenue: 275, fill: "var(--color-Collaborations)" },
  { browser: "Sponsors", revenue: 160, fill: "var(--color-Sponsors)" },
  { browser: "other", revenue: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  revenue: {
    label: "Visitors",
  },
  Subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  Collaborations: {
    label: "Collaborations",
    color: "hsl(var(--chart-2))",
  },
  Ads: {
    label: "Ads",
    color: "hsl(var(--chart-3))",
  },
  Sponsors: {
    label: "Sponsors",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[232px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="revenue" hideLabel />}
            />
            <Pie data={chartData} dataKey="revenue">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm mt-28">
        <div className="flex items-center text-sm gap-2 font-medium leading-none">
          We have Subscriptions as the highest contributer to our Revenue this month 
        </div>
      </CardFooter>
    </Card>
  )
}
