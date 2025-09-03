class SidebarDrop {
  constructor() {
    this.setClasses();
    this.findDrop();
  }

  setClasses() {
    this.sidebarContainer = '.js-search-room__sidebar'
    this.sidebarToggle = '.js-sidebar-toggle'
    this.sidebarContent = '.js-sidebar-content'
    this.sidebarIcon = '.js-sidebar-icon'
    this.Expand = 'search-room__sidebar-expanded'
		this.IconActive = 'search-room__sidebar-icon-active'
  }
  findDrop() {
    this.Sidebar = document.querySelector(this.sidebarContainer);
  }
  init() {
    const toggle = this.Sidebar.querySelector(this.sidebarToggle);
    const sidebar = this.Sidebar.querySelector(this.sidebarContent);
    const icon = this.Sidebar.querySelector(this.sidebarIcon);

    toggle.addEventListener('click', () => {
      const isExpanded = sidebar.classList.toggle(this.Expand);
      icon.classList.toggle(this.IconActive);
      if (isExpanded) {
        setTimeout(() => {
          this.Sidebar.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      }
    })
  }
}

export default SidebarDrop;