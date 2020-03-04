import * as angular from 'angular';
import { prettyDOM } from '@testing-library/dom';
import {render} from './jest-render-angular-helper';

require('./myComponent');

// Setup before each test
beforeEach(() => {
  // Mock default module
  angular.mock.module('testApp');
});



// Some tests
describe('Example', () => {

  it('Renders a counter', async() => {
      const { getByText, container } = render(`<my-component></my-component>`, {
          modules: ['testApp']
      })
      await new Promise(res => setTimeout(res, 1000))

      console.log(prettyDOM(document.body));

      expect(getByText('Test')).toBeDefined()
  })

})

