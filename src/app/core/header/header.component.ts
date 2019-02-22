import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as AuthActions from '../../auth/store/auth.actions';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private authState: Observable<fromAuth.State>;

  constructor(private dataStorage: DataStorageService, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorage.storeRecipes()
    .subscribe((response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
