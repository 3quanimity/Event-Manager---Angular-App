import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser?.firstName)
    let lastName = new FormControl(this.authService.currentUser?.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    })
  }

  saveProfile(formValues: any) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
