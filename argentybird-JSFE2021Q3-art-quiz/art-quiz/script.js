(() => {
    var t = {
            425: () => {
                const t = ["font-size: 30px; color: rgb(2, 120, 151); text-decoration: underline;", "font-size: 14px; color: rgb(2, 120, 151);", "font-size: 14px; color: #fff; background-color: #8AB4F8; border-radius: 35%; padding: 2px;", "font-size: 12px; color: rgb(2, 120, 151);"];
            }
        },
        e = {};

    function s(i) {
        var r = e[i];
        if (void 0 !== r)
            return r.exports;
        var o = e[i] = {
            exports: {}
        };
        return t[i](o, o.exports, s),
            o.exports
    }
    s.d = (t, e) => {
            for (var i in e)
                s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        },
        s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var i = {};
    (() => {
        "use strict";
        let t;
        s.d(i, {
            zG: () => u,
            zR: () => l,
            j1: () => h,
            vV: () => c
        });
        class e {
            constructor() {
                this.timerPanelList = document.querySelectorAll(".timer"),
                    this.currentTimerPanel,
                    this.artistsAnswerBody = document.querySelector(".answers-artists-list"),
                    this.picturesMainBlock = document.querySelector(".questions-pictures-main")
            }
            start() {
                if (this.currentTimerPanel = "artists" === c.activeCategory ? this.timerPanelList[0] : this.timerPanelList[1], !c.isTimeGame)
                    return void(this.currentTimerPanel.textContent = "");
                let e = c.timeAmount;
                this.currentTimerPanel.textContent = e,
                    t = setInterval((() => {
                        if (e--, -1 !== e)
                            this.currentTimerPanel.textContent = e;
                        else {
                            clearInterval(t);
                            const e = new Event("click");
                            "artists" === c.activeCategory ? this.artistsAnswerBody.dispatchEvent(e) : this.picturesMainBlock.dispatchEvent(e)
                        }
                    }), 1e3)
            }
            clearInterval() {
                clearInterval(t)
            }
        }
        class r {
            constructor() {
                this.exitBtns = document.querySelectorAll(".questions-btn"),
                    this.dotList,
                    this.player = new Audio("../assets/mp3/push.mp3"),
                    this.timer = new e,
                    this.categoryPage = document.querySelector(".categories"),
                    this.answersArray = [],
                    this.cardNum,
                    this.correctAnswers,
                    this.artistsMainBlock = document.querySelector(".questions-artists-main"),
                    this.artistsQuestion = document.querySelector(".questions-artists-question"),
                    this.artistsAnswerList = document.querySelectorAll(".artist-name"),
                    this.artistsAnswerBody = document.querySelector(".answers-artists-list"),
                    this.artistsRoundPage = document.querySelector(".questions-artists"),
                    this.picturesMainBlock = document.querySelector(".questions-pictures-main"),
                    this.picturesQuestion = document.querySelector(".questions-pictures-question"),
                    this.picturesAnswerList = document.querySelectorAll(".answers-pictures-img"),
                    this.picturesRoundPage = document.querySelector(".questions-pictures"),
                    this.picturesAnswersItems = document.querySelectorAll(".answers-pictures-item"),
                    this.popup = document.querySelector(".popup"),
                    this.popupImage = document.querySelector(".popup-img"),
                    this.popupPicture = document.querySelector(".popup-picture-name"),
                    this.popupArtist = document.querySelector(".popup-artist-name"),
                    this.popupBtn = document.querySelector(".popup-btn"),
                    this.popupContent = document.querySelector(".popup-content"),
                    this.popupScore = document.querySelector(".popup-score")
            }
            addEventListeners() {
                this.exitBtns.forEach((t => {
                    t.addEventListener("click", this.goBack.bind(this))
                }))
            }
            goBack() {
                const t = "artists" === c.activeCategory ? this.artistsRoundPage : this.picturesRoundPage;
                t.style.setProperty("pointer-events", "none"),
                    t.style.setProperty("opacity", "0"),
                    setTimeout(function() {
                            t.style.setProperty("display", "none"),
                                t.style.setProperty("pointer-events", "initial"),
                                this.categoryPage.style.setProperty("display", "block"),
                                setTimeout((() => this.categoryPage.style.setProperty("opacity", "1")), 50)
                        }
                        .bind(this), 200),
                    this.player.currentTime = 0,
                    this.player.volume = c.volume,
                    this.player.play(),
                    this.timer.clearInterval()
            }
            startRound(t) {
                this.dotList = "artists" === c.activeCategory ? document.querySelectorAll(".dot") : document.querySelectorAll(".dot-pictures"),
                    this.answersArray = [],
                    this.cardNum = t,
                    this.dotList.forEach((t => {
                        t.style.setProperty("background", "transparent"),
                            t.style.setProperty("border-color", "#7d8e95")
                    }));
                const e = "artists" === c.activeCategory ? u.slice(10 * t, 10 * t + 10) : h.slice(10 * t, 10 * t + 10),
                    s = document.querySelector(`.questions-${c.activeCategory}`);
                this.categoryPage.style.setProperty("pointer-events", "none"),
                    this.categoryPage.style.setProperty("opacity", "0"),
                    setTimeout(function() {
                            this.categoryPage.style.setProperty("display", "none"),
                                this.categoryPage.style.setProperty("pointer-events", "initial"),
                                s.style.setProperty("display", "block"),
                                setTimeout((() => s.style.setProperty("opacity", "1")), 50)
                        }
                        .bind(this), 200),
                    this.player.src = "../assets/mp3/push.mp3",
                    this.player.volume = c.volume,
                    this.player.play(),
                    this.handleRound(e, 0)
            }
            handleRound(t, e) {
                if (this.timer.start(),
                    "artists" === c.activeCategory) {
                    const s = `https://raw.githubusercontent.com/argentybird/image-data/master/img/${t[e].imageNum}.jpg`,
                        i = new Image;
                    i.src = s,
                        i.classList.add("questions-artists-img"),
                        i.onload = () => {
                            this.artistsRoundPage.querySelectorAll("img").forEach((t => t.remove())),
                                i.style.setProperty("opacity", "0"),
                                this.artistsMainBlock.append(i),
                                setTimeout((() => i.style.setProperty("opacity", "1")), 50),
                                this.artistsAnswerBody.style.setProperty("opacity", "1"),
                                this.artistsQuestion.textContent = "Кто автор этой картины?";
                            const s = new Set,
                                r = t[e].author,
                                o = t[e];
                            for (s.add(r); s.size < 4;) {
                                const t = Math.floor(120 * Math.random()) + 0;
                                s.add(u[t].author)
                            }
                            const a = this.shuffle([...s]);
                            Array.from(this.artistsAnswerList).map((t => t.textContent = a.pop()));
                            const n = s => {
                                this.timer.clearInterval(),
                                    this.checkAnswer.call(this, s, r, o, i, t, e)
                            };
                            this.artistsAnswerBody.addEventListener("click", n, {
                                    once: !0
                                }),
                                this.exitBtns.forEach((t => t.addEventListener("click", (() => {
                                    this.artistsAnswerBody.removeEventListener("click", n, {
                                        once: !0
                                    })
                                }))), {
                                    once: !0
                                })
                        }
                } else if ("pictures" === c.activeCategory) {
                    this.picturesQuestion.textContent = `Какую из этих картин написал ${t[e].author}?`;
                    let s = [];
                    const i = t[e];
                    for (s.push(i); s.length < 4;) {
                        const t = Math.floor(120 * Math.random()) + 0,
                            e = h[t];
                        s.find((t => t.author == e.author)) || s.push(e)
                    }
                    s = this.shuffle([...s]);
                    for (let t = 0; t < this.picturesAnswersItems.length; t++) {
                        const e = `https://raw.githubusercontent.com/argentybird/image-data/master/img/${s[t].imageNum}.jpg`,
                            i = new Image;
                        i.src = e,
                            i.classList.add("answers-pictures-img"),
                            i.onload = () => {
                                this.picturesAnswersItems[t].querySelector("img").remove(),
                                    i.style.setProperty("opacity", "0"),
                                    this.picturesAnswersItems[t].append(i),
                                    setTimeout((() => i.style.setProperty("opacity", "1")), 50)
                            }
                    }
                    const r = s => {
                        this.timer.clearInterval();
                        const r = new RegExp(i.imageNum).test(s.target.src);
                        this.checkAnswer.call(this, s, r, i, `https://raw.githubusercontent.com/argentybird/image-data/master/img/${i.imageNum}.jpg`, t, e)
                    };
                    this.picturesMainBlock.addEventListener("click", r, {
                            once: !0
                        }),
                        this.exitBtns.forEach((t => t.addEventListener("click", (() => {
                            this.picturesMainBlock.removeEventListener("click", r, {
                                once: !0
                            })
                        }))), {
                            once: !0
                        })
                }
            }
            shuffle(t) {
                for (let e = t.length - 1; e > 0; e--) {
                    let s = Math.floor(Math.random() * (e + 1));
                    [t[e], t[s]] = [t[s], t[e]]
                }
                return t
            }
            checkAnswer(t, e, s, i, r, o) {
                this.popupImage.src = "string" == typeof i ? i : i.src,
                    this.popupPicture.textContent = s.name,
                    this.popupArtist.textContent = s.author,
                    console.count("checkAnswer"),
                    t.target.textContent.trim() === e || !0 === e ? (this.popupContent.style.setProperty("border", "0.2rem solid lightgreen"),
                        this.dotList[o].style.setProperty("background-color", "#fcad85"),
                        this.dotList[o].style.setProperty("border-color", "#fcad85"),
                        this.answersArray.push(!0),
                        this.player.src = "../assets/mp3/trueAnswer.mp3",
                        this.player.volume = c.volume,
                        this.player.play()) : (this.popupContent.style.setProperty("border", "0.2rem solid rgb(253, 110, 110)"),
                        this.dotList[o].style.setProperty("background-color", "#7d8e95"),
                        this.answersArray.push(!1),
                        this.player.src = "../assets/mp3/falseAnswer.mp3",
                        this.player.volume = c.volume,
                        this.player.play()),
                    "string" == typeof i && (i = !1),
                    this.showPopup(r, i, o)
            }
            showPopup(t, e, s) {
                this.popup.style.setProperty("visibility", "visible"),
                    this.popup.style.setProperty("opacity", "1"),
                    this.popupBtn.addEventListener("click", (() => {
                        this.hidePopup.call(this, e),
                            9 === s ? this.showFinalPopup.call(this) : this.handleRound.call(this, t, ++s)
                    }), {
                        once: !0
                    })
            }
            hidePopup(t) {
                this.popup.style.setProperty("visibility", "hidden"),
                    this.popup.style.setProperty("opacity", "0"),
                    t && t.style.setProperty("opacity", "0"),
                    this.artistsAnswerBody.style.setProperty("opacity", "0")
            }
            showFinalPopup() {
                let t;
                switch (this.popupImage.src = "../assets/png/result.png",
                    this.popupArtist.textContent = "",
                    this.correctAnswers = this.answersArray.filter((t => t)).length,
                    this.correctAnswers) {
                    case 10:
                        t = "Вы Мастер!";
                        break;
                    case 9:
                        t = "Отличный результат!";
                        break;
                    case 8:
                        t = "Замечательный результат!";
                        break;
                    case 7:
                    case 6:
                        t = "Хороший результат!";
                        break;
                    case 5:
                    case 4:
                        t = "Неплохо, вы на верном пути!";
                        break;
                    case 3:
                    case 2:
                        t = "Вы можете лучше, продолжайте!";
                        break;
                    case 1:
                    case 0:
                        t = "Попробуйте ещё раз."
                }
                this.popupPicture.textContent = t,
                    this.popupScore.textContent = 10 === this.correctAnswers ? "M" : this.correctAnswers,
                    this.popupContent.style.setProperty("border", "0.2rem solid #fcad85"),
                    this.popup.style.setProperty("visibility", "visible"),
                    this.popup.style.setProperty("opacity", "1"),
                    this.popupScore.classList.add("active"),
                    this.player.src = "../assets/mp3/roundEnded.mp3",
                    this.player.volume = c.volume,
                    this.player.play(),
                    this.popupBtn.addEventListener("click", (() => {
                        this.hideFinalPopup.call(this)
                    }), {
                        once: !0
                    })
            }
            hideFinalPopup() {
                this.popup.style.setProperty("visibility", "hidden"),
                    this.popup.style.setProperty("opacity", "0"),
                    this.popupScore.textContent = "",
                    this.popupScore.classList.remove("active"),
                    this.player.src = "../assets/mp3/push.mp3",
                    this.writeAnswersData(),
                    this.goBack()
            }
            writeAnswersData() {
                const t = c.activeCategory;
                l[t][this.cardNum] = {
                        hasScore: !0,
                        pictures: this.answersArray,
                        score: this.correctAnswers
                    },
                    localStorage.setItem("categoriesData", JSON.stringify(l)),
                    (new a).show(c.activeCategory)
            }
        }
        class o {
            constructor() {
                this.menuBtn = document.querySelector(".menuBtn"),
                    this.categoryBtn = document.querySelector(".settingsBtn"),
                    this.cardList = document.querySelectorAll(".card-container"),
                    this.initialMenu = document.querySelector(".initial"),
                    this.categoryPage = document.querySelector(".categories"),
                    this.player = new Audio("../assets/mp3/push.mp3")
            }
            openScore(t) {
                this.categoryPage.style.setProperty("pointer-events", "none");
                const e = this.cardList[t].querySelector(".card-score");
                e.classList.add("animate"),
                    setTimeout((() => {
                        this.categoryPage.style.setProperty("opacity", "0");
                        const s = l[c.activeCategory][t].pictures;
                        let i = "artists" === c.activeCategory ? u : h;
                        i = i.slice(10 * t, 10 * t + 10);
                        for (let e = 0; e < s.length; e++) {
                            const r = this.cardList[e];
                            this.updateCardDescription(r, i, e);
                            const o = r.querySelector(".card-title-info"),
                                a = r.querySelector("img"),
                                n = r.querySelector(".card-title-right-answers");
                            o.textContent = c.monthList[t],
                                n.textContent = "";
                            const l = `https://raw.githubusercontent.com/argentybird/image-data/master/img/${i[e].imageNum}.jpg`,
                                p = new Image;
                            p.src = l,
                                p.classList.add("card-img"),
                                p.onload = () => {
                                    a.replaceWith(p)
                                },
                                s[e] ? p.style.setProperty("filter", "grayscale(0)") : p.style.setProperty("filter", "grayscale(1)")
                        }
                        setTimeout(function() {
                                    e.classList.remove("animate"),
                                        this.categoryPage.style.setProperty("display", "none"),
                                        e.style.setProperty("display", "none"),
                                        window.scrollTo(0, 0),
                                        this.categoryBtn.textContent = "Категории",
                                        this.categoryPage.style.setProperty("pointer-events", "initial"),
                                        this.categoryPage.style.setProperty("display", "block"),
                                        setTimeout((() => {
                                            this.categoryPage.style.setProperty("opacity", "1"),
                                                e.style.setProperty("display", "block")
                                        }), 50)
                                }
                                .bind(this), 200),
                            this.updateScorePage()
                    }), 1e3),
                    this.player.volume = c.volume,
                    this.player.play()
            }
            updateCardDescription(t, e, s) {
                const i = t.querySelector(".picture-name"),
                    r = t.querySelector(".picture-author"),
                    o = t.querySelector(".picture-year");
                i.textContent = e[s].name,
                    r.textContent = e[s].author,
                    o.textContent = e[s].year
            }
            openCategory() {
                const t = new a;
                this.categoryPage.style.setProperty("pointer-events", "none"),
                    this.categoryPage.style.setProperty("opacity", "0"),
                    this.player.volume = c.volume,
                    this.player.play(),
                    setTimeout(function() {
                            t.show(c.activeCategory),
                                this.categoryBtn.textContent = "Настройки",
                                this.categoryPage.style.setProperty("pointer-events", "initial"),
                                this.categoryPage.style.setProperty("opacity", "1")
                        }
                        .bind(this), 200),
                    this.updateScorePage()
            }
            updateScorePage(t) {
                c.isScoreOpen ? (c.isScoreOpen = !1, [this.cardList[10], this.cardList[11]].map((t => {
                        t.style.setProperty("opacity", 1),
                            setTimeout((() => t.style.setProperty("display", "block")), 200)
                    })),
                    Array.from(this.cardList).map((t => {
                        t.querySelector(".card-score").classList.remove("active"),
                            setTimeout((() => {
                                t.querySelector(".card-info").style.setProperty("opacity", "0"),
                                    t.querySelector(".card-info").classList.remove("active-info")
                            }), 200),
                            setTimeout((() => t.querySelector(".card-info").style.setProperty("opacity", "1")), 1e3)
                    })),
                    setTimeout((() => this.categoryBtn.textContent = "Настройки"), 200)) : c.isScoreOpen || t || (c.isScoreOpen = !0, [this.cardList[10], this.cardList[11]].map((t => {
                        t.style.setProperty("opacity", 0),
                            setTimeout((() => t.style.setProperty("display", "none")), 200)
                    })),
                    Array.from(this.cardList).map((t => {
                        t.querySelector(".card-score").classList.add("active")
                    })))
            }
        }
        class a {
            constructor() {
                this.menuBtn = document.querySelector(".menuBtn"),
                    this.settingsBtn = document.querySelector(".settingsBtn"),
                    this.cardList = document.querySelectorAll(".card-container"),
                    this.initialMenu = document.querySelector(".initial"),
                    this.categoryPage = document.querySelector(".categories"),
                    this.settingsPage = document.querySelector(".settings"),
                    this.scoreBtnList = document.querySelectorAll(".card-score"),
                    this.game = new r,
                    this.score = new o,
                    this.monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    c.monthList = this.monthList,
                    this.player = new Audio("../assets/mp3/push.mp3")
            }
            addEventListeners() {
                this.menuBtn.addEventListener("click", this.openMenu.bind(this)),
                    this.settingsBtn.addEventListener("click", this.openSettings.bind(this)),
                    this.cardList.forEach((t => t.addEventListener("click", (e => {
                        e.target.classList.contains("card-score") || (c.isScoreOpen ? e.currentTarget.querySelector(".card-info").classList.toggle("active-info") : this.game.startRound.call(this.game, Array.from(this.cardList).indexOf(t)))
                    })))),
                    this.scoreBtnList.forEach((t => t.addEventListener("click", this.score.openScore.bind(this.score, Array.from(this.scoreBtnList).indexOf(t)))))
            }
            show(t) {
                for (let e = 0; e < l[t].length; e++) {
                    const s = this.cardList[e],
                        i = s.querySelector(".card-title-info"),
                        r = s.querySelector("img"),
                        o = s.querySelector(".card-title-right-answers");
                    r.src = `../assets/jpg/${t}/${e + 1}.jpg`,
                        i.textContent = this.monthList[e],
                        l[t][e].hasScore ? (r.style.setProperty("filter", "grayscale(0)"),
                            o.textContent = l[t][e].score,
                            this.scoreBtnList[e].classList.remove("active")) : (r.style.setProperty("filter", "grayscale(1)"),
                            o.textContent = "",
                            this.scoreBtnList[e].classList.add("active"))
                }
            }
            openMenu() {
                this.score.updateScorePage(!0),
                    this.categoryPage.style.setProperty("pointer-events", "none"),
                    this.categoryPage.style.setProperty("opacity", "0"),
                    setTimeout(function() {
                            this.categoryPage.style.setProperty("display", "none"),
                                this.categoryPage.style.setProperty("pointer-events", "initial"),
                                this.initialMenu.style.setProperty("display", "block"),
                                setTimeout((() => this.initialMenu.style.setProperty("opacity", "1")), 50)
                        }
                        .bind(this), 200),
                    this.player.volume = c.volume,
                    this.player.play()
            }
            openSettings() {
                c.isScoreOpen ? this.score.openCategory() : (this.categoryPage.style.setProperty("pointer-events", "none"),
                    this.categoryPage.style.setProperty("opacity", "0"),
                    setTimeout(function() {
                            this.categoryPage.style.setProperty("display", "none"),
                                this.categoryPage.style.setProperty("pointer-events", "initial"),
                                this.settingsPage.style.setProperty("display", "block"),
                                setTimeout((() => this.settingsPage.style.setProperty("opacity", "1")), 50)
                        }
                        .bind(this), 200),
                    c.prevPage = "category",
                    this.player.volume = c.volume,
                    this.player.play())
            }
        }
        s(425);
        const n = new class {
            initCategoryData() {
                if (!localStorage.getItem("categoriesData")) {
                    let t = {};
                    t.artists = t.pictures = Array(12).fill({
                            hasScore: !1,
                            score: 0,
                            pictures: Array(12).fill(!1)
                        }),
                        localStorage.setItem("categoriesData", JSON.stringify(t))
                }
            }
            initSettingsData() {
                if (!localStorage.getItem("settingsData")) {
                    const t = {
                        isTimeGame: !1,
                        timeAmount: 20,
                        volume: 0
                    };
                    localStorage.setItem("settingsData", JSON.stringify(t))
                }
            }
            getSettingData() {
                return JSON.parse(localStorage.getItem("settingsData"))
            }
            getCategoriesData() {
                return JSON.parse(localStorage.getItem("categoriesData"))
            }
        };
        n.initCategoryData(),
            n.initSettingsData();
        let c = n.getSettingData(),
            l = n.getCategoriesData();
        c.isScoreOpen = !1;
        (new class {
            constructor() {
                this.artistsGameBtn = document.querySelector(".category-selection-artists"),
                    this.picturesGameBtn = document.querySelector(".category-selection-pictures"),
                    this.settingsBtn = document.querySelector(".settings-btn"),
                    this.settingsPage = document.querySelector(".settings"),
                    this.initialMenu = document.querySelector(".initial"),
                    this.categoryPage = document.querySelector(".categories"),
                    this.player = new Audio("../assets/mp3/push.mp3"),
                    this.category = new a
            }
            addEventListeners() {
                this.settingsBtn.addEventListener("click", this.openSettings.bind(this)), [this.artistsGameBtn, this.picturesGameBtn].forEach((t => t.addEventListener("click", (t => this.openCategory.call(this, t)))))
            }
            openCategory(t) {
                const e = t.path[1].classList.contains("artists") ? "artists" : "pictures";
                this.animateOpening(e),
                    this.initialMenu.style.setProperty("pointer-events", "none"),
                    setTimeout((() => {
                        this.initialMenu.style.setProperty("opacity", "0"),
                            setTimeout(function() {
                                    this.initialMenu.style.setProperty("display", "none"),
                                        this.initialMenu.style.setProperty("pointer-events", "initial"),
                                        this.categoryPage.style.setProperty("display", "block"),
                                        this.restoreMenuAppearance(e),
                                        setTimeout((() => this.categoryPage.style.setProperty("opacity", "1")), 50)
                                }
                                .bind(this), 200),
                            this.player.volume = c.volume,
                            this.player.play(),
                            "artists" === e ? (c.activeCategory = "artists",
                                this.category.show("artists")) : "pictures" === e && (c.activeCategory = "pictures",
                                this.category.show("pictures"))
                    }), 1e3)
            }
            animateOpening(t) {
                "artists" === t ? (this.artistsGameBtn.style.setProperty("transform", "translateY(50%)"),
                    this.picturesGameBtn.style.setProperty("transform", "scale(0.1)"),
                    this.picturesGameBtn.style.setProperty("opacity", "0")) : "pictures" === t && (this.picturesGameBtn.style.setProperty("transform", "translateY(-50%)"),
                    this.artistsGameBtn.style.setProperty("transform", "scale(0.1)"),
                    this.artistsGameBtn.style.setProperty("opacity", "0"))
            }
            restoreMenuAppearance(t) {
                "artists" === t ? (this.artistsGameBtn.style.setProperty("transform", "translateY(0)"),
                    this.picturesGameBtn.style.setProperty("transform", "scale(1)"),
                    this.picturesGameBtn.style.setProperty("opacity", "1")) : "pictures" === t && (this.picturesGameBtn.style.setProperty("transform", "translateY(0)"),
                    this.artistsGameBtn.style.setProperty("transform", "scale(1)"),
                    this.artistsGameBtn.style.setProperty("opacity", "1"))
            }
            openSettings() {
                this.initialMenu.style.setProperty("pointer-events", "none"),
                    this.initialMenu.style.setProperty("opacity", "0"),
                    setTimeout(function() {
                            this.initialMenu.style.setProperty("display", "none"),
                                this.initialMenu.style.setProperty("pointer-events", "initial"),
                                this.settingsPage.style.setProperty("display", "block"),
                                setTimeout((() => this.settingsPage.style.setProperty("opacity", "1")), 50)
                        }
                        .bind(this), 200),
                    c.prevPage = "menu",
                    this.player.volume = c.volume,
                    this.player.play()
            }
        }).addEventListeners();
        const p = new class {
            constructor() {
                this.settingsSection = document.querySelector(".settings"),
                    this.initialMenu = document.querySelector(".initial"),
                    this.volumeBtn = document.querySelector(".volume-icon"),
                    this.volumeBar = document.querySelector(".volume-bar"),
                    this.timeInput = document.querySelector(".time-amount-input"),
                    this.timeGameToggle = document.querySelector(".checkbox"),
                    this.backButton = document.querySelector(".settings-btn-back"),
                    this.categoryPage = document.querySelector(".categories"),
                    this.player = new Audio("../assets/mp3/push.mp3"),
                    this.previousVolume
            }
            addEventListeners() {
                this.volumeBar.addEventListener("input", (() => {
                        this.changeVolume.call(this),
                            this.play()
                    })),
                    this.volumeBtn.addEventListener("click", (() => {
                        this.toggleVolumeButton.call(this),
                            this.play()
                    })),
                    this.backButton.addEventListener("click", (() => {
                        this.goBack(c.prevPage),
                            this.writeSettingsData()
                    })),
                    window.addEventListener("beforeunload", this.writeSettingsData.bind(this))
            }
            goBack(t) {
                let e = "menu" === t ? this.initialMenu : this.categoryPage;
                this.settingsSection.style.setProperty("pointer-events", "none"),
                    this.settingsSection.style.setProperty("opacity", "0"),
                    setTimeout(function() {
                            this.settingsSection.style.setProperty("display", "none"),
                                this.settingsSection.style.setProperty("pointer-events", "initial"),
                                e.style.setProperty("display", "block"),
                                setTimeout((() => e.style.setProperty("opacity", "1")), 50)
                        }
                        .bind(this), 200),
                    this.play()
            }
            toggleVolumeButton() {
                this.player.currentTime = 0,
                    this.player.muted ? (this.volumeBar.value = this.previousVolume,
                        this.changeVolume()) : (this.previousVolume = this.player.volume,
                        this.volumeBar.value = 0,
                        this.changeVolume())
            }
            changeVolume(t) {
                const e = t || this.volumeBar.value;
                this.volumeBar.style.background = `linear-gradient(to right, #ffbb98 0%, #ffbb98 ${100 * e}%, rgba(52, 70, 72, 0.1) ${100 * e}%, rgba(52, 70, 72, 0.1) 100%)`,
                    this.player.volume = e,
                    0 === this.player.volume ? this.player.muted = !0 : this.player.muted = !1,
                    this.toggleVolumeIcon()
            }
            toggleVolumeIcon() {
                0 === this.player.volume || this.player.muted ? (this.volumeBtn.style.background = "url(./assets/svg/volume-muted.svg)",
                    this.volumeBtn.style.marginTop = "0.15rem") : (this.volumeBtn.style.background = "url(./assets/svg/volume.svg)",
                    this.volumeBtn.style.marginTop = "0")
            }
            play() {
                this.player.currentTime = 0,
                    this.player.play()
            }
            writeSettingsData() {
                c.isTimeGame = this.timeGameToggle.checked,
                    c.timeAmount = this.timeInput.value,
                    c.volume = this.player.volume,
                    localStorage.setItem("settingsData", JSON.stringify(c))
            }
            loadSettingsData() {
                this.timeGameToggle.checked = c.isTimeGame,
                    this.timeInput.value = c.timeAmount,
                    this.volumeBar.value = c.volume,
                    this.changeVolume(c.volume)
            }
        };
        p.loadSettingsData(),
            p.addEventListeners();
        const y = new class {
            constructor() {
                this.array
            }
            async getGameData(t) {
                if (!this.array) {
                    const t = await fetch("../json/image-data.json");
                    this.array = await t.json()
                }
                return "artists" === t ? this.array.slice(0, 120) : (t = "pictures") ? this.array.slice(120, 241) : void 0
            }
        };
        let u, h;
        y.getGameData("artists").then((t => u = t)),
            y.getGameData("pictures").then((t => h = t)),
            (new r).addEventListeners(),
            (new a).addEventListeners()
    })()
})();
console.log("Оценка самопроверкой - 190 баллов (доп. функционал не реализован, есть расхождения по верстке)")