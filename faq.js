document.addEventListener('DOMContentLoaded', () => { 

    const smoothHeight = (itemSelector, buttonSelector, contentSelector, imageSelector, textSelector) => { // объявляем основную функцию, которая принимает в качестве параметров селекторы элемента, кнопки внутри элемента и блока с контентом

    const items = document.querySelectorAll(itemSelector) 
    if (!items.length) return 
    items.forEach(el => {
        const button = el.querySelector(buttonSelector)
        const content = el.querySelector(contentSelector)
        const image = el.querySelector(imageSelector)
        const text = el.querySelector(textSelector)
        button.addEventListener('click', () => {
            if (el.dataset.open !== 'true') {

                el.dataset.open = 'true' 
                el.style.marginBottom = '50px';
                button.src = '../../img/services/arrow_close.png'

                content.style.maxHeight = `${content.scrollHeight}px`;
                setTimeout(() => {
                    text.style.marginLeft = '34px';
                    image.style.width = 'auto';
                    image.style.height = `${content.scrollHeight}px`;
                    image.style.opacity = '1';
                }, 900,); 

            } else { 

                el.style.marginBottom = '10px';
                button.src = '../../img/services/arrow_open.png'
                el.dataset.open = 'false' 
                content.style.maxHeight = ''
                image.style.opacity = '0'; 

            }
        })
        const onResize = () => { 
            if (el.dataset.open === 'true') { 
                if (parseInt(content.style.maxHeight) !== content.scrollHeight) { 
                    content.style.maxHeight = `${content.scrollHeight}px` 
                }
            }
        }
        window.addEventListener('resize', onResize)
    })
    }

    smoothHeight('.faq_segment_question', '.faq_segment_question_arrow', '.faq_segment_question_answer', '.faq_segment_question_answer_img', '.faq_segment_question_answer_text') // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы

})
