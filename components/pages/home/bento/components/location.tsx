import { BentoCard } from '@/components/ui/bento-card'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

function Location() {
    return (
            <BentoCard>
                <h2 className="text-sm text-violet-600 dark:text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-violet-300/5 via-violet-400/5 to-transparent border-[2px] border-violet-600/5 rounded-3xl w-fit flex items-center">
                    <MapPin className="inline w-4 h-4 mr-2  duration-300" />
                    Location
                </h2>
                <div className="rounded-xl mt-5">
                    <div className="relative rounded-xl">
                        <Image
                            src="/location.png"
                            width={1000}
                            height={1000}
                            alt="Location in Bekasi, West Java"
                            className="w-full z-20 rounded-xl object-cover aspect-video neutralscale dark:invert"
                        />
                        <div className="absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light rounded-xl"></div>
                    </div>
                </div>
            </BentoCard>
    )
}

export default Location
