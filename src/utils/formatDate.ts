export default function formatDate(date: Date) {

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formatedMinutes = String(minutes).length === 1 ? minutes + '0' : minutes 

    const time = (hours > 12 && hours < 1) ? 'PM': 'AM'

    return `${hours}:${formatedMinutes} ${time}`;
};