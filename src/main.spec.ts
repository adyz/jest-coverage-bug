import * as angular from 'angular';
import "angular-mocks";
import {render} from './render';

angular.module('testApp').component('testComponent', {
  controller: function($uibModal){
    console.log('Counter');


    $uibModal.open({
      // animation: false,
      template: `<div>dada</div>`,
    });
  },
  template: `<p>Test</p>`
})


// Setup before each test
beforeEach(() => {

  // Mock default module
  angular.mock.module('testApp');


});



// Some tests
describe('Example', () => {

  it('Renders a counter', async() => {
      const { getByText } = render(`<test-component></test-component>`, {
          modules: ['testApp']
      })
      await new Promise(res => setTimeout(res, 1000))

      expect(getByText('Test')).toBeDefined()
  })

})

