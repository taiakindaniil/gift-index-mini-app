import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: "Explore",
    value: "explore",
    // content: "pnpm dlx shadcn@latest add tabs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "Portfolio",
    value: "portfolio",
    // content: "npx shadcn@latest add tabs",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>npm</title>
        <path
          className="fill-current"
          d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        />
      </svg>
    ),
  },
  {
    name: "Indexes",
    value: "indexes",
    // content: "npx shadcn@latest add tabs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "Resale",
    value: "resale",
    // content: "bunx --bun shadcn@latest add tabs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    name: "Trends",
    value: "trends",
    // content: "bunx --bun shadcn@latest add tabs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h2l1-2 2 4 1-2h2" />
      </svg>
    ),
  },
];

export default function TabBar() {
  return (
    <Tabs defaultValue={tabs[0].value} className="fixed bottom-0 left-0 right-0 bg-white z-50">
      <TabsList className="h-14 w-full grid grid-cols-5 p-0 bg-background justify-start rounded-none">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex flex-col gap-0 rounded-none bg-background h-full data-[state=active]:shadow-none border-0 border-b-2 border-transparent data-[state=active]:border-primary [&>svg]:h-6 [&>svg]:w-6 [&>svg]:shrink-0"
          >
            <div className="h-6 w-6 flex items-center justify-center">
              {tab.icon}
            </div>
            <span className="text-xs mt-1 font-medium">
              {tab.name}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
