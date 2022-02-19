var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var thisDay = new Date(year, month, 1); //이번달 1일이 무슨 요일인지 확인
var thisWeek = thisDay.getDay();
var lastDate = [31,28,31,30,31,30,31,31,30,31,30,31]; //각 달의 마지막 날짜 정보
if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0){ // 윤달 구하기
    lastDate[1] = 29;
}
let str = '';
for(let i = 1 ; i <= lastDate[today.getMonth()] ; i++){
    str = str +"'"+ i+"일',";
}
console.log(str);

var target = $('#line-chart');
const labels = [
    '1일','2일','3일','4일','5일','6일','7일','8일','9일','10일',
    '11일','12일','13일','14일','15일','16일','17일','18일','19일','20일',
    '21일','22일','23일','24일','25일','26일','27일','28일',
];
const data = {
    labels: labels,
    datasets: [
        {
            label: '출국',
            pointRadius:5,
            pointHoverRadius:10,
            backgroundColor: 'rgb(102, 30, 67)',
            hoverBackgroundColor:'rgb(102, 30, 67)',
            borderColor: 'rgb(102, 30, 67)',
            borderDash:[20,5],
            data: [0, 1, 2, 4, 2, 3, 15,0, 10, 5, 2, 20, 0, 15,0, 10, 5, 2, 20, 30, 20, 0, 10, 5, 2, 20, 30, 10],
        },
        {
            label: '입국',
            pointRadius:5,
            pointHoverRadius:10,
            backgroundColor: '#bdd600',
            hoverBackgroundColor:'#bdd600',
            borderColor: '#bdd600',
            borderDash:[20,5],
            borderWidth:1,
            data: [5, 2, 17, 5, 3, 4,0, 10, 5, 2, 20, 30, 4,0, 10, 5, 2, 20, 30, 5, 0, 10, 5, 2, 20, 10, 20, 25],
        }
    ]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio:false
    }
};
var myChart = new Chart(
    target,
    config
);