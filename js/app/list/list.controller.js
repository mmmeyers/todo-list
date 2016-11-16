angular
  .module('todoApp')
  .controller('ListController', ListController);



function ListController() {
  var vm = this;
  var selectedId = -1;
  var addFlag = false;
  var editFlag = false;
  var removeFlag = false;

  vm.add = add;
  vm.currentTask = {};
  vm.startAdd = startAdd;
  vm.startEdit = startEdit;
  vm.startRemove = startRemove;
  vm.isInReadMode = isInReadMode;
  vm.isInAddMode = isInAddMode;
  vm.isInEditMode = isInEditMode;
  vm.save = save;
  vm.cancel = cancel;

  vm.list = {
    name: 'Todo List',
    tasks: [
      {
        id: 1,
        name: 'Take out trash',
        complete: false
      },
      {
        id: 2,
        name: 'Buy Grandma a present',
        complete: false
      },
      {
        id: 3,
        name: 'Clean out car',
        complete: true
      },
      {
        id: 4,
        name: 'Fix bathroom sink',
        complete: false
      }
    ]
  }

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }

  function startEdit() {

  }

  function startRemove() {

  }

  function isInReadMode(id) {
    return selectedId < 0 || selectedId !== id;
  }

  function isInAddMode() {
    return addFlag;
  }

  function isInEditMode() {

  }

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }

  function save() {

  }

  function cancel() {

  }
}
