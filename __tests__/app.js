'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-office-ui-fabric-react-control:app', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'HelloWorld' });
  });

  it('creates files', () => {
    assert.file([
      'src/HelloWorld.ts',
      'src/components/HelloWorld/index.ts',
      'src/components/HelloWorld/HelloWorld.base.tsx',
      'src/components/HelloWorld/HelloWorld.styles.ts',
      'src/components/HelloWorld/HelloWorld.tsx',
      'src/components/HelloWorld/HelloWorld.types.ts',
      'src/components/HelloWorld/HelloWorldPage.tsx',
      'src/components/HelloWorld/examples/HelloWorld.Basic.Example.tsx'
    ]);
  });
});
