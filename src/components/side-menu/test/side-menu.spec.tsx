import { newSpecPage } from '@stencil/core/testing';
import { SideMenu } from '../side-menu';

describe('side-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SideMenu],
      html: `<side-menu></side-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <side-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </side-menu>
    `);
  });
});
