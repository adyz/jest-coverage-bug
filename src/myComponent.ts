function myController($uibModal: any) {
    console.log('Controller fired successfully!');
    $uibModal.open({
        template: `<div>Modal here</div>`,
    });
}

angular.module('testApp').component('myComponent', {
    controller: ['$uibModal', myController],
    template: `<p>Test</p>`
})