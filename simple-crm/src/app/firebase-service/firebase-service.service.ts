import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  firestore: Firestore = inject(Firestore);
  allUsers: any = [];
  allIds: string[] = [];

  unsubList;
  unsubSingle;

  constructor() {
    this.unsubList = onSnapshot(this.getUsersRef(), (list) => {
      this.allUsers = [];
      this.allIds = [];
      list.forEach((element) => {
        let userData = element.data();
        userData['id'] = element.id;  // create a new key for the userData object, i.e. for each object in the collection, and assign the corresponding id to each object
        this.allUsers.push(userData);
        ;
      })
    });

    this.unsubSingle = onSnapshot(this.getSingleUsersDoc("users", "ENERhrVzf2dLr3ovxWva"), (element) => {
      console.log(element.data());
    })
  }


  async addUser(item: {}) {
    await addDoc(this.getUsersRef(), item).catch((err) => {
      console.log(err);
    }).then((docRef) => { console.log('Document written with ID', docRef) });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUsersDoc(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }
}
