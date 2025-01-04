import styles from './index.module.css'

export default function createWhyPanel(parent) {
    const model = document.createElement('article');
    model.classList.add(styles.mainContainer);
    model.innerHTML = `
        <h2>Почему с нами выгодно</h2>
        <p>С 1996 года мы занимаемся оптовыми поставками электронных компонентов от ведущих производителей из Европы
и Азии для Российских потребителей. </p>
        <div>
        <div class=${styles.panel}>
            <img src="./img/certificate-logo.png" alt="certificate logo">
            <h3>Качественная продукция</h3>
            <p>Все наши товары сертифицированы и имеют сопроводительную документацию.</p>
        </div>
        <div class=${styles.panel}>
            <img src="./img/package-logo.png" alt="package logo">
            <h3>Индивидуальный подход</h3>
            <p>Возможность изготовления компонентов специально для вас
на заводах-изготовителя.</p>
        </div>
        <div class=${styles.panel}>
            <img src="./img/truck-logo.png" alt="truck logo">
            <h3>Бесплатная доставка</h3>
            <p>При наличии товара на складе и заказе от 10 000 рублей,
доставим бесплатно по Москве и СПБ в течение 2х часов.</p>
        </div>
        <div class=${styles.panel}>
            <img src="./img/module-logo.png" alt="modules logo">
            <h3>Подбираем аналоги</h3>
            <p>Поможем подобрать аналоги популярных европейских брендов
в условиях санкций.</p>
        </div>
        <div class=${styles.panel}>
            <img src="./img/safehouse-logo.png" alt="safehouse logo">
            <h3>Резервный запас компонентов</h3>
            <p>Хранение товара на наших складах для постоянных клиентов.</p>
        </div>
        <div class=${styles.panel}>
            <img src="./img/hourglass-logo.png" alt="hourglass logo">
            <h3>Гибкая система оплаты</h3>
            <p>Отсрочка платежей для постоянных клиентов.</p>
        </div>
        </div>
    `
    parent.append(model);
}