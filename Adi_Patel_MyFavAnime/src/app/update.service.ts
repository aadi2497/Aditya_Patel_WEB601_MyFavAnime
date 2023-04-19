import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {}

  checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const snackBarRef = this.snackBar.open(
          'Update available',
          'Reload'
        );
        snackBarRef.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => location.reload());
        });
      });
    }
  }
}
