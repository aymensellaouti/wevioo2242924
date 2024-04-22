import { InjectionToken } from "@angular/core";

export const uuidInjectionToken = new InjectionToken<() => string>('UUID_INJECTION_TOKEN');
