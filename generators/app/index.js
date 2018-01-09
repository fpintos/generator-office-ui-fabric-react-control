'use strict';
const Generator = require('yeoman-generator');
var ejs = require('ejs');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log('New generator-office-ui-fabric-react control.');
    this.log('Control will be created in ' + this.destinationPath('src'));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Control Name:',
        validate: str => {
          return Boolean(str);
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const sourceFiles = [
      'src/Name.ts',
      'src/components/Name/index.ts',
      'src/components/Name/Name.base.tsx',
      'src/components/Name/Name.styles.ts',
      'src/components/Name/Name.tsx',
      'src/components/Name/Name.types.ts',
      'src/components/Name/NamePage.tsx',
      'src/components/Name/examples/Name.Basic.Example.tsx'
    ];

    const templates = sourceFiles.map(inputFileName => {
      return {
        input: inputFileName,
        output: inputFileName.replace(/Name/g, this.props.name)
      };
    });

    const templateContext = {
      name: this.props.name
    };

    templates.forEach(template => {
      this.fs.copyTpl(
        this.templatePath(template.input),
        this.destinationPath(template.output),
        templateContext
      );
    });

    const appDefinitionFileName = 'src/demo/AppDefinition.tsx';
    if (this.fs.exists(this.destinationPath(appDefinitionFileName))) {
      const appDefinitionTemplate = this.fs.read(
        this.templatePath(appDefinitionFileName)
      );

      const appDefinitionFragment = ejs.render(appDefinitionTemplate, templateContext);

      let appDefinitionContents = this.fs.read(appDefinitionFileName);
      if (appDefinitionContents.indexOf(appDefinitionFragment) === -1) {
        const replaceStr = 'links: [\r\n';
        appDefinitionContents = appDefinitionContents.replace(
          replaceStr,
          replaceStr + appDefinitionFragment
        );
      }

      this.fs.write(appDefinitionFileName, appDefinitionContents);
    }
  }
};
