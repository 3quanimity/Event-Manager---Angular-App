import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: IUser | undefined;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: "Dummy",
      lastName: "Person",
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
