import { LifecycleFlags, PropertyBinding, bindingBehavior } from '@aurelia/runtime';
import { attrAccessor } from '../../observation/data-attribute-accessor';

import type { Scope } from '@aurelia/runtime';

@bindingBehavior('attr')
export class AttrBindingBehavior {
  public bind(flags: LifecycleFlags, _scope: Scope, _hostScope: Scope | null, binding: PropertyBinding): void {
    binding.targetObserver = attrAccessor;
  }

  public unbind(flags: LifecycleFlags, _scope: Scope, _hostScope: Scope | null, binding: PropertyBinding): void {
    if (binding.targetObserver === attrAccessor) {
      binding.targetObserver = void 0;
    }
  }
}
