const { default: Axios } = require('axios');

const today = new Date();
const dd = String(today.getDate());
const mm = String(today.getMonth() + 1); //January is 0!
const yyyy = today.getFullYear();
const date = mm + '/' + dd + '/' + yyyy;

const getHours = (n) => (24 / 12) * n;
const getHoursElement = (element) => element.time.slice(0, element.time.indexOf(':'));

export const getData = async (callback) => {
    try {
        const respond = await Axios.get('https://my.api.mockaroo.com/dashboard.json?key=cd858070');
        const data = respond.data;

        let week = getDataInWeek(data);
        let date = getDataInDate(data);
        let month = getDataInMonth(data);
        let totalData = {
            week,
            date,
            month,
            data,
        };

        callback(totalData);
    } catch (error) {
        console.log('============GET ERROR================');
        console.log(error.message);
        console.log('====================================');
    }
};

const getDataInWeek = (data) => {
    let dataInWeek = [];

    for (let index = 6; index >= 0; index--) {
        let dateX = mm + '/' + String(today.getDate() - index) + '/' + yyyy;

        let total = 0;
        let newArray = data.filter((e) => e.day == dateX);

        newArray.forEach((element) => {
            total += element.deal;
        });

        dataInWeek.push({ date: today.getDate() - index, total });
    }

    return dataInWeek;
};

const getDataInDate = (data) => {
    let dataToday = [];
    const dealToday = data.filter((e) => e.day === date);
    for (let index = 1; index <= 12; index++) {
        let hours = getHours(index);
        let total = 0;
        let newArray = dealToday.filter(
            (e) => getHoursElement(e) == hours || getHoursElement(e) == hours - 1,
        );
        newArray.forEach((element) => {
            total += element.deal;
        });
        dataToday.push({ time: hours, total: total });
    }

    return dataToday;
};

const getDataInMonth = (data) => {
    let dataInMonth = [];

    for (let index = today.getDate() - 1; index >= 0; index--) {
        let dateX = mm + '/' + String(today.getDate() - index) + '/' + yyyy;
        let total = 0;
        let newArray = data.filter((e) => e.day == dateX);

        newArray.forEach((element) => {
            total += element.deal;
        });

        dataInMonth.push({ date: today.getDate() - index, total: total });
    }

    return dataInMonth;
};
