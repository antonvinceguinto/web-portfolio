import { RiFlutterFill, RiReactjsFill, RiGithubFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { Card, Spacer } from '@nextui-org/react';

const projectItem = ({
  framework = '',
  title = '',
  date = '',
  description = '',
  url = '',
  techStack = [''],
}) => (
  <Card
    bordered
    shadow={false}
    hoverable
    css={{ backgroundColor: '#1F2937', border: 'none', marginTop: '1rem' }}
  >
    <div className='flex-col p-2 text-white'>
      <div className='font-bold text-2xl'>
        <div className='flex justify-between'>
          {title}
          <div className='text-green-300 flex items-center'>
            <div className='text-lg uppercase'>{framework}</div>
            <Spacer x={0.2} />
            {/* eslint-disable-next-line no-nested-ternary */}
            {framework === 'React' ? (
              <RiReactjsFill size={20} />
            ) : // eslint-disable-next-line no-nested-ternary
            framework === 'NextJS' ? (
              <TbBrandNextjs size={20} />
            ) : framework === 'Flutter' ? (
              <RiFlutterFill size={20} />
            ) : (
              <RiGithubFill />
            )}
          </div>
        </div>
        <div className='text-gray-400 text-lg font-normal'>{date}</div>
      </div>
      <Spacer y={0.5} />
      <div className='text-gray-400 text-lg'>{description}</div>
      <Spacer y={0.5} />
      <div className='text-[#F8CA1C] flex justify-between'>
        <a target='_blank' href={url} rel='noopener noreferrer'>
          Visit Project↗
        </a>
        <div className='text-[#F8CA1C] flex gap-4 flex-wrap justify-end'>
          {techStack.map((tech) => (
            <div key={tech} className='p-1 px-2 rounded bg-[#151c25]'>
              #{tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

export default function Projects() {
  return (
    <div className='flex-col flex md:min-h-[30vh] items-start justify-center pb-5'>
      <div className='text-[1.6rem] lg:text-[3rem] font-bold mt-5 md:mt-12'>
        Personal Projects
      </div>
      <div className='sm:grid md:grid-cols-2 gap-9 justify-around items-center mt-2 md:mt-8'>
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
          framework: 'NextJS',
          title: 'NFT Wallet',
          date: '2022',
          description:
            'A NextJS Project which showcases the use of Alchemy API to fetch NFTs in different blockchains.',
          url: 'https://nftwallet.vercel.app/',
          techStack: ['nextjs', 'solidity', 'tailwind'],
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
       
      </div>
      <div className='text-[1.6rem] lg:text-[3rem] font-bold mt-32'>
        Previous Work Projects
      </div>
      <div className='sm:grid md:grid-cols-2 gap-9 justify-around items-center mt-2 md:mt-8 w-full'>
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
      </div>
      <div className='text-[1.6rem] lg:text-[3rem] font-bold mt-32'>
        Some of my opensource Github projects
      </div>
      <div className='sm:grid md:grid-cols-2 gap-9 justify-around items-center mt-2 md:mt-8 w-full'>
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
      </div>
    </div>
  );
}
