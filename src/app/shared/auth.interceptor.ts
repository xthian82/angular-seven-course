import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

import 'rxjs/add/operator/switchMap';

export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth')
      .take(1)
      .switchMap((authState: fromAuth.State) => {
      const copiedReq = req.clone({headers: req.headers.set('auth', authState.token)});
      return next.handle(copiedReq);
    });
  }
}