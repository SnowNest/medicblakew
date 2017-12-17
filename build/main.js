webpackJsonp([6],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, _usuario, loadingCtrl, toastCtrl, afDb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuario = _usuario;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.afDb = afDb;
        this.mensaje = "";
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.obtener_storage().then(function (_data) {
                _this.afDb.object('/db_users/usuarios/' + _data).valueChanges().subscribe(function (result) {
                    _this.items = _this.afDb.list('/db_users/usuarios/' + result.doctor + '/mensajes/' + _data).valueChanges();
                });
            }).catch(function (error) {
                loading.dismiss();
                _this.toastCtrl.create({
                    message: 'ERROR de carga mensajes',
                    duration: 1500
                }).present();
                console.log("ERROR en logIn: " + JSON.stringify(error));
            });
            loading.dismiss();
        });
    }
    ChatPage.prototype.enviar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.obtener_storage().then(function (_data) {
                _this.afDb.object('/db_users/usuarios/snow/mensajes/usuarios/' + _data).update({
                    "usr": _data
                });
                _this.afDb.list('/db_users/usuarios/snow/mensajes/' + _data).push({
                    mensaje: _this.mensaje,
                    usuario: _data
                });
                _this.mensaje = "";
            }).catch(function (error) {
                loading.dismiss();
                _this.toastCtrl.create({
                    message: 'ERROR de envio mensajes',
                    duration: 1500
                }).present();
                console.log("ERROR en logIn: " + JSON.stringify(error));
            });
            loading.dismiss();
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="chat-container" *ngFor="let item of items | async">\n    <p>{{item.usuario}}: {{item.mensaje}}</p> \n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-label stacked>Mensaje</ion-label>\n    <ion-input type="text" [(ngModel)]="mensaje"></ion-input>\n  </ion-item>\n\n  <button ion-button full (click)="enviar()" color="secondary">\n    enviar\n  </button>\n</ion-footer>'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatmePage = (function () {
    function ChatmePage(navCtrl, navParams, _usuario, loadingCtrl, toastCtrl, afDb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuario = _usuario;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.afDb = afDb;
        this.mensaje = "";
        this.navParams.get('userParams');
        console.log(this.navParams.data);
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.obtener_storage().then(function (_data) {
                _this.items = _this.afDb.list('/db_users/usuarios/' + _data + '/mensajes/' + _this.navParams.data).valueChanges();
            }).catch(function (error) {
                loading.dismiss();
                _this.toastCtrl.create({
                    message: 'ERROR de carga mensajes',
                    duration: 1500
                }).present();
                console.log("ERROR en logIn: " + JSON.stringify(error));
            });
            loading.dismiss();
        });
    }
    ChatmePage.prototype.enviar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.obtener_storage().then(function (_data) {
                _this.afDb.list('/db_users/usuarios/snow/mensajes/' + _this.navParams.data).push({
                    mensaje: _this.mensaje,
                    usuario: _data
                });
                _this.mensaje = "";
            }).catch(function (error) {
                loading.dismiss();
                _this.toastCtrl.create({
                    message: 'ERROR de envio mensajes',
                    duration: 1500
                }).present();
                console.log("ERROR en logIn: " + JSON.stringify(error));
            });
            loading.dismiss();
        });
    };
    ChatmePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatme',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\chatme\chatme.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>chat</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    \n      <div class="chat-container" *ngFor="let item of items | async">\n        <p>{{item.usuario}}: {{item.mensaje}}</p> \n      </div>\n    \n    </ion-content>\n    \n    <ion-footer>\n      <ion-item>\n        <ion-label stacked>Mensaje</ion-label>\n        <ion-input type="text" [(ngModel)]="mensaje"></ion-input>\n      </ion-item>\n    \n      <button ion-button full (click)="enviar()" color="secondary">\n        enviar\n      </button>\n    </ion-footer>\n'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\chatme\chatme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ChatmePage);
    return ChatmePage;
}());

