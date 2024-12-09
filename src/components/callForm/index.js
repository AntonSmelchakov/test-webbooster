import styles from './index.module.css'

export default function createCallForm() {
    const model = document.createElement('div');
    model.className = styles.mainContainer;
    model.innerHTML = `
    <h4 class="${styles.bigText}">Закажите<br> обратный звонок</h4>
    <div>
        <p>Ваше имя*</p>
        <input type="text" placeholder="Петров Петр" class="${styles.form}">
        <p>Ваш номер*</p>
        <input type="text" placeholder="+7 (_ _ _) _ _ _-_ _-_ _" class="${styles.form}">
      <button class="${styles.button}">Заказать звонок</button>
      <div><img src="./img/lock.svg" alt="Lock icon">Мы гарантируем конфиденциальность данных</div>
    </div>
    `;

    return model;
}