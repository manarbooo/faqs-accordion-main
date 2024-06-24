

document.querySelectorAll('.toggle-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const container = document.querySelector('.container');
        const currentAnswer = icon.closest('.question').nextElementSibling;
        const isAnswerVisible = currentAnswer.style.display === 'block';

        document.querySelectorAll('.answer').forEach(answer => {
            answer.style.display = 'none';
        });

        document.querySelectorAll('.toggle-icon').forEach(ic => {
            ic.src = 'assets/images/icon-plus.svg';
        });

        if(isAnswerVisible){
            container.style.height = 'auto';
        }else{
            currentAnswer.style.display = 'block';
            icon.src = 'assets/images/icon-minus.svg';

            const newHeight = container.scrollHeight + currentAnswer.scrollHeight + 'px';
            container.style.height = newHeight;
        }
    });
});

