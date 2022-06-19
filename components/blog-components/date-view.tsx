import { parseISO, formatDistance, subDays } from 'date-fns';

interface DateViewInterface {
  dateString: string;
  className?: string;
}

export default function DateView({ dateString, className }: DateViewInterface) {
  const date: Date = parseISO(dateString);
  return (
    <div className={`${className}`}>
      <time dateTime={dateString}>
        {formatDistance(subDays(date, 0), new Date(), {
          addSuffix: true,
        })}
      </time>
    </div>
  );
}
