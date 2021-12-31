import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success(message: string, title?: string): void;
  info(message: string, title?: string): void;
  warning(message: string, title?: string): void;
  error(message: string, title?: string): void;
}
