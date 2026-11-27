export const targets = ['13.02', '13.04', '13.50', '13.52'];
export const sourceFiles = [
  { name: 'index.html', role: 'Landing & firmware detection', findings: ['Reads the browser user agent for firmware detection.', 'Advertises 13.02, 13.04, 13.50 and 13.52.', 'Redirects to jb.html and uses legacy Application Cache.'] },
  { name: 'jb.html', role: 'RAW GAME interface', findings: ['Loads jb.js and displays process status.', 'Progress messages do not prove exploit functionality.'] },
  { name: 'jb.js', role: 'Process orchestration', findings: ['Tracks multiple status flags and selects firmware configuration.', 'Cleanup does not guarantee restoration of all modified state.'] },
  { name: 'core.js', role: 'Browser memory primitives', findings: ['Contains browser-side memory primitive logic and structure validation.', 'Validation checks do not independently establish firmware compatibility.'] },
  { name: 'mem.js', role: 'Memory & carrier management', findings: ['Contains memory access, carrier management, validation and rollback.', 'Rollback success is not guaranteed in every failure case.'] },
  { name: 'int64.js', role: '64-bit integer utilities', findings: ['Provides 64-bit integer utilities.'] },
  { name: 'ps4_offsets.js', role: 'Firmware configuration', findings: ['Contains 13.50 and 13.52 configurations.', '13.52 inherits 13.50 and overrides selected fields.', '13.52 references goldhen.bin, while status comments mention payload2.bin.', 'Source comments contain claims that are not independently verified.'] },
  { name: 'rpc_worker.js', role: 'Worker memory & control', findings: ['Includes operations that can interfere with worker responsiveness.', 'Restoration is not guaranteed if exceptions interrupt some operations.'] },
  { name: 'cache.appcache', role: 'Legacy cache manifest', findings: ['Lists reference scripts, binaries, and firmware patches.', 'No 13.04 patch is listed in the supplied findings.', 'Displays the same hash string for payload2.bin and goldhen.bin.'] },
];
export const inconsistencies = [
  '13.04 is advertised, but no matching patch is listed in the reported manifest.',
  '13.52 inherits the 13.50 configuration; inheritance is not compatibility evidence.',
  'The 13.52 configuration references goldhen.bin; status comments name payload2.bin.',
  'The reported manifest repeats a hash for two filenames. Uploaded copies also share a measured SHA-256, but original-source provenance remains unverified.',
  'Uploaded patch files are 632 bytes each, not the reported 632 KB. Uploaded payload files are 293,120 bytes each. Size alone proves neither identity nor compatibility.',
];
