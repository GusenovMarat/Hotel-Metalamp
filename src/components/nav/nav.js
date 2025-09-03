class Nav {
  constructor() {
    this.setClasses();
    this.findNavMenu();
  }

  setClasses() {
    this.navSelector = '.js-nav',
    this.navList = '.js-nav__list',
    this.navBurger = '.js-nav__burger',
    this.navClose = '.js-nav__close',
    this.listActive = 'nav__list-active',
    this.iconSpin = 'nav__close-spin'
  }

  findNavMenu() {
    this.menu = document.querySelectorAll(this.navSelector);
  }

  init() {
    this.menu.forEach(item => {
      const burger = item.querySelector(this.navBurger);
      const close = item.querySelector(this.navClose);
      const list = item.querySelector(this.navList);

      burger.addEventListener('click', () => {
        list.classList.add(this.listActive)
        close.classList.add(this.iconSpin)
      });

      close.addEventListener('click', () => {
        list.classList.remove(this.listActive)
      })

      document.addEventListener('click', (event)=> {
      if (!event.target.closest(this.navSelector)) {
        list.classList.remove(this.listActive)
        close.classList.remove(this.iconSpin)
      } 
    })
    });
  }
}


export default Nav;