import { Component, Host, h, Prop, State, Event, EventEmitter, Listen, Element } from '@stencil/core';

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

  @Listen("itemSelected")
  otherItemSelectedHandler(e) {
    console.log('recieved event', e.currentTarget);

    console.log(document.getElementsByTagName('side-menu-item'));

    // Get all the elements in the HTML with the tag "side-menu-item" and store them in an array
    const menuItemsArray = Array.from(document.getElementsByTagName('side-menu-item'));

    menuItemsArray.forEach((item, index) => {
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
    e.srcElement.classList.toggle("active");

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
