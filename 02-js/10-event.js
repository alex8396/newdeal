document.querySelector('button').addEventListener('click', event => {
    event.stopPropagation(); // 이벤트 전파 중지
    console.log('button');
});

document.querySelector('div').addEventListener('click', () => {
    console.log('div');
});

document.querySelector('body').addEventListener('click', () => {
    console.log('body');
});

const link = document.querySelector('#link');
link.addEventListener('click', event => {
    event.preventDefault();
    link.style.backgroundColor = 'red';
});