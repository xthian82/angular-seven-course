import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

import { take, switchMap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth')
      .pipe(take(1),
        switchMap((authState: fromAuth.State) => {
          const copiedReq = req.clone({headers: req.headers.set('auth', authState.token)});
            return next.handle(copiedReq);
        }));
  }
}
