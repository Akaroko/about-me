import { NgModule, SkipSelf, Optional } from '@angular/core'


@NgModule({
  declarations: [],
  imports: [],
  providers: [],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule was already injected')
    }
  }
}
