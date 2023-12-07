import { Injectable } from '@angular/core';
import { MatSnackBar}from  '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'ok') {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
      verticalPosition: 'top',
    });
  }
}