//# sourceMappingURL=chatme.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slides_slides__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, _usuario, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuario = _usuario;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = "";
        this.password = "";
    }
    LoginPage.prototype.logIn = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present();
        this._usuario.logIn().then(function (_dataUsuario) {
            if (_dataUsuario == true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__slides_slides__["a" /* SlidesPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            loading.dismiss();
        }).catch(function (error) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'ERROR de inicio se sesión',
                duration: 1500
            }).present();
            console.log("ERROR en logIn: " + JSON.stringify(error));
        });
    };
    LoginPage.prototype.logInUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present();
        this._usuario.logInUsr(this.user, this.password).then(function (_dataUsuario) {
            if (_dataUsuario == true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.toastCtrl.create({
                    message: 'Usuario y/o contraseña incorrectos',
                    duration: 1500
                }).present();
            }
            loading.dismiss();
        }).catch(function (error) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'ERROR de inicio se sesión',
                duration: 1500
            }).present();
            console.log("ERROR en logIn: " + JSON.stringify(error));
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-content>\n    <div class="marco">\n      <ion-item>\n        <ion-label stacked>Usuario</ion-label>\n        <ion-input type="text" [(ngModel)]="user"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>contraseña</ion-label>\n        <ion-input type="password"  [(ngModel)]="password" ></ion-input>\n      </ion-item>\n\n      <button ion-button full (click)="logInUser()" color="secondary">\n        Iniciar sesion\n      </button>\n\n      <button ion-button full (click)="logIn()">\n        Iniciar con cuenta de Facebook\n      </button>\n    </div>\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatme_chatme__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MensajesPage = (function () {
    function MensajesPage(navCtrl, navParams, _usuario, loadingCtrl, toastCtrl, afDb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuario = _usuario;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.afDb = afDb;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.obtener_storage().then(function (_data) {
                _this.items = _this.afDb.list('/db_users/usuarios/' + _data + "/mensajes/usuarios").valueChanges();
            }).catch(function (error) {
                loading.dismiss();
                _this.toastCtrl.create({
                    message: 'ERROR de carga mensajes',
                    duration: 1500
                }).present();
                console.log("ERROR en logIn: " + JSON.stringify(error));
            });
            loading.dismiss();
        });
    }
    MensajesPage.prototype.ionViewDidLoad = function () {
    };
    MensajesPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatme_chatme__["a" /* ChatmePage */], item);
    };
    MensajesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\mensajes\mensajes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mensajes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <button ion-item *ngFor="let item of items | async" (click)="itemSelected(item.usr)">\n          {{ item.usr }}\n        </button>  \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\mensajes\mensajes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MensajesPage);
    return MensajesPage;
}());

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SlidesPage = (function () {
    function SlidesPage(navCtrl, navParams, _usuario, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuario = _usuario;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.gender = "";
        this.usuario = "";
        this.usuariod = "";
        this.password = "";
        this.password2 = "";
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
    };
    SlidesPage.prototype.ngAfterViewInit = function () {
        this.slides.lockSwipes(true);
        this.slides.freeMode = false;
        this.slides.paginationType = "progress";
    };
    SlidesPage.prototype.continuar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            if (_this.password == _this.password2) {
                if (_this.password[7] && _this.gender != "") {
                    _this._usuario.veriUsr(_this.usuario, _this.password, _this.gender).then(function (_dataUsuario) {
                        if (_dataUsuario == true) {
                            if (_this.gender == "doctor") {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            }
                            else {
                                _this.slides.lockSwipes(false);
                                _this.slides.slideNext();
                                _this.slides.lockSwipes(true);
                            }
                        }
                        else {
                            _this.toastCtrl.create({
                                message: 'El usuario ya existe',
                                duration: 1500
                            }).present();
                        }
                    }).catch(function (error) {
                        _this.toastCtrl.create({
                            message: 'ERROR',
                            duration: 1500
                        }).present();
                        console.log("ERROR " + JSON.stringify(error));
                    });
                }
                else {
                    _this.toastCtrl.create({
                        message: 'La contraseña debe tener minimo 8 caracteres y se debe seleccionar un tipo de cuenta',
                        duration: 1500
                    }).present();
                }
            }
            else {
                _this.toastCtrl.create({
                    message: 'Las contraseñas no coinciden',
                    duration: 1500
                }).present();
            }
            loading.dismiss();
        });
    };
    SlidesPage.prototype.validarMedico = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.veriMedi(_this.usuariod, _this.usuario).then(function (_data) {
                if (_data == "doctor") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.toastCtrl.create({
                        message: _this.usuariod + ' no tiene rol de doctor',
                        duration: 1500
                    }).present();
                }
            });
            loading.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], SlidesPage.prototype, "slides", void 0);
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\slides\slides.html"*/'<ion-content>\n  <div class="marco">\n    <ion-slides pager>\n\n      <ion-slide>\n\n        <h2 class="slide-title">Primero lo primero</h2>\n        <p>Para continuar, debe de ingresar su nuevo nikname y cotraseña</p>\n\n        <ion-item>\n          <ion-label stacked>usuario</ion-label>\n          <ion-input type="text" [(ngModel)]="usuario"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>contaseña</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>repetir contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="password2"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Tipo de cuenta</ion-label>\n          <ion-select [(ngModel)]="gender">\n            <ion-option value="usuario">Usuario</ion-option>\n            <ion-option value="doctor">Doctor</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <button ion-button (click)="continuar()">\n          Verificar\n        </button>\n\n      </ion-slide>\n\n      <ion-slide>\n        <ion-toolbar>\n        </ion-toolbar>\n\n        <h2 class="slide-title">Vinculacion de doctor</h2>\n        <p>Para continuar, debe de ingresar el usuario del doctor a vincular su cuenta</p>\n        <ion-item>\n          <ion-label stacked>usuario del doctor</ion-label>\n          <ion-input type="text" [(ngModel)]="usuariod"></ion-input>\n        </ion-item>\n        <button ion-button large clear icon-end color="primary" (click)="validarMedico()">\n          Continuar\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\slides\slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		458,
		5
	],
	"../pages/chat/chat.module": [
		459,
		4
	],
	"../pages/chatme/chatme.module": [
		460,
		3
	],
	"../pages/login/login.module": [
		461,
		2
	],
	"../pages/mensajes/mensajes.module": [
		462,
		1
	],
	"../pages/slides/slides.module": [
		463,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mensajes_mensajes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_slides_slides__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chatme_chatme__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_usuarios_usuarios__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: "AIzaSyC9bEftmOEEy4T6Ew14Wm1jFvfkSap4mqw",
    authDomain: "medicblake-75c99.firebaseapp.com",
    databaseURL: "https://medicblake-75c99.firebaseio.com",
    projectId: "medicblake-75c99",
    storageBucket: "medicblake-75c99.appspot.com",
    messagingSenderId: "792046188013"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mensajes_mensajes__["a" /* MensajesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chatme_chatme__["a" /* ChatmePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatme/chatme.module#ChatmePageModule', name: 'ChatmePage', segment: 'chatme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensajes/mensajes.module#MensajesPageModule', name: 'MensajesPage', segment: 'mensajes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mensajes_mensajes__["a" /* MensajesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chatme_chatme__["a" /* ChatmePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_usuarios_usuarios__["a" /* UsuariosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuariosProvider = (function () {
    function UsuariosProvider(afAuth, afDb, storage, plt) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.storage = storage;
        this.plt = plt;
    }
    UsuariosProvider.prototype.logIn = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider()).then(function (result) {
                _this.afDb.object("/db_users/" + result.additionalUserInfo.profile.id).update(result.additionalUserInfo.profile);
                //this.guardar_storage(result.additionalUserInfo.profile.id, "user");
                resolve(result.additionalUserInfo.isNewUser);
            });
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.logInUsr = function (user, password) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.afDb.object("/db_users/usuarios/" + user).valueChanges().subscribe(function (result) {
                if (result.password == password) {
                    _this.guardar_storage(result.nik, "user");
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.veriUsr = function (usuario, pass, tip) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.afDb.object("/db_users/usuarios/" + usuario).valueChanges().subscribe(function (result) {
                if (result) {
                    resolve(false);
                }
                else {
                    _this.obtener_storage().then(function (usr) {
                        _this.afDb.object("/db_users/usuarios/" + usuario).update({ id: usr, nik: usuario, password: pass, tipo: tip });
                        _this.guardar_storage(usuario, "user");
                        resolve(true);
                    });
                }
            });
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.veriMedi = function (usuariod, usuario) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.afDb.object("/db_users/usuarios/" + usuariod).valueChanges().subscribe(function (result) {
                if (result == null) {
                    resolve("false");
                }
                else if (result.tipo == "doctor") {
                    _this.afDb.object("/db_users/usuarios/" + usuario).update({ doctor: usuariod });
                    _this.afDb.object("/db_users/usuarios/" + usuariod + "/mensajes/" + usuario).update({ menssage: "hola" });
                    resolve(result.tipo);
                }
                else {
                    resolve(result.tipo);
                }
            });
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.comproTipo = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.obtener_storage().then(function (usr) {
                _this.afDb.object("/db_users/usuarios/" + usr).valueChanges().subscribe(function (result) {
                    resolve(result.tipo);
                });
            });
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.guardar_storage = function (id, op) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.plt.is("cordova")) {
                _this.storage.set(op, id);
            }
            else {
                localStorage.setItem(op, id);
            }
            resolve();
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.obtener_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.plt.is("cordova")) {
                _this.storage.ready().then(function () {
                    _this.storage.get("user").then(function (user) {
                        resolve(user);
                    });
                });
            }
            else {
                resolve(localStorage.getItem("user"));
            }
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider.prototype.borrar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.plt.is("cordova")) {
                _this.storage.remove("user");
            }
            else {
                localStorage.clear();
            }
            resolve();
        }).catch(function (error) { return console.log("Error en promesa Service: " + JSON.stringify(error)); });
        return promesa;
    };
    UsuariosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Platform */]) === "function" && _d || Object])
    ], UsuariosProvider);
    return UsuariosProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuarios_usuarios__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _usuarioProvider) {
        var _this = this;
        this._usuarioProvider = _usuarioProvider;
        platform.ready().then(function () {
            _this._usuarioProvider.obtener_storage().then(function (usr) {
                if (usr) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                }
                statusBar.styleDefault();
                splashScreen.hide();
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_usuarios_usuarios__["a" /* UsuariosProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, _usuario, loadingCtrl, toastCtrl, alertCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuario = _usuario;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.title = "";
        this.message = "";
        this.datos = "";
        this._usuario.obtener_storage().then(function (usr) {
            _this.items = afDB.list("db_users/usuarios/" + usr + "/sintomas").valueChanges();
        });
    }
    HomePage.prototype.logchtas = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        loading.present().then(function () {
            _this._usuario.comproTipo().then(function (_data) {
                if (_data == "usuario") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__["a" /* MensajesPage */]);
                }
            }).catch(function (error) {
                loading.dismiss();
                _this.toastCtrl.create({
                    message: 'ERROR de carga de mensajes',
                    duration: 1500
                }).present();
                console.log("ERROR en logIn: " + JSON.stringify(error));
            });
            loading.dismiss();
        });
    };
    HomePage.prototype.frcuencia = function (_data) {
        var _this = this;
        this.title = "nueva " + _data;
        this.message = "ingrese nueva  " + _data;
        var prompt = this.alertCtrl.create({
            title: this.title,
            message: this.message,
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.datos = data.title;
                        _this._usuario.obtener_storage().then(function (usr) {
                            _this.afDB.list("db_users/usuarios/" + usr + "/sintomas").push(_data + ":" + _this.datos);
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.logout = function () {
        this._usuario.borrar_storage().then(function () {
            window.location.reload(false);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\nesto\Desktop\medicblake\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-item class="card-background-page" (click)="logchtas()">\n    <ion-card>\n      <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-273507.jpg" />\n      <div class="card-title">Platica con tu medico</div>\n      <div class="card-subtitle">chatea en linea con tu medico y ahorra salir</div>\n    </ion-card>\n  </ion-item>\n\n  <ion-item>\n    <ion-card>\n      <ion-card-header>\n        Historial\n      </ion-card-header>\n\n      <ion-list *ngFor="let item of items | async">\n        \n          {{item | json}}\n\n      </ion-list>\n    </ion-card>\n  </ion-item>\n  <button ion-button full (click)="logout()" color="dandger">\n      Cerrar sesion\n    </button>\n\n  <ion-fab right bottom padding>\n    <button ion-fab color="danger">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="frcuencia(\'frecuencia\')">\n        <ion-icon name="pulse"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="nutrition" (click)="frcuencia(\'peso\')"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="walk" (click)="frcuencia(\'actividad\')"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="thermometer" (click)="frcuencia(\'sintoma\')"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\nesto\Desktop\medicblake\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[292]);
//# sourceMappingURL=main.js.map