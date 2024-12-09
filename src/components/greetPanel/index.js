import styles from './index.module.css';
import createCallForm from '../callForm';

function createGreetPanel(parent) {
    const model = document.createElement('article');
    model.classList.add(styles.mainContainer);
    model.innerHTML = `
        <div class="${styles.textContainer} ">
            <h2 class="${styles.bigText} ">
                <span>Оптовые поставки</span><br>
                <span>электронных компонентов</span><br>
                <span>из Китая день в день</span><br>
            </h2>
            <p class="${styles.normalText} ">Комплексные поставки электронных компонентов и оборудования. Подберем аналоги популярных брендов из Европы в условиях санкций.</p>
            <ul class="${styles.list} ">
                <li>Отсрочка платежей для постоянных клиентов</li>
                <li>Бесплатная доставка по Москве и СПБ в течение 2х часов</li>
                <li>Квалифицированный персональный менеджер</li>
            </ul>
        </div>
    `

    model.append(createCallForm());

    parent.append(model);
}

export default createGreetPanel