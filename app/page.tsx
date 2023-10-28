import { AboutMe } from '@/components/homepageComp/AboutMe'
import { Banner } from '@/components/homepageComp/Banner'
import { Hero } from '@/components/homepageComp/Hero'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Hero />
      {/* <Banner /> */}
      <Separator />
      <Separator />
      <AboutMe />
    </div>
  )
}
