# angular-init-focus

Attribute directive to automatically focus on new elements upon creation.

## Usage

```html
  <div ng-repeat="answer in $ctrl.items">
    <input type="text" init-focus>
  </div>
  <button type="button" class="btn btn-link" ng-click="$ctrl.items.push({});">Add</button>
```
