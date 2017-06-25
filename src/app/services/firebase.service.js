"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("firebase");
var FirebaseService = (function () {
    function FirebaseService() {
        this.items = [];
        this.q = [];
    }
    FirebaseService.prototype.init = function () {
        var config = {
            apiKey: "AIzaSyCtWS13cYro9d3PgPqb3qYkpBYUSLlCmJQ",
            authDomain: "testing01-4cbe9.firebaseapp.com",
            databaseURL: "https://testing01-4cbe9.firebaseio.com",
            projectId: "testing01-4cbe9",
            storageBucket: "testing01-4cbe9.appspot.com",
            messagingSenderId: "3774538875"
        };
        firebase.initializeApp(config);
    };
    FirebaseService.prototype.writeUserData = function (userId, username) {
        firebase.database().ref('users/' + userId).set({
            username: username
        });
    };
    FirebaseService.prototype.getData = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            firebase.database().ref('users').on('value', function (snapshot) {
                var snap = snapshot.val();
                _this.items = [];
                for (var key in snap) {
                    _this.items.push(snap[key]);
                }
                observer.next(_this.items);
            });
        });
    };
    FirebaseService.prototype.writeNewQuestion = function (uuid, question) {
        firebase.database().ref('questions/' + uuid).set({
            question: question
        });
    };
    FirebaseService.prototype.getQuestions = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            firebase.database().ref('questions').on('value', function (snapshot) {
                var snap = snapshot.val();
                _this.q = [];
                for (var key in snap) {
                    _this.q.push(snap[key]);
                }
                observer.next(_this.q);
            });
        });
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FirebaseService);
exports.FirebaseService = FirebaseService;
