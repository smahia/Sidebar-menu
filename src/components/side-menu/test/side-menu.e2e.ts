import { newE2EPage } from '@stencil/core/testing';

describe('side-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<side-menu></side-menu>');

    const element = await page.find('side-menu');
    expect(element).toHaveClass('hydrated');
  });
});
