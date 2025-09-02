import { MainMenusGradientCard } from '@/components/ui/animated-card'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import Link from 'next/link'

const projects = [
    {
        name: 'Reality Club',
        href: 'https://realityclubmusic.netlify.app/',
    },
    {
        name: 'Ecofix',
        href: 'https://www.ecofix.id/',
    },
    {
        name: 'SIGMA',
        href: 'https://www.siggma-ta.com/',
    },
    {
        name: 'Academiku',
        href: 'https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1',
    },
    {
        name: 'Jiwakita',
        href: 'https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1',
    },
]

function Projects() {
    return (
        <MainMenusGradientCard
            title="Projects"
            description="Projects I have been working on and finished, both personal and work projects."
        >
            <h2 className="text-sm text-violet-600 dark:text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-violet-300/5 via-violet-400/5 to-transparent border-[2px] border-violet-600/5 rounded-3xl w-fit flex items-center">
                <FolderGit2 className="inline w-4 h-4 mr-2 duration-300" />
                Projects
            </h2>

            <ul className="body-light flex flex-col gap-4 my-5">
                {projects.map((project) => (
                    <li key={project.name}>
                        <Link
                            href={project.href}
                            rel="canonical"
                            target="_blank"
                            className="border-b py-2 w-full flex justify-between text-neutral-800 dark:text-neutral-200"
                        >
                            {project.name}
                            <ArrowUpRight />
                        </Link>
                    </li>
                ))}
            </ul>
        </MainMenusGradientCard>
    )
}

export default Projects
