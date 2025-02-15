'use client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import { UserNav } from "@/components/usernav"
import { CarouselPlugin } from "@/components/carousel"
import { DataTableDemo } from "./dataTable"
import { useDashboardStore } from "@/app/store"
import { useShallow } from 'zustand/shallow'
import { JSX, memo, useEffect, useState } from "react"
import { Button } from "./ui/button"

type StatCardProps = {
  title: string;
  value: number | string;
  icon: JSX.Element
  percentageChange: number;
  text: string;
};

const StatCard = memo(({ title, value, icon,percentageChange,text }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{percentageChange}% {text}</p>
    </CardContent>
  </Card>
));

StatCard.displayName = "StatCard";
const MemoizedUserNav = memo(UserNav);
const MemoizedCarousel = memo(CarouselPlugin);
const MemoizedDataTable = memo(DataTableDemo);

function DashboardPage() {
  const [totalCount,activeCount,totalStream,revenueCount,artistName] = useDashboardStore(useShallow((state) => [
    state.totalCount,
    state.activeCount,
    state.totalStream,
    state.revenueCount,
    state.artistName
  ]));
  const [darkMode, setDarkMode] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("darkMode") === "true" : true;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const percentageChanges = {
    totalCount: 12,
    activeCount: 8,
    totalStream: 15,
    revenueCount: 10,
    artistName:25,
  };

  const text = {
    totalCount: "increase from last month",
    activeCount: "increase from last month",
    totalStream: "growth in streams",
    revenueCount: "increase in revenue",
    artistName: "growth in streams",
  };

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
            <Button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button> <MemoizedUserNav />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 dark:text-white ">
                <StatCard title="Total Users" value={totalCount} percentageChange={percentageChanges.totalCount} text={text.totalCount} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>} />
                <StatCard title="Active Users" value={activeCount} percentageChange={percentageChanges.activeCount} text={text.activeCount} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>} />
                <StatCard title="Total Streams" value={totalStream} percentageChange={percentageChanges.totalStream} text={text.totalStream} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>} />
                <StatCard title="Revenue" value={revenueCount} percentageChange={percentageChanges.revenueCount} text={text.revenueCount} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>} />
                <StatCard title="Top Artist" value={artistName} percentageChange={percentageChanges.artistName} text={text.artistName} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>} />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 shadow-none border-none">
                  <CardContent className="p-0">
                    <div className="h-[350px] w-full">
                      <MemoizedCarousel />
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3 p-8 m-5">
                  <MemoizedDataTable />
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default memo(DashboardPage);
