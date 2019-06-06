import { Injectable } from '@angular/core';
import { IUsers } from './user.model';

@Injectable()

export class AuthService {
    currentUser:IUsers
    loginUser(userName: string, password:string){
            this.currentUser = {
                id: 1,
                userName: userName,
                firstName: 'john',
                lastName: 'papa'
            }

    }
    isAuthenticated(){
        return !!this.currentUser;
    }

}