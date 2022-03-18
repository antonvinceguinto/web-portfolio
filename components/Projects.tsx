import { BounceAnimation } from './BounceAnimation';

export const Projects: React.FC = () => {
  const projectItem = () => {
    return <div className='p-8 rounded-xl bg-white text-gray-800'>test</div>;
  };

  return (
    <BounceAnimation>
      <div className='flex flex-col text-start mt-16 md:mt-0'>
        <div className='text-[1.6rem] lg:text-[3rem] font-bold'>Projects</div>
        <div className='flex justify-around items-start mt-8'>
          {projectItem()}
          {projectItem()}
          {projectItem()}
          {projectItem()}
        </div>
      </div>
    </BounceAnimation>
  );
};
