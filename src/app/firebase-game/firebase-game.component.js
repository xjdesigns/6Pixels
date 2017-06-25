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
var alert_service_1 = require("../services/alert-service");
var firebase_service_1 = require("../services/firebase.service");
var FirebaseGameComponent = (function () {
    function FirebaseGameComponent(alertService, ffbs) {
        this.alertService = alertService;
        this.ffbs = ffbs;
        this.users = [];
        this.questions = [];
        this.userLength = 0;
        this.currentUser = {};
        this.currentUserCount = 0;
        this.thumbsActive = false;
        this.ffbs.init();
    }
    FirebaseGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ffbs.getData().subscribe(function (data) {
            // console.warn('data', data);
            _this.users = data;
            _this.currentUserCount = _this.users.length;
            // console.warn('user', this.currentUserCount);
        });
        this.ffbs.getQuestions().subscribe(function (data) {
            console.warn('questions', data);
            _this.questions = data;
        });
    };
    FirebaseGameComponent.prototype.vote = function (vote, idx) {
        console.warn('vote', vote, idx);
    };
    //users
    FirebaseGameComponent.prototype.checkIn = function (val, ev) {
        var _this = this;
        ev.preventDefault();
        this.currentUser = {
            username: val.value.username,
            name: val.value.name
        };
        this.checkForUser();
        this.thumbsActive = true;
        setTimeout(function () {
            _this.thumbsActive = false;
        }, 10000);
    };
    FirebaseGameComponent.prototype.createNewUser = function (uuid, name) {
        this.ffbs.writeUserData(uuid, name);
    };
    FirebaseGameComponent.prototype.checkForUser = function () {
        var _this = this;
        var j = this.users.filter(function (user) {
            return user.username === _this.currentUser.username ? true : false;
        });
        if (j.length > 0) {
            this.currentUser = this.currentUser;
            this.addAlert('User Already Exists, Enjoy!');
        }
        else {
            this.createNewUser(this.currentUserCount + 1, this.currentUser.username);
            this.addAlert('New User Created, Enjoy!');
        }
    };
    // questions
    FirebaseGameComponent.prototype.addQuestion = function (question, ev) {
        ev.preventDefault();
        console.warn('q', question.value.question);
        var q = question.value.question;
        var uuid = this.questions.length + 1;
        this.ffbs.writeNewQuestion(uuid, q);
    };
    FirebaseGameComponent.prototype.verdict = function (form) {
        console.warn(form.value);
    };
    FirebaseGameComponent.prototype.addAlert = function (msg) {
        this.alertService.addAlert(msg, 'success');
    };
    return FirebaseGameComponent;
}());
FirebaseGameComponent = __decorate([
    core_1.Component({
        selector: 'app-firebase-game',
        templateUrl: 'app/firebase-game/firebase-game.component.html',
        providers: [firebase_service_1.FirebaseService]
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService, firebase_service_1.FirebaseService])
], FirebaseGameComponent);
exports.FirebaseGameComponent = FirebaseGameComponent;
