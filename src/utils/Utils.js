export const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
};

export const getOperatingHours = (hours) => {
    const operatingHours = {};
    hours.forEach(({start, end, day}) => {
        if (operatingHours[daysOfWeek[day]]) {
            operatingHours[daysOfWeek[day]] += ` ${start}-${end}`;
        } else {
            operatingHours[daysOfWeek[day]] = `${start}-${end}`;
        }
    });
    return operatingHours;
}
