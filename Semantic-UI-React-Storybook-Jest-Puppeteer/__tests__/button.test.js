describe('Button', () => {
	it('when state is success it should visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto(
			'http://localhost:9001/iframe.html?dataId=1e71f7a0-448d-4298-a05e-742f586cc92a&selectedKind=Progress%20States&selectedStory=Success'
		);
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
  }, 200000);
  
  it('when state is warning  it should visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto(
			'http://localhost:9001/iframe.html?dataId=1e71f7a0-448d-4298-a05e-742f586cc92a&selectedKind=Progress%20States&selectedStory=Warning'
		);
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
  }, 200000);

  it('when state is Error  it should visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto(
			'http://localhost:9001/iframe.html?dataId=1e71f7a0-448d-4298-a05e-742f586cc92a&selectedKind=Progress%20States&selectedStory=Error'
		);
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
  }, 200000);

  it('when state is Disabled  it should visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto(
			'http://localhost:9001/iframe.html?dataId=1e71f7a0-448d-4298-a05e-742f586cc92a&selectedKind=Progress%20States&selectedStory=Disabled'
		);
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
  }, 200000);
  
});
