import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'side-menu',
  styleUrl: 'side-menu.css',
  shadow: true,
})
export class SideMenu {

  @Prop() webName: string;
  sideMenuColor: string = "#f1f1f1";

  private showMenu() {
    // Menu
    const sideMenu = document.querySelector('side-menu');
    const sideMenuElement = sideMenu.shadowRoot.querySelector('aside');
    sideMenuElement.style.backgroundColor = this.sideMenuColor;
    sideMenuElement.style.transition = "all 0.5s ease-in-out";
    const webName = sideMenuElement.querySelector('.webName');
    webName.setAttribute('style', 'border-radius: 0px;');
    // Items inside the menu
    const sideMenuItems = sideMenu.querySelectorAll('side-menu-item');
    sideMenuItems.forEach(item => {
      item.shadowRoot.querySelector('a').style.margin = "10px";
      item.shadowRoot.querySelector('a').style.padding = "10px";
      item.shadowRoot.querySelector('a').style.height = "auto";
      item.shadowRoot.querySelector('a').style.lineHeight = "normal";
      item.shadowRoot.querySelector('a').style.transform = "scaleY(1)";
    });
    // Delete burger icon
    const burgerIcon = sideMenu.shadowRoot.querySelector('.burger-menu-icon');
    burgerIcon.remove();
    // Add a close button icon and its styles
    const closeIcon = document.createElement('a');
    closeIcon.className = 'close-menu-icon';
    closeIcon.innerHTML = '&times;'
    closeIcon.onclick = () => this.closeMenu();
    closeIcon.style.fontSize = "30px";
    closeIcon.style.cursor = "pointer";
    sideMenu.shadowRoot.querySelector('.webName').appendChild(closeIcon);
  }

  private closeMenu() {
    // Menu
    const sideMenu = document.querySelector('side-menu');
    const sideMenuElement = sideMenu.shadowRoot.querySelector('aside');
    sideMenuElement.style.backgroundColor = "transparent";
    const webName = sideMenuElement.querySelector('.webName');
    webName.setAttribute('style', 'border-radius: 15px;');
    // Items inside the menu
    const sideMenuItems = sideMenu.querySelectorAll('side-menu-item');
    sideMenuItems.forEach(item => {
      item.shadowRoot.querySelector('a').style.margin = "0px";
      item.shadowRoot.querySelector('a').style.padding = "0px";
      item.shadowRoot.querySelector('a').style.height = "0px";
      item.shadowRoot.querySelector('a').style.lineHeight = "0px";
      item.shadowRoot.querySelector('a').style.transform = "scaleY(0)";
    });
    // Change the close button back into a burger icon
    const closeIcon = sideMenu.shadowRoot.querySelector('.close-menu-icon');
    closeIcon.remove();
    // Add the burger icon
    const burgerIcon = document.createElement('a');
    burgerIcon.className = 'burger-menu-icon';
    burgerIcon.innerHTML = '&#9776;'
    burgerIcon.onclick = () => this.showMenu();
    burgerIcon.style.fontSize = "30px";
    burgerIcon.style.cursor = "pointer";
    sideMenu.shadowRoot.querySelector('.webName').appendChild(burgerIcon);
    
  }

  render() {
    return (
      <Host>
        <aside class="sidebar">
          <div class="webName">
            <a href="/">{this.webName}</a>
            <a class="burger-menu-icon" onClick={() => this.showMenu()}>&#9776;</a>
          </div>

          {/* <side-menu-item url="#home" navItemName="Home"></side-menu-item>
          <side-menu-item url="#about" navItemName="About"></side-menu-item>
          <side-menu-item url="#contact" navItemName="Contact"></side-menu-item> */}

          {/* When we add a <slot /> tag to our component, 
        whatever html that a developer adds 
        inside of our custom tag will be added in place of the <slot /> */}
          <slot></slot>

        </aside>
      </Host>
    );
  }
}
