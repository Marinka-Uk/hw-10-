//1

// let confirmCount = 0;
// const intervalId = setInterval(() => {
//     confirm('Hello')
//     confirmCount++;
//     if (confirmCount === 5) {
//         clearInterval(intervalId)
//         return
//     }
//     hasSubscribed = confirm('Hello')
//     promptCounter += 1
// }, 1000);




//2

// function truestEl() {
//   let size = 50;
//   let position1 = 0;
//   let position2 = 0;
//   let right = true;
//   let left = true;
//   let bottom = true;

//   setInterval(() => {

//     if (bottom) {
//       size += 2;
//       if (size >= 100) right = false;
//     } else {
//       size -= 2;
//       if (size <= 50) right = true;
//     }
//     element.style.width = size + 'px';
//     element.style.height = size + 'px';

//     if (left) {
//       position1 += 7;
//       if (position1 >= maxWidth - size) left = false;
//     } else {
//       position1-= 7;
//       if (position1 <= 0) left = true;
//     }

//     if (bottom) {
//       position1 += 5;
//       if (position2 >= maxHeight - size) bottom = false;
//     } else {
//       position2 -= 5;
//       if (position2 <= 0) bottom = true;
//     }

//     element.style.left = position1 + 'px';
//     element.style.top = position2 + 'px';

//   }, 50);
// }

// const animation1 = document.getElementById('animation1');
// const animation2 = document.getElementById('animation2');
// const animation3 = document.getElementById('animation3');

// truestEl(animation1, window.innerWidth, window.innerHeight);
// truestEl(animation2, window.innerWidth, window.innerHeight);
// truestEl(animation3, window.innerWidth, window.innerHeight);






//3


// let score = 0;
// let timeLeft = 15;
// const target = document.getElementById('target');
// const scoreDisplay = document.getElementById('score');

// function moveTarget() {
//     const x = Math.floor(Math.random() * (window.innerWidth - 50));
//     const y = Math.floor(Math.random() * (window.innerHeight - 50));
//     target.style.left = x + 'px';
//     target.style.top = y + 'px';
// }

// target.addEventListener('click', () => {
//     score++;
//     scoreDisplay.textContent = `Очки: ${score}`;
//     moveTarget();
// });

// const intervalId = setInterval(() => {
//     timeLeft--;
//     if (timeLeft <= 0) {
//         clearInterval(intervalId);
//         alert(`Game over! Your points: ${score}`);
//         target.style.display = 'none';
//     }
// }, 1000);

// moveTarget();



//4

 document.getElementById('timer-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const timeInput = document.getElementById('tm-input').value;
            const timerMessage = document.getElementById('timer-message');

            timerMessage.textContent = `Таймер запущено на ${timeInput} секунд.`;

            setTimeout(() => {
                timerMessage.textContent = 'Час вийшов!';
            }, timeInput * 1000);
        });

