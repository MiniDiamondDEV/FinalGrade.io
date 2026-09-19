// Run with Playwright installed: node tests/regression.cjs
// Optional FG_CHROMIUM_PATH selects an existing Chromium executable.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const server=require('http').createServer((req,res)=>{res.end(require('fs').readFileSync(require('path').join(__dirname, '..', 'index.html')))}).listen(8765);
server.unref();
(async()=>{
const browser=await chromium.launch({headless:true, executablePath:process.env.FG_CHROMIUM_PATH || undefined, args:['--no-sandbox','--disable-gpu']});const page=await browser.newPage({viewport:{width:1365,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('net::'))errors.push(m.text())});
await page.goto('http://localhost:8765');
await page.evaluate(()=>{localStorage.setItem('fg_intro_seen_v26410','1');localStorage.setItem('gradeCalculatorData_v2',JSON.stringify({categories:[{name:'Practice',weight:100,assignments:[{name:'Flag regression',gradedPts:'85',totalPts:'100',multiplierPts:'1'},{name:'Second assignment',gradedPts:'95',totalPts:'100',multiplierPts:'1'}]},{name:'Practice',weight:0,assignments:[{name:'Duplicate category target',gradedPts:'70',totalPts:'100',multiplierPts:'1'}]}],settings:{}}))});
await page.reload();await page.waitForTimeout(3800);await page.evaluate(()=>window.navigateToView('teacher'));
const state=()=>page.locator('#teacherView .assignment').first().evaluate(row=>({value:row.querySelector('.graded-pts-input').value,locked:row.querySelector('.graded-pts-input').readOnly,backup:row.dataset.scoreBeforeFlag,flag:row.querySelector('.status-dropdown-main').value}));
const flag=async value=>{await page.locator('#teacherView .assignment').first().locator('.status-dropdown-main').selectOption(value,{force:true});await page.waitForTimeout(80)};
const score=async value=>{await page.locator('#teacherView .assignment').first().evaluate((row,value)=>{const input=row.querySelector('.graded-pts-input');input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}))},value);await page.waitForTimeout(80)};
assert.equal(await page.locator('#taskbarSaveBtn').isVisible(),false);
await flag('Missing');assert.deepEqual(await state(),{value:'0',locked:true,backup:'85',flag:'Missing'});assert.equal(await page.locator('#taskbarSaveBtn').isVisible(),true);
await flag('Cheated');assert.equal((await state()).backup,'85');await page.evaluate(()=>window.manualSaveGradebook());assert.equal(await page.locator('#taskbarSaveBtn').isVisible(),false);
await page.reload();await page.waitForTimeout(3800);await page.evaluate(()=>window.navigateToView('teacher'));assert.equal((await state()).backup,'85');await flag('');assert.equal((await state()).value,'85');assert.equal((await state()).locked,false);
await score('85D');assert.equal((await state()).value,'85');assert.equal((await state()).locked,true);await page.evaluate(()=>window.manualSaveGradebook());await page.reload();await page.waitForTimeout(3800);await page.evaluate(()=>window.navigateToView('teacher'));assert.equal((await state()).locked,true);await flag('Incomplete');assert.equal((await state()).value,'85');assert.equal((await state()).locked,false);
await score('72');assert.equal((await state()).flag,'Incomplete');await score('M');assert.equal((await state()).backup,'72');await flag('Incomplete');assert.equal((await state()).value,'72');await flag('TurnedIn');assert.equal((await state()).value,'72');
await flag('Late');await page.locator('.assignment').first().locator('.status-dropdown-secondary').selectOption('Dropped',{force:true});await flag('Missing');await flag('Late');await page.waitForTimeout(350);assert.equal((await state()).value,'72');assert.equal((await state()).locked,false);
await flag('Missing');await page.evaluate(()=>window.manualSaveGradebook());await page.evaluate(()=>window.navigateToView('student'));await page.locator('[data-student-section="assignments"]').click();assert.equal(await page.locator('.ic-assignment-list-score').filter({hasText:/missing.*0\/100/i}).count(),1);

await page.evaluate(()=>window.navigateToView('teacher'));
await page.locator('#taskbarSettingsBtn').click();assert.equal(await page.locator('#taskbarSettingsMenu').isVisible(),true);await page.locator('#taskbarSettingsMenu [data-taskbar-action="settings"]').click();assert.equal(await page.locator('#settingsView').isVisible(),true);await page.getByRole('tab',{name:'Assignment Details'}).click();assert.equal(await page.locator('#studentAssignmentDisplaySettings').isVisible(),true);
await page.evaluate(()=>window.navigateToView('teacher'));
await page.locator('#bulkDeleteAssignmentsBtn').click();assert.equal(await page.locator('#removeAssignmentsBulkModal').isVisible(),true);await page.locator('.assignment-checkbox').last().check();await page.locator('#confirmDeleteAssignmentsBtn').click();assert.equal(await page.locator('#teacherView .assignment').count(),2);assert.equal(await page.locator('#teacherView .category').first().locator('.assignment').count(),2);
await page.locator('#viewAllAssignmentsBtn').click();await page.keyboard.press('Escape');
await page.setViewportSize({width:390,height:844});await page.locator('#taskbarSettingsBtn').click();const r=await page.locator('#taskbarSettingsMenu').boundingBox();assert(r.x>=0&&r.x+r.width<=390);
assert.deepEqual(errors,[]);console.log('PASS score flags/save/reload, neutral flags, stale status, duplicate-name deletion, student score, settings, menus and mobile; no runtime errors');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
