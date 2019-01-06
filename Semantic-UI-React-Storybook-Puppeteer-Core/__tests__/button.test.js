describe('Button', () => {
	it('when state is success it should visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto(
			'http://localhost:9001/iframe.html?dataId=04371cf5-22b8-4963-9152-45490256575a&selectedKind=Progress%20States&selectedStory=Success'
		);
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
  }, 200000);
});
