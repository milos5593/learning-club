export class Timer {
  timer
  isRunning: boolean
  type
  time: number
  timeElement
  startBtn
  stopBtn
  resetBtn
  typesButton
  focusBtn
  shortBtn
  longBtn

  constructor(time: number) {
    this.timer = document.querySelector<HTMLDivElement>('#app')!
    this.isRunning = false
    this.time = time
    this.type = 'focus'

    this.renderInitialHtmlTemplate()

    this.startBtn = document.getElementsByClassName("tm__button--green")
    this.stopBtn = document.getElementsByClassName("tm__button--red")
    this.resetBtn = document.getElementsByClassName("tm__button--gray")

    this.timeElement = document.getElementById("tm__time")

    this.typesButton = document.getElementsByClassName("tm__type")
    this.focusBtn = document.getElementById("tm__focus")
    this.shortBtn = document.getElementById("tm__short")
    this.longBtn = document.getElementById("tm__long")

    this.registerEventListenersForInitialHtmlTemplate()
  }

  renderInitialHtmlTemplate() {
    this.timer!.innerHTML =
      `<div class="tm">
      <div class="tm__types">
        <button id="tm__focus" class="tm__type tm__type--active">Focus</button>
        <button id="tm__short" class="tm__type">Short Break</button>
        <button id="tm__long" class="tm__type">Long Break</button>
      </div>
      <div class="tm__main">
        <div class="tm__bar">
          <h2 id="tm__time">${this.convertSecondsToMinutesAndSeconds(this.time)}</h2>
        </div>
      </div>
      <div class="tm__buttons">
        <button class="tm__button tm__button--green">Start</button>
        <button class="tm__button tm__button--red">Stop</button>
        <button class="tm__button tm__button--gray">Reset</button>
      </div>
    </div>`
  }

  registerEventListenersForInitialHtmlTemplate() {

    Array.from(this.startBtn).forEach((el) => {
      el.addEventListener('click', this.start.bind(this))
    })

    Array.from(this.stopBtn).forEach((el) => {
      el.addEventListener('click', this.stop.bind(this))
    })

    Array.from(this.resetBtn).forEach((el) => {
      el.addEventListener('click', this.reset.bind(this))
    })

    this.focusBtn?.addEventListener('click', this.focus.bind(this))
    this.shortBtn?.addEventListener('click', this.shortBreak.bind(this))
    this.longBtn?.addEventListener('click', this.longBreak.bind(this))
  }

  // Buttons
  start() {
    if (!this.isRunning) {
      this.isRunning = true
      const interval = setInterval(() => {
        if (this.time > 0 && this.isRunning) {
          this.time--;
          (this.timeElement as HTMLElement).textContent = this.convertSecondsToMinutesAndSeconds(this.time)
        } else {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      return
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false
    } else {
      return
    }
  }

  reset() {
    this.isRunning = false
    switch (this.type) {
      case 'focus':
        this.time = 1500
        break;
      case 'short':
        this.time = 300
        break;
      case 'long':
        this.time = 1200
        break;
      default:
        this.time = 1500
        break;
    }
    const time = this.timeElement as HTMLElement
    time.textContent = this.convertSecondsToMinutesAndSeconds(this.time)
  }

  convertSecondsToMinutesAndSeconds(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  // Timer types
  focus() {
    this.removeActiveClass()
    this.focusBtn?.classList.add('tm__type--active')
    this.type = 'focus'
    this.time = 1500
    const time = this.timeElement as HTMLElement
    time.textContent = this.convertSecondsToMinutesAndSeconds(this.time)
  }

  shortBreak() {
    this.removeActiveClass()
    this.shortBtn?.classList.add('tm__type--active')
    this.type = 'short'
    this.time = 300
    const time = this.timeElement as HTMLElement
    time.textContent = this.convertSecondsToMinutesAndSeconds(this.time)
  }

  longBreak() {
    this.removeActiveClass()
    this.longBtn?.classList.add('tm__type--active')
    this.type = 'long'
    this.time = 1200
    const time = this.timeElement as HTMLElement
    time.textContent = this.convertSecondsToMinutesAndSeconds(this.time)
  }

  removeActiveClass() {
    for (let i = 0; i < this.typesButton.length; i++) {
      this.typesButton[i].classList.remove("tm__type--active")
    }
  }
}