import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'side-menu-item',
  styleUrl: 'side-menu-item.css',
  shadow: true,
})
export class SideMenuItem {
  //https://stackoverflow.com/questions/58822060/change-css-class-on-click-in-stenciljs
  //https://itnext.io/creating-a-side-menu-component-with-stencil-using-events-listen-and-slot-ed06c612bc6

  @Prop() navItemName: string;
  @Prop() url: string;

  @Event() itemSelected: EventEmitter;

  // Get all the elements in the HTML with the tag "side-menu-item" and store them in an array
  menuItemsArray = Array.from(document.getElementsByTagName('side-menu-item'));

  /**
   * Lifecycle Method
   */
  componentDidLoad() {
    const currentUrl = window.location.href;
    // https://stackoverflow.com/questions/39334400/how-to-split-url-to-get-url-path-in-javascript
    let pathname = new URL(currentUrl).pathname.substring(1);

    this.menuItemsArray.forEach((item) => {
      if (pathname === item.url) {
        item.shadowRoot.querySelector("a").classList.add("active");
      }

    });

  }

  @Listen("itemSelected")
  otherItemSelectedHandler(e) {
    console.log('recieved event', e.currentTarget);

    console.log(document.getElementsByTagName('side-menu-item'));

    this.menuItemsArray.forEach((item, index) => {
      console.log(`Item ${index}:`, item);
      // item.shadowRoot.querySelector("a") allows to get the element in the shadow DOM 
      // (the html tag side-menu-item containing the a tag) 
      console.log(item.shadowRoot.querySelector("a"));
      // If the navItemName of the selected item does not match the current item, remove the active class
      if (e.currentTarget.navItemName !== item.navItemName) {
        item.shadowRoot.querySelector("a").classList.remove("active");
      }

    });
  }

  private setActive(e) {
    console.log(e.srcElement);

    // Add the active class to the selected item
    e.srcElement.classList.add("active");

    // Emit the selected item as an event
    this.itemSelected.emit(e);


  }

  render() {
    return (
      <Host>
        <a
          class={'menuItem'}
          href={this.url}
          onClick={(e) => this.setActive(e)}>
          {this.navItemName}
        </a>
      </Host>
    );
  }
}
