export default function convertHourToMinutes(time: string) {
    //Pegar o 8, e os minutos e transformar em um tipo numérico
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}