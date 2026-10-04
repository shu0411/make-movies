import {expect, test} from '@playwright/test';

test('Remotion Studioにメインコンポジションが表示される', async ({page}) => {
  await page.goto('/');

  await expect(page.locator('body')).toContainText('Main', {timeout: 30_000});
});
