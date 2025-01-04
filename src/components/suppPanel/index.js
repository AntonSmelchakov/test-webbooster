import styles from './index.module.css'

export default function createSuppPanel(parent) {
  const model = document.createElement('article');
  model.classList.add(styles.mainContainer);
  model.innerHTML = `
    <h2>Наши производители</h2>
    <div>
      <button class="${styles.button}"><img src="./img/arrow.svg" alt=""></button>
      <div class="${styles.sliderContainer}">
      <img src="./img/eaier-logo.png" alt="">
      <img src="./img/foryard-logo.png" alt="">
      <img src="./img/fujicon-logo.png" alt="">
      <img src="./img/js-ag-logo.png" alt="">
      <img src="./img/marquis-logo.png" alt="">
      </div>
      <button class="${styles.button}"><img src="./img/arrow.svg" alt=""></button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod felis id quisque nunc. Non orci lacus elit mauris velit gravida imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna gravida consequat et euismod aenean quis mauris. Ut etiam egestas ultrices faucibus ultrices nisl enim consequat faucibus. Nibh id leo ullamcorper eleifend. Id at commodo interdum et leo. </p>
    `
  parent.append(model);
}