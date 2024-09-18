import { newSpecPage } from '@stencil/core/testing';
import { SideMenuItem } from '../side-menu-item';

describe('side-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SideMenuItem],
      html: `<side-menu-item></side-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <side-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </side-menu-item>
    `);
  });
});
