# angular-init-focus
Attribute directive to autofocus element upon creation

## Usage

```
  <div ng-repeat="answer in $ctrl.items">
    <input type="text" init-focus>
  </div>
  <button type="button" class="btn btn-link" ng-click="$ctrl.items.push({});">Add</button>
```
