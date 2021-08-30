import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get userApi(): string {
    return environment.userApi;
  }
}
