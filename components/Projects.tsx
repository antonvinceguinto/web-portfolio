import { BounceAnimation } from './BounceAnimation';
import { RiFlutterFill, RiReactjsFill } from 'react-icons/ri';
import { Card, Spacer } from '@nextui-org/react';

export const Projects: React.FC = () => {
  const projectItem = ({
    framework = '',
    title = '',
    date = '',
    description = '',
    url = '',
  }) => {
    return (
      <div className='mt-6 md:mt-0'>
        <Card
          bordered
          shadow={false}
          hoverable
          css={{ backgroundColor: '#1F2937', border: 'none' }}
        >
          <div className='flex-col p-2 text-white'>
            <div className='font-bold text-2xl'>
              <div className='flex justify-between'>
                {title}
                <div className='text-green-300 flex items-center'>
                  <div className='text-sm uppercase'>{framework}</div>
                  <Spacer x={0.2} />
                  {framework === 'React' ? (
                    <RiReactjsFill size={16} />
                  ) : (
                    <RiFlutterFill size={16} />
                  )}
                </div>
              </div>
              <div className='text-gray-400 text-sm font-normal'>{date}</div>
            </div>
            <Spacer y={0.6} />
            <div className='text-gray-400'>{description}</div>
            <Spacer y={0.5} />
            <div className='text-[#F8CA1C] text-sm'>
              <a target='_blank' href={url} rel='noopener noreferrer'>
                Visit Project ↗
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <BounceAnimation>
      <div className='flex-col flex md:min-h-[60vh] items-start justify-center pb-5'>
        <div className='text-[1.6rem] lg:text-[3rem] font-bold'>Projects</div>
        <div className='sm:grid md:grid-cols-2 gap-9 justify-around items-center mt-8'>
          {projectItem({
            framework: 'React',
            title: 'Sandatahan NFT (Minting website)',
            date: '2022-present / Personal',
            description:
              'A web3 project that mints erc721 tokens(a.k.a NFTs). Collect filipino inspired NFTs living inside Polygon Matic chain.',
            url: 'https://official-crypto-odyssey-nft.vercel.app/',
          })}
          {projectItem({
            framework: 'Flutter',
            title: 'SLP Tracker',
            date: '2021 / Personal',
            description:
              'A flutter app that tracks SLP from a wallet. This was made for an NFT game Axie Infinity and is made using flutter',
            url: 'https://play.google.com/store/apps/details?id=com.gdgapps.axiescholartracker',
          })}
          {projectItem({
            framework: 'Flutter',
            title: 'NAIIBA (Nutriasia Inc.)',
            date: '2020 / ThinkBIT Solutions Inc.',
            description:
              'A social app for Nutriasia employees to share their ideas in the company.',
            url: 'https://play.google.com/store/apps/details?id=com.nutriasia.naiiba',
          })}
          {projectItem({
            framework: 'Flutter',
            title: 'ProtectNow',
            date: '2020 / ThinkBIT Solutions Inc.',
            description:
              'An insurance app for Cebuana Lhuillier. Get insured thru using the app.',
            url: 'https://play.google.com/store/apps/details?id=com.ncvi.protectnow&hl=en_US&gl=US',
          })}
        </div>
      </div>
    </BounceAnimation>
  );
};
