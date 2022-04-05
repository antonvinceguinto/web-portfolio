export const Skills: React.FC = () => {
  const skill = (skill: string) => {
    return (
      <div className='p-5 bg-slate-50 text-[1.4rem] text-center text-black border-b-4 border-green-500 lg:mt-0 mt-3 hover:scale-110 transition-all duration-200'>
        {skill}
      </div>
    );
  };

  return (
    <>
      <div className='md:min-h-[40vh] items-start justify-between'>
        <div className='flex text-[1.6rem] lg:text-[3rem] font-bold'>
          Skills
        </div>
        <div className='mt-8 items-center justify-center sm:grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 text-[1.6rem] lg:text-[3rem] font-bold gap-8'>
          {skill('React JS')}
          {skill('Next JS')}
          {skill('Solidity')}
          {skill('Version Control')}
          {skill('Tailwind CSS')}
          {skill('Typescript')}
          {skill('Flutter')}
          {skill('API Integration')}
        </div>
      </div>
    </>
  );
};
