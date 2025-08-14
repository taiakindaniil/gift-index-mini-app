import { type PropsWithChildren } from 'react'
import ProfileCard from './customized/card/profileCard'
import TabBar from '@/components/customized/tabs/tabs'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="flex flex-col items-center content-center overflow-auto pb-20">
        <ProfileCard />
        {children}
      </main>
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <TabBar />
      </div>
    </div>
  );
} 