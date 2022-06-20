import { parseISO, formatDistance, subDays, format } from 'date-fns';

interface DateViewInterface {
  dateString: string;
  className?: string;
}

export default function DateView({ dateString, className }: DateViewInterface) {
  const date: Date = parseISO(dateString);
  return (
    <div className={`${className} space-x-1 text-gray-600 text-sm`}>
      <time dateTime={dateString}>
        {formatDistance(subDays(date, 0), new Date(), {
          addSuffix: true,
        })}
      </time>
      <time dateTime={dateString} className='text-green-500'>
        ━ {format(date, 'MMMM d, yyyy')}
      </time>
    </div>
  );
}
