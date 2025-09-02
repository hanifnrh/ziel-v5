import { BentoCard } from '@/components/ui/bento-card'
import { Languages, Target, Timer } from 'lucide-react'
import { FaRegKeyboard } from 'react-icons/fa'

function TypingSpeed() {
    return (
        <div className="hidden lg:block">
            <BentoCard>
                <h2 className="text-sm text-violet-600 dark:text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-violet-300/5 via-violet-400/5 to-transparent border-[2px] border-violet-600/5 rounded-3xl w-fit flex items-center">
                    <FaRegKeyboard className="inline w-4 h-4 mr-2 duration-300" />
                    Typing Speed
                </h2>

                <div className="mt-5 flex justify-start items-end body-bold text-neutral-800 dark:text-neutral-200">
                    <h3 className="text-6xl xl:text-8xl">
                        116
                    </h3>
                    <p className="text-lg">
                        wpm
                    </p>
                </div>

                <div className="mt-5 flex sm:items-start gap-2 lg:gap-0 lg:justify-between body-light text-sm text-neutral-600 dark:text-neutral-200 px-1">
                    <p className="inline-flex items-center justify-center">
                        <Timer size={15} className="mr-1" />
                        1 minute
                    </p>
                    <p className="inline-flex items-center justify-center">
                        <Target size={15} className="mr-1" />
                        99%
                    </p>
                    <p className="inline-flex items-center justify-center">
                        <Languages size={15} className="mr-1" />
                        ID
                    </p>
                </div>

            </BentoCard>
        </div>
    )
}

export default TypingSpeed
