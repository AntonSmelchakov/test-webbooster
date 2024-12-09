import styles from './index.module.css';


function createHeader(parent) {
    const model = document.createElement('div');
    model.className = (styles.mainContainer);
    model.innerHTML = `
    <h2 class="${styles.bigText}"><img src="./img/Logo.png" alt="Semitex"></h2>
    <ul class="${styles.list}">
        <li><a href="">Каталог</a></li>
        <li><a href="">Производители</a></li>
        <li><a href="">Для кого работаем</a></li>
        <li><a href="">Сертификаты</a></li>
        <li><a href="">О нас</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Контакты</a></li>
    </ul>
        <button class="${styles.burger}">
            <span class="${styles.burgerBar}"></span>
            <span class="${styles.burgerBar}"></span>
        </button>
    <a href="tel:+78123135845"><img src="./img/fone-icon.svg" alt="Phone icon"><p>+7(812)<b>313-58-45</b></p></a>
    `

    const headerBg = document.createElement('div');
    headerBg.classList.add(styles.background);
    document.body.append(headerBg);
    parent.append(model);
}

export default createHeader