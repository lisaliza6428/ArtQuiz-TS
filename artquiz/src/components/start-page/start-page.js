import './start-page.scss';
import { localStorageUtil } from '../localStorage';

class StartPage {
  main = document.createElement('main');

  render = () => {
    document.querySelector('.modal').innerHTML = '';
    const image = new Image();
    image.src = '/assets/svg/title.svg';
    image.onload = () => {
      document.querySelector('.container').innerHTML = `
      <div class="main-page-container">
      <div class="main-page">
          <img class="main-page__title" src="/assets/svg/title.svg" alt="Art Quiz">
          <a class="main-page__button" href="#/categories" id="artists-quiz">Artists quiz</a>
          <a class="main-page__button" href="#/categories" id="pictures-quiz">Pictures quiz</a>
          <div class="settings-wrapper">
            <a class="settings__link" href="#/settings">
              <img class="settings__link-img" src="/assets/svg/settings.svg" alt="Settings">
            </a>
            <a class="set" href="#/settings">Settings</a>
          </div>
      </div>
      </div>`;
      document.getElementById('artists-quiz').addEventListener('click', () => {
        localStorageUtil.setQuizType('artists');
      });
      document.getElementById('pictures-quiz').addEventListener('click', () => {
        localStorageUtil.setQuizType('pictures');
      });
    };
  };

  renderFooter = () => {
    this.main.classList.add('main');
    this.main.innerHTML = '<div class="container"></div>';
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
      <a class="footer__RSS-link" href="https://rs.school/js/" target="_blank">
      <img class="footer__RSS-img" src="/assets/svg/rs_school.svg" alt="RSSchool">
      </a>
      <div class="footer__developer-link">App developer:
        <a class="footer__dev-link developer" target="_blank" href="https://github.com/lisaliza6428">Elizaveta Ivanushenko</a> (2022)
      </div>`;
    document.body.append(this.main, footer);
  };
}

const startPage = new StartPage();
startPage.renderFooter();
export default startPage;
