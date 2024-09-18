import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'side-menu',
  styleUrl: 'side-menu.css',
  shadow: true,
})
export class SideMenu {

  @Prop() webName: string;

  render() {
    return (
      <Host>
        <aside class="sidebar">
          <div class="webName">
            {this.webName}
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
