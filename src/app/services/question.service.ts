import { Injectable, EventEmitter } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Question from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

    constructor(private firestore: Firestore) { }
    
    addQuestion(question: Question) {
        const placeRef = collection(this.firestore, 'questions');
        return addDoc(placeRef, question);
    }

    getQuestions():Observable<Question[]>  {
        const placeRef = collection(this.firestore, 'questions');
        return collectionData(placeRef, {idField: 'id'}) as Observable<Question[]>;
    }

    $questionsTitles = new EventEmitter<any>();
    $searchResults = new EventEmitter<any>();
    $filterTitles = new EventEmitter<any>();
    $allQuestions = new EventEmitter<any>();
    $questionsFromHeader = new EventEmitter<any>();

}
