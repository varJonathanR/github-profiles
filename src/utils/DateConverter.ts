export function DateConverter(inputDate: string): string {
    const currentDate: Date = new Date();
    const targetDate: Date = new Date(inputDate);
    const timeDifference: number = currentDate.getTime() - targetDate.getTime();
    const seconds: number = Math.floor(timeDifference / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const months: number = Math.floor(days / 30);
    const years: number = Math.floor(months / 12);

    if (years > 0) {
        return `Updated ${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
        return `Updated ${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
        return `Updated ${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
        return `Updated ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
        return `Updated ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
        return `Updated ${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
}