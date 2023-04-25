const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

// Path to the vnu-jar library
const vnuJarPath = require.resolve('vnu-jar/vnu-jar.js');;

// Directory containing your Next.js generated HTML files
const htmlOutputDir = path.join(__dirname, '.next', 'server', 'pages');

// Validation function
function validateHTML(filePath) {
  return new Promise((resolve, reject) => {
    const child = spawn('java', ['-jar', vnuJarPath, filePath]);

    let errors = '';
    child.stderr.on('data', (data) => {
      errors += data.toString();
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(errors);
      }
    });
  });
}

// Collect and validate all HTML files
async function runValidation() {
  try {
    const files = glob.sync(path.join(htmlOutputDir, '**/*.html'));
    for (const file of files) {
      console.log(`Validating: ${file}`);
      await validateHTML(file);
      console.log(`Validation passed: ${file}`);
    }
    console.log('All HTML files passed validation.');
  } catch (error) {
    console.error('Validation failed:\n', error);
    process.exit(1);
  }
}

runValidation();