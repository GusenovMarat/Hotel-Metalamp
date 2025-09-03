class SidebarDrop {
  constructor() {
    this.setClasses();
    this.findDrop();
  }

  setClasses() {
		this.SearchRoomPage = '.js-search-room'
    this.sidebarContainer = '.js-search-room__sidebar'
    this.sidebarOpen= '.js-sidebar-open'
		this.sidebarClose = '.js-sidebar-close'
    this.sidebarContent = '.js-sidebar-content'
    this.Expand = 'search-room__sidebar-expanded'
		this.Close = '.js-sidebar-close'
  }
  findDrop() {
    this.Page = document.querySelector(this.SearchRoomPage);
  }
  init() {
		const container = this.Page.querySelector(this.sidebarContainer)
    const open = this.Page.querySelector(this.sidebarOpen);
		const close = this.Page.querySelector(this.sidebarClose);

    open.addEventListener('click', () => {
      container.classList.toggle(this.Expand);
    })
		close.addEventListener('click', () => {
      container.classList.remove(this.Expand);
    })
  }
}

export default SidebarDrop;