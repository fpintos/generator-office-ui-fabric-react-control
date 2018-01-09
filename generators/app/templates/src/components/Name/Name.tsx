import { <%= name %>Base } from './<%= name %>.base';
import { getStyles } from './<%= name %>.styles';
import { I<%= name %>Props } from './<%= name %>.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { I<%= name %>Props };
export const <%= name %> = styled(<%= name %>Base, getStyles);
