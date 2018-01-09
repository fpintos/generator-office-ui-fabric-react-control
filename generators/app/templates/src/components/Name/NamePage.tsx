import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { <%= name %>BasicExample } from './examples/<%= name %>.Basic.Example';

export class <%= name %>Page extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='<%= name %>'
        componentName='<%= name %>'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic <%= name %> Example'
              code={ require('!raw-loader!./examples/<%= name %>.Basic.Example') }
            >
              <<%= name %>BasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./<%= name %>.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: <%= name %> is used to display ...</p>
          </div>
        }
        bestPractices={ <div /> }
        dos={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
      />
    );
  }
}
