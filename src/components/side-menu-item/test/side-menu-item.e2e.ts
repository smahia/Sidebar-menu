import { newE2EPage } from '@stencil/core/testing';

describe('side-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<side-menu-item></side-menu-item>');

    const element = await page.find('side-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
