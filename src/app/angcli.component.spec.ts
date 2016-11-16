import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngcliAppComponent } from '../app/angcli.component';

beforeEachProviders(() => [AngcliAppComponent]);

describe('App: Angcli', () => {
  it('should create the app',
      inject([AngcliAppComponent], (app: AngcliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angcli works!\'',
      inject([AngcliAppComponent], (app: AngcliAppComponent) => {
    expect(app.title).toEqual('angcli works!');
  }));
});
