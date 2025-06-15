/* eslint-disable no-nested-ternary */
import { RiFlutterFill, RiReactjsFill, RiGithubFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';

const projectItem = ({
  framework = '',
  title = '',
  date = '',
  description = '',
  url = '',
  techStack = [''],
}) => (
  <motion.div
    className='card-modern p-6 h-full group hover:shadow-glow transition-all duration-300'
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <div className='flex flex-col h-full'>
      <div className='flex items-start justify-between mb-4'>
        <div className='flex-1'>
          <h3 className='text-xl font-bold text-neutral-100 mb-2 group-hover:text-primary-400 transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-sm text-neutral-400 font-medium'>{date}</p>
        </div>

        <div className='flex items-center space-x-2 text-primary-400'>
          <span className='text-sm font-semibold uppercase tracking-wider'>
            {framework}
          </span>
          {framework === 'React' ? (
            <RiReactjsFill size={24} />
          ) : framework === 'NextJS' ? (
            <TbBrandNextjs size={24} />
          ) : framework === 'Flutter' ? (
            <RiFlutterFill size={24} />
          ) : (
            <RiGithubFill size={24} />
          )}
        </div>
      </div>

      <p className='text-neutral-300 text-sm leading-relaxed mb-6 flex-1'>
        {description}
      </p>

      <div className='flex flex-wrap gap-2 mb-6'>
        {techStack.map((tech) => (
          <span
            key={tech}
            className='px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30'
          >
            #{tech}
          </span>
        ))}
      </div>

      <motion.a
        target='_blank'
        href={url}
        rel='noopener noreferrer'
        className='inline-flex items-center text-primary-400 hover:text-primary-300 text-sm transition-colors duration-300 group/link'
        whileHover={{ x: 4 }}
      >
        <span>Visit Project</span>
        <svg
          className='w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
          />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className='mb-20'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className='section-title'>{title}</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>{children}</div>
    </motion.section>
  );
}

export default function Projects() {
  return (
    <div className='py-20'>
      <ProjectSection title='Personal Projects'>
        {projectItem({
          framework: 'NextJS',
          title: 'Guinto Games',
          date: 'Indie Game Dev',
          description:
            "A website for the games I've built. Go check them out 🎮",
          url: 'https://guinto.games/',
          techStack: ['unity', 'nextjs', 'solidity', 'tailwind'],
        })}
        {projectItem({
          framework: 'Flutter',
          title: 'SLP Tracker (10k+ Installs)',
          date: '2021 / Personal',
          description:
            'A flutter app that tracks SLP from a wallet. This was made for an NFT game Axie Infinity and is made using flutter.',
          url: 'https://play.google.com/store/apps/details?id=com.gdgapps.axiescholartracker',
          techStack: ['flutter', 'android', 'ios'],
        })}
        {projectItem({
          framework: 'Flutter',
          title: 'LTO Reviewer 2023',
          date: '2022',
          description:
            "LTO Reviewer is the most up-to-date reviewer for the Land Transportation Office Examination. Our mission is to help future filipino drivers to pass the exam and make sure they get their driver's license.",
          url: 'https://play.google.com/store/apps/details?id=com.tonbeans.lto_reviewer',
          techStack: ['flutter', 'android', 'ios'],
        })}
        {projectItem({
          framework: 'NextJS',
          title: 'Mutya NFT (Minting website)',
          date: '2022',
          description:
            'A web3 project that mints erc721 tokens(a.k.a NFTs). Collect filipino inspired NFTs living inside Polygon Matic chain.',
          url: 'https://mutya.vercel.app/',
          techStack: ['nextjs', 'solidity', 'tailwind'],
        })}
      </ProjectSection>

      <ProjectSection title='Previous Work Projects'>
        {projectItem({
          framework: 'Flutter',
          title: 'Nextminute',
          date: '2022 - Present',
          description:
            'A Job Management App catering for Tradies in New Zealand and Australia.',
          url: 'https://nextminute.com/',
          techStack: ['flutter', 'android', 'ios'],
        })}
        {projectItem({
          framework: 'NextJS',
          title: 'OUTR Studios Web3',
          date: '2022 / OUTR Studio',
          description:
            'A website for a client to let its audience buy NFTs from the website.',
          url: 'https://outrstudios.vercel.app/',
          techStack: ['reactjs', 'nextjs', 'solidity', 'tailwind'],
        })}
        {projectItem({
          framework: 'NextJS',
          title: 'Inside Out NFT',
          date: '2022 / OUTR Studio',
          description: 'A website that mints NFTs in the mainnet.',
          url: 'https://insideoutnft.vercel.app/',
          techStack: ['reactjs', 'nextjs', 'solidity', 'tailwind'],
        })}
        {projectItem({
          framework: 'Flutter',
          title: 'NAIIBA (Nutriasia Inc.)',
          date: '2020 / ThinkBIT Solutions Inc.',
          description:
            'A social app for Nutriasia employees to share their ideas in the company.',
          url: 'https://play.google.com/store/apps/details?id=com.nutriasia.naiiba',
          techStack: ['flutter', 'android', 'ios'],
        })}
        {projectItem({
          framework: 'Flutter',
          title: 'ProtectNow',
          date: '2020 / ThinkBIT Solutions Inc.',
          description:
            'An insurance app for Cebuana Lhuillier. Get insured today thru the app.',
          url: 'https://play.google.com/store/apps/details?id=com.ncvi.protectnow&hl=en_US&gl=US',
          techStack: ['flutter', 'android', 'ios'],
        })}
        {projectItem({
          framework: 'Flutter',
          title: 'Barpoints',
          date: '2020 / ThinkBIT Solutions Inc.',
          description:
            "BarPoints is the new way to explore your city's nightlife and get rewarded for it!",
          url: 'https://play.google.com/store/apps/details?id=app.barcast.BarPoints&hl=en_US&gl=US',
          techStack: ['flutter', 'android', 'ios'],
        })}
      </ProjectSection>

      <ProjectSection title='Open Source Github Projects'>
        {projectItem({
          framework: 'Flutter',
          title: 'Flutter Movie App',
          date: '2022',
          description:
            'A flutter app that uses TMDB api with riverpod along with repository pattern.',
          url: 'https://github.com/antonvinceguinto/flutter_tmdb',
          techStack: ['flutter', 'riverpod', 'android', 'ios'],
        })}
        {projectItem({
          framework: 'NextJS',
          title: 'Dapp Builder Template',
          date: '2022',
          description: 'A template for creating web3 projects.',
          url: 'https://github.com/antonvinceguinto/dapp-builder',
          techStack: ['nextjs', 'tailwind', 'ESLint', 'Hardhat', 'Solidity'],
        })}
        {projectItem({
          framework: 'NextJS',
          title: 'My Portfolio Website',
          date: '2022',
          description: 'Checkout the source code of this website.',
          url: 'https://github.com/antonvinceguinto/web-portfolio',
          techStack: ['reactjs', 'portfolio', 'bread'],
        })}
      </ProjectSection>
    </div>
  );
}
