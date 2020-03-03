import * as angular from 'angular';
import { getQueriesForElement} from '@testing-library/dom'
function render(html: any, config: {modules: any[]}) {
    const container = document.createElement('div')
    container.innerHTML = html
    angular.bootstrap(container, config.modules)
    return {
        container,
        ...getQueriesForElement(container),
    }
}

export {
    render
}