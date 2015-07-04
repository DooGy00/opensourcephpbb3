console.log("***************************************************************************");
console.log("***************************Update:13-06-15*********************************");
console.log("***************************************************************************");
console.log("--------------> Ultimo cambio realizado: variable para mac");
console.log("--------------> inicia code externo");
if ($("meta[name=viewport]").length === 0) {
    if (_userdata.session_logged_in == 0) {
        $("#wrap").addClass("invitado")
    }
    if (location.pathname == '/register' && location.search == '?agreed=true&step=2') {
        $(function () {
            $('#username_reg').attr("maxlength", "15");
            $('#email').attr('placeholder', '@yahoo.com, @hotmail.com ,@gmail.com, etc...');
            $('#username_reg').attr('placeholder', 'no uses simbolos raros, mantenlo sencillo, 10 caracteres unicamente');
            addDesc('#username_reg', 'Coloca el nombre que usaras en el foro, por algunas funciones internas recomendamos <br>usar uno corto,  de una sola palabra');
            addDesc('#email', 'Registra tu email de contacto, es importante que sea real o no podrás confirmar tu ingreso.');
            addDesc('#password_reg', 'Escribe la contraseña que utilizaras en el foro, algo que no se te olvide fácil.');

            function addDesc(element, text) {
                $(element).after('<br><div class="register_desc"><br>' + text + '</div>')
            }
            var validation = {
                empty_username: "Introduce algún nickname",
                username_length: "Es muy corto",
                username_available: "Disponible",
                username_taken: "No esta disponible",
                invalid_email: "Introduce un e-mail válido",
                no_user: "Lo sentimos pero ese usuario no existe"
            };
            (function (j) {
                var k;
                k = void 0 == validation.no_user ? "Sorry, but this user does not exist." : validation.no_user;
                /register\?agreed=true&step=2/.test(window.location) && j(function () {
                    document.getElementById("email").setAttribute("type", "email");
                    var g = document.createElement("div");
                    g.id = "username_status";
                    g.style.paddingTop = "5px";
                    document.getElementById("username_reg").parentNode.appendChild(g);
                    j("#username_reg").bind("blur", function () {
                        0 == this.value.length ? this.nextSibling.innerHTML = "<img src='http://cdn1.iconfinder.com/data/icons/diagona/icon/16/050.png' style='width:12px;height:12px;' /> " + validation.empty_username : 1 == this.value.length && (this.nextSibling.innerHTML = "<img src='http://cdn1.iconfinder.com/data/icons/diagona/icon/16/050.png' style='width:12px;height:12px;' /> " + validation.username_length);
                        1 < this.value.length && jQuery.get("/profile?mode=viewprofile&u=" + document.getElementById("username_reg").value.replace(/\s/g, "+"), function (h) {
                            -1 != h.indexOf(k) ? document.getElementById("username_status").innerHTML = "<img src='http://illiweb.com/fa/valid.png' /> " + document.getElementById("username_reg").value + " " + validation.username_available : document.getElementById("username_status").innerHTML = "<img src='http://illiweb.com/fa/admin/icones/supprimer.png' style='width:12px;height;12px;' /> " + document.getElementById("username_reg").value + " " + validation.username_taken
                        })
                    });
                    g = document.createElement("div");
                    g.id = "email_status";
                    g.style.paddingTop = "5px";
                    document.getElementById("email").parentNode.appendChild(g);
                    j("#email").bind("blur", function () {
                        this.nextSibling.innerHTML = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(this.value) ? "" : "<img src='http://cdn1.iconfinder.com/data/icons/diagona/icon/16/050.png' style='width:12px;height:12px;' /> " + validation.invalid_email
                    })
                })
            })(jQuery);
            $(function () {
                var username_format = /^[a-zA-Z]*$/;
                var format_notice = "Lo siento, solo letras son permitidas";
                var f = $('form[action=""][method="post"]');
                var p = $('#username_reg');
                var i = $('<span id="username_issue" />').html('<br/>' + format_notice).css({
                    "color": "red",
                    "font-style": "italic",
                    "float": "right",
                    "margin-right": "355px",
                    "display": "none"
                }).insertAfter(p.parent());
                var regNotice = $('<span id="username_issue" />').html('<br/>' + format_notice).css({
                    "color": "red",
                    "font-style": "italic",
                    "float": "right",
                    "margin-right": "355px",
                    "display": "none"
                }).insertAfter(p.parent());
                var u = function () {
                    if ((username_format.test(p.val()))) {
                        i.hide();
                        $('input[type="submit"]').removeAttr('disabled').css("opacity", "1");
                    } else {
                        i.show();
                        $('input[type="submit"]').attr('disabled', 'disabled').css("opacity", ".3");
                        return false
                    }
                };
                p.on('change keyup', function () {
                    u()
                });
                $('input[type="reset"]', f).on("click", function () {
                    u()
                });
                $('input[type="submit"]', f).click(u);
                u();
            });
        });
    }

    $('.codebox.spoiler').each(function () {
        $(this).find('dt:first').on('click', function () {
            $(this).closest('.codebox.spoiler').find('.spoiler_content:first').slideToggle();
        });
    });

    if (_userdata.user_level == 0) $(".index-box").find(".row").has(".F_staff").addClass("staff").find(".forumtitle").on("click", function (a) {
        a.preventDefault();
        $.boxes("alert", "Foro destinado al staff");
    });
    $('a[href*="/abuse?"]').on("click", function (a) {
        $(this).removeAttr("href");
        $.boxes({
            mode: "alert",
            title: _userdata.username + " antes de hacer una denuncia\n te pido que los discutas conmigo.  \n Chalo.",
            ok: function () {
                $(location).attr('href', "/abuse");;
            }
        })
    });
    (function () {
        var accept = 'Aceptar';
        $(function () {
            window.LGfriend_requests_ready = true;
        });
        $.get('/profile?mode=editprofile&page_profil=friendsfoes', function (r) {
            if (r.indexOf(' alt="' + accept) > 0 && r.indexOf(' title="' + accept) > 0) {
                $
                var x = function () {
                    $(r).find(".panel").eq(3).find(".friends-foes-list:eq(0)").addClass("indexfrs").prependTo(document.body);
                    $(".indexfrs").find(".sprite-tabs_more").replaceWith('<img src="https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-16.png"/>');
                    var storage = window.localStorage;
                    $('.indexfrs').each(function () {
                        var href = $(this).find('a[href^="/u"]').attr('href'),
                            id;
                        if (typeof href === 'undefined') return;
                        id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
                        if (storage.getItem('user_ava_' + id) && storage.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                            $(this).addClass('avanotif_').prepend('<span class="user-ava"><img src="http://i.imgur.com/DJp0z9U.png"/></span>').find('.user-ava').html(storage.getItem('user_ava_' + id))
                        } else {
                            $(this).addClass('avanotif_').prepend('<span class="user-ava"><img src="http://i.imgur.com/DJp0z9U.png"/></span>').find('.user-ava').load(href + ' #profile-advanced-right .module:first div img:first', function () {
                                if (storage) {
                                    storage.setItem('user_ava_' + id, $(this).html());
                                    storage.setItem('user_exp_' + id, +new Date)
                                }
                            })
                        }
                    });
                    setTimeout(function () {
                        $('.indexfrs').find('a[href*="/profile?friend="]').on("click", function (fr) {
                            fr.preventDefault();
                            var frsurl = $(this).attr("href"),
                                namefriend = $(this).closest('.friends-foes-list').find("strong").text(),
                                frblock = $(this).closest('.friends-foes-list'),
                                urlfriend = $(this).closest('.friends-foes-list').find("strong").parents("a").attr("href");
                            $.ajax({
                                url: frsurl,
                                type: "GET",
                                success: function (t) {
                                    frblock.fadeOut(function () {
                                        frblock.remove();
                                    });
                                    $.post('/privmsg', {
                                        folder: 'profile',
                                        mode: 'post_profile',
                                        post: 'Send',
                                        username: 'Historial',
                                        subject: 'Mensaje automático',
                                        message: '[url=http://opensourcephpbb3.com/u' + _userdata.user_id + ']' + _userdata.username + '[/url]  y  [url=http://opensourcephpbb3.com' + urlfriend + ']' + namefriend + '[/url],  se han hecho amigos',
                                    })
                                },
                                error: function () {
                                    $.boxes(" alert", "intenta de nuevo");
                                }
                            })
                        });
                    }, 500);
                };
                (window.LGfriend_requests_ready) ? x(): $(x);
            }
        });
    })();
    if (/\page_profil=avatars/.test(window.location)) {
        $('form[enctype="multipart/form-data"]').find('input[value="Registrar"]').add('input[value="Crear mi avatar!"]').on("click", function (d) {
            var url = $(this).attr('href');
            $.ajax({
                url: url,
                type: 'GET',
                success: function (unmarkS) {
                    localStorage.clear();
                    console.log("avatar eliminado");
                },
                error: function () {
                    $.boxes("alert", "Fallo, intentalo de nuevo");
                }
            });
        });
    }
    if (prFrs) {
        var storage = window.localStorage;
        $('.friends-foes-list').each(function () {
            var href = $(this).find('a[href^="/u"]').attr('href'),
                id;
            if (typeof href === 'undefined') return;
            id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
            if (storage.getItem('user_ava_' + id) && storage.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                $(this).addClass('avanotif_').prepend('<span class="user-ava"><img src="http://i.imgur.com/DJp0z9U.png"/></span>').find('.user-ava').html(storage.getItem('user_ava_' + id))
            } else {
                $(this).addClass('avanotif_').prepend('<span class="user-ava"><img src="http://i.imgur.com/DJp0z9U.png"/></span>').find('.user-ava').load(href + ' #profile-advanced-right .module:first div img:first', function () {
                    if (storage) {
                        storage.setItem('user_ava_' + id, $(this).html());
                        storage.setItem('user_exp_' + id, +new Date)
                    }
                })
            }
        })
    }
    var cMp = {
        check: function () {
            var Mptxt = "0 Mensajes";
            $.get("/forum", function (bMp) {
                if ($("#logout") && $(bMp).find("#i_icon_mini_new_message").length) {
                    $(".navbut4").find("a").html('<div class="TRnotice" style="display:inline;color:red">' + $(bMp).find("#i_icon_mini_new_message").attr("title").match(/\d+/g) + " Mensaje" + (1 < Mptxt ? 's' : '') + "</div>");
                }
            })
        },
        init: function () {
            setInterval(function () {
                cMp.check()
            }, 15E3)
        }
    };
    window.mp_ajax = cMp
    mp_ajax.init();
    if (tm) {
        $(".postbody").find(".clearfix").each(function () {
            600 <= $(this).height() && $(this).addClass("baivietdai").height(310).after('<p class="thugon"><span><span class="viewfull">Ver completo</span><span class="viewhide" style="display:none">Colapsar</span></span><span><span class="fullOff" style="float:right">Desactivar colapso</span><span class="fullOn" style="float:right;display:none">Activar colapso</span></span></p>')
        });
        "100%" == my_getcookie("thugonbaiviet") && ($(".fullOn, .viewhide,.fullOff, .viewfull").toggle(), $(".baivietdai").height("100%"));
        $(".viewfull, .viewhide, .fullOff, .fullOn").on("click", function () {
            var u = "100%",
                t = $(this),
                s = t.attr("class");
            if ("viewhide" == s || "fullOn" == s) {
                u = 310
            }
            "fullOff" == s || "fullOn" == s ? (my_setcookie("thugonbaiviet", u, !0), $(".fullOff, .fullOn").toggle()) : (t.closest(".thugon").prev().height(u), $(window).scrollTop(t.closest(".post").offset().top));
            t.hide().siblings().show()
        });
        console.log('--------------> Colapso Instalado');
    }

    function aceptaamigos() {
        $('.friends-foes-list').find('a[href*="/profile?friend="]').on("click", function (fr) {
            fr.preventDefault();
            var frsurl = $(this).attr("href"),
                namefriend = $(this).closest('.friends-foes-list').find("strong").text(),
                frblock = $(this).closest('.friends-foes-list'),
                urlfriend = $(this).closest('.friends-foes-list').find("strong").parents("a").attr("href");
            $.ajax({
                url: frsurl,
                type: "GET",
                success: function (t) {
                    frblock.fadeOut(function () {
                        frblock.insertAfter($(".panel").eq(1).find(".friends-foes-list:last")).fadeIn();
                        frblock.find(".sprite-tabs_more").remove();
                    });
                    $.post('/privmsg', {
                        folder: 'profile',
                        mode: 'post_profile',
                        post: 'Send',
                        username: 'Historial',
                        subject: 'Mensaje automático',
                        message: '[url=http://opensourcephpbb3.com/u' + _userdata.user_id + ']' + _userdata.username + '[/url]  y  [url=http://opensourcephpbb3.com' + urlfriend + ']' + namefriend + '[/url],  se han hecho amigos',
                    })
                },
                error: function () {
                    $.boxes(" alert", "intenta de nuevo");
                }
            })
        });
    }
    aceptaamigos()
    if (pu && !$("#logout").length) {
        $(location).attr('href', '/register');
    }
    if (pu || pr || sr) {
        $("#cp-main").add("#tabs").fadeIn();
        $("#main-content.profile_fix").fadeIn("3000");
    }

    function menufixed() {
        var $selector = $('ul.linklist.navlinks');
        if ($(window).scrollTop() > 240) {
            $selector.addClass("menufijo");
            $("#fa_toolbar").addClass("otherclass");
        } else {
            $selector.removeClass("menufijo");
            $("#fa_toolbar").removeClass("otherclass");
        }
    }
    $(window).scroll(menufixed);
    menufixed();
    $(".icon-home").attr("href", "/h2-staff");

    if (ind && $("#logout").length) {
        $('a[href*="mark=forums"]').on('click', function (unmark) {
            unmark.preventDefault();
            var url = $(this).attr('href');
            $.ajax({
                url: url,
                type: 'GET',
                success: function (unmarkS) {
                    $(".icon").removeClass("newpost");
                },
                error: function () {
                    $.boxes("alert", "Fallo, intentalo de nuevo");
                }
            });
        });
    }
    if (ind || tm || sub && $("#logout").length) {
        $('a[href*="/search?search_id=newposts"]').on("click", function (a) {
            a.preventDefault();
            $("#box_info").removeAttr("style").add("#lightBG").fadeIn().find("h3").text("Mensajes nuevos desde tu última visita");
            $(".nuevospost").find(".Ncontenedor").load('/search?search_id=newposts .forabg  .topictitle:lt(20)', function () {
                $(".nuevospost").find(".topictitle").each(function () {
                    var url = $(this).attr("href");
                    $(this).attr("href", url + "?view=newest");
                });
                if (!$(".nuevospost").find("a.topictitle").length) {
                    $(".Ncontenedor").prepend('<p class="mensaje" style="display:table;margin:0 auto">No hay mensajes nuevos</p>');
                } else {
                    $.post("/privmsg", {
                        subject: 'Mensaje automático',
                        message: _userdata.username + ' vió los mensajes nuevos desde su última visita ',
                        username: 'Historial',
                        mode: "post_profile",
                        folder: "profile",
                        post: "Send"
                    });
                }
            });
        });
        $('a[href*="/search?search_id=egosearch"]').on("click", function (a) {
            a.preventDefault();
            var url = url_egosearch;
            $("#box_info").removeAttr("style").add("#lightBG").fadeIn().find("h3").text("Tus mensajes en este subforo");
            $(".nuevospost").find(".Ncontenedor").load(url + ' .forabg .topictitle:lt(40)', function () {
                $(".nuevospost").find(".topictitle").each(function () {
                    var url = $(this).attr("href");
                    $(this).attr("href", url + "?view=newest");
                });
                if (!$(".nuevospost").find("a.topictitle").length) {
                    $(".Ncontenedor").prepend('<p class="mensaje" style="display:table;margin:0 auto">No hay mensajes</p>');
                } else {
                    $.post("/privmsg", {
                        subject: 'Mensaje automático',
                        message: _userdata.username + ' vió los mensajes que tiene en un subforo ',
                        username: 'Historial',
                        mode: "post_profile",
                        folder: "profile",
                        post: "Send"
                    });
                }
            });
        });
        $('a[href*="/search?search_id=unanswered"]').on("click", function (a) {
            a.preventDefault();
            var url = $(this).attr("href");
            $("#box_info").removeAttr("style").add("#lightBG").fadeIn().find("h3").text("Mensajes sin respuestas");
            $(".nuevospost").find(".Ncontenedor").load(url + ' .forabg  .topictitle:lt(40)', function () {
                $(".nuevospost").find(".topictitle").each(function () {
                    var url = $(this).attr("href");
                    $(this).attr("href", url + "?view=newest");
                });
                if (!$(".nuevospost").find("a.topictitle").length) {
                    $(".Ncontenedor").prepend('<p class="mensaje" style="display:table;margin:0 auto">No hay mensajes</p>');
                }
            });
        });
    }
    $.cachedScript("http://www.adictosalgear.org/js/confirm.js").done(function () {
        $("#logout").zzConfirm({
            content: "¿Deseas cerrar la sesión?",
            dir: "right",
            ok: function (a) {
                location.replace(a[0].href);

                $.post("/privmsg", {
                    subject: "Mensaje automático",
                    message: _userdata.username + " se desconecto del foro",
                    username: "Historial",
                    mode: "post_profile",
                    folder: "profile",
                    post: "Send"
                })
            }
        })
        $('a[href="/forum?mode=delete_cookies"]').zzConfirm({
            content: "¿Deseas eliminar las cookies?",
            ok: function (t) {
                var m = "/forum?mode=delete_cookies";
                var TID = $('a[href*="tid="]').attr('href').split('tid=')[1].split('&')[0];
                var b = t.closest($(".message-block").parent("li"));
                $.post(m, {
                    tid: TID,
                    confirm: 1
                }, function (a) {
                    $(location).attr('href', '/login');
                })
            }
        });
        $('.friends-foes-list a[href*="friendsfoes&remove="]').add('a[href="/profile?deny=1&mode=editprofile&page_profil=friendsfoes"]').zzConfirm({
            content: "¿Deseas eliminarlo de tu lista de amigos?",
            ok: function (t) {
                var m = t.attr("href");
                var b = t.closest($(".friends-foes-list"));
                var TID = $('a[href*="tid="]').attr('href').split('tid=')[1].split('&')[0];
                $.post(m, {
                    confirm: 1,
                    tid: TID,
                }, function (a) {
                    b.fadeOut(function () {
                        b.remove();
                    })
                })
            }
        });
        $('a[href*="wall?d"]').zzConfirm({
            content: "¿Deseas eliminar el post de tu muro?",
            ok: function (t) {
                var m = t.attr("href");
                var TID = $('a[href*="tid="]').attr('href').split('tid=')[1].split('&')[0];
                var b = t.closest($(".message-block").parent("li"));
                $.post(m, {
                    tid: TID,
                    confirm: 1
                }, function (a) {
                    b.fadeOut(function () {
                        b.remove();
                    })
                })
            }
        });
        $(".delete ").find("a[href*='mode=delete']").zzConfirm({
            content: "¿Deseas eliminar este post",
            ok: function (t) {
                var s = t.closest(".post");
                s.css("opacity", 0.3);
                $.post(t[0].href, {
                    confirm: 1
                }, function (a) {
                    s.slideUp(function () {
                        s.remove();
                        $(".post").length || location.replace($(".nav[href^='/f']:last")[0].href)
                    })
                })
            }
        });
        $('a[href*="/modcp?mode=delete"]').zzConfirm({
            content: "¿Deseas eliminar este tema",
            ok: function (t) {
                var m = t.attr("href");
                $.post(m, {
                    confirm: 1
                }, function (a) {
                    $.boxes("alert", "Tema borrado");
                    var url = "/";
                    $(location).attr('href', url);
                })
            }
        });
    });
    if (wl) {
        $("#AAGquickvm_message").on("focus", function () {
            $('#AAGquickvm_bb img').hide().removeClass("active");
            $(this).on("blur", function () {
                $('#AAGquickvm_bb img').show().addClass("active");
            });
        });
        $("#AAGquickvm_message").on("click", function () {
            $(this).animate({
                height: "250px"
            }, 300);
            $(this).on({
                click: function () {
                    $("textarea").animate({
                        height: "85px!"
                    }, 300)
                },
                blur: function () {
                    $("textarea").animate({
                        height: "85px"
                    }, 300)
                }
            });
        });
    }
    if (tm || wl || ind) {
        $("#editor-textarea").add("#AAGquickvm_message").add(".inner_usu  textarea").on("keyup", function () {
            if ("@" === $(this).val().split("")[$(this).val().length - 1]) {
                var
                    c = $(this).val(),
                    d = $(this).val().split("@"),
                    e = $("#leermaswall").attr("href");
                $.boxes({
                    mode: 'prompt',
                    title: 'Introduce el nombre del usuario a mencionar  Un mensaje de notificación será enviado',
                    ok: function () {
                        var b = $('.zzBoxes_input').val();
                        if (wl) {
                            console.log('-------------->Mención en muro, lista');
                            $("#AAGquickvm_message").val(($("#AAGquickvm_message").val() ? $("#AAGquickvm_message").val() + "" : "") + $('.zzBoxes_input').val());
                            $.post("/privmsg", {
                                folder: "inbox",
                                mode: "post",
                                post: "1",
                                username: b,
                                subject: "[Mensaje automático]: Te he mencionado en: " + document.title,
                                message: "[quote]Hola {USERNAME}, Te he mencionado en :" + "[url=" + window.location + "]" + document.title + "[/url] \n " + d[0] + "[/quote]",
                            });
                        } else if (tm) {
                            console.log('-------------->Mención en temas, lista');
                            zeditor.textarea.value += '[tag]' + $('.zzBoxes_input').val() + '[/tag]';
                            zeditor.textarea.value = zeditor.textarea.value.replace("@", "");
                            zeditor.textarea.focus();
                            $.post("/privmsg", {
                                folder: "inbox",
                                mode: "post",
                                post: "1",
                                username: b,
                                subject: "[Mensaje automático]: Te he mencionado en: " + document.title,
                                message: "[quote]Hola {USERNAME}, Te he mencionado en :" + "[url=" + window.location + "]" + document.title + "[/url] \n " + d[0] + "[/quote]",
                            });
                        } else if (ind) {
                            console.log('-------------->Mención en el muro del indice, lista');
                            $(".inner_usu").find("textarea").val(($(".inner_usu").find("textarea").val() ? $(".inner_usu").find("textarea").val() + "" : "") + $('.zzBoxes_input').val());
                            $.post("/privmsg", {
                                folder: "inbox",
                                mode: "post",
                                post: "1",
                                username: b,
                                subject: "[Mensaje automático]: Te he mencionado desde  mi muro, en el indice ",
                                message: "[quote]Hola {USERNAME}, Te he mencionado desde " + "[url=http://opensourcephpbb3.com" + e + "]Mi muro[/url] \n " + d[0] + "[/quote]",
                            });
                        }
                    }
                });
            }
        });
    }
    _notif_timeout = 0, _notif_check = window.setInterval(function () {
        if (_notif_timeout === 10000) return window.clearInterval(_notif_check);
        if ($('#notif_list').find('.contentText').find('a').length) {
            notifAva();
            return window.clearInterval(_notif_check)
        } else _notif_timeout += 1
    }, 500);

    function notifAva() {
        var storage = window.localStorage;
        $('#notif_list').find('li').each(function () {
            var href = $(this).find('a[href^="/u"]').attr('href'),
                id;
            if (typeof href === 'undefined') return;
            id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
            if (storage.getItem('user_ava_' + id) && storage.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                $(this).addClass('avanotif_').find('.contentText').prepend('<span id="conImagen" class="user-ava"></span>');
                $(this).find('.user-ava').html(storage.getItem('user_ava_' + id))
            } else {
                $(this).addClass('avanotif_').find('.contentText').prepend('<span  id="conImagen" class="user-ava"></span>');
                $(this).find('.user-ava').load(href + ' #profile-advanced-right .module:first div img:first', function () {
                    if (storage) {
                        storage.setItem('user_ava_' + id, $(this).html());
                        storage.setItem('user_exp_' + id, +new Date)
                    }
                })
            }
        })
    };
    $(function () {
        if (!_userdata.session_logged_in) {
            $(".user_login_form").find("label").attr("style", "color:#fff!important");
            $(".panel").has(".user_login_form").addClass("logpanel").attr("style", "margin-top: 16px;padding-top: 6px;");
            return false;
        }
        var _ToolBar = setInterval(function () {
            if (document.getElementById('fa_welcome') !== null) {
                $('a[href$="logout=1"]').attr('href', $('#logout').attr('href'));
                $('a[href*="logout=1"]').on("click", function (event) {
                    localStorage.setItem("logout", 1)
                })
            }
        }, 1000)
    });
    var oldTref = Toolbar.refresh;
    Toolbar.refresh = function (o) {
        oldTref(o);

        function notifAvaLive() {
            var storage = window.localStorage;
            $('#live_notif').each(function () {
                var href = $(this).find('a[href^="/u"]').attr('href'),
                    id;
                if (typeof href === 'undefined') return;
                id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
                if (storage.getItem('user_ava_' + id) && storage.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                    $(this).find('.content').prepend('<div class="avanotif"><img src="http://i.imgur.com/DJp0z9U.png"/></div>');
                    $(this).find('.avanotif').html(storage.getItem('user_ava_' + id))
                } else {
                    $(this).find('.content').prepend('<div class="avanotif"><img src="http://i.imgur.com/DJp0z9U.png"/></div>');
                    $(this).find('.avanotif').load(href + ' #profile-advanced-right .module:first div img:first', function () {
                        if (storage) {
                            storage.setItem('user_ava_' + id, $(this).html());
                            storage.setItem('user_exp_' + id, +new Date)
                        }
                    })
                }
            });
        }
        if (o.unread) {
            $('#notif_unread').text($('#notif_unread').text().replace(/[\(\)]/g, ''));
            $("#live_notif").find("a").attr("style", "text-decoration:none!important");
            notifAvaLive();
            if (!$('#notif_list').find('.contentText:last').find('.user-ava').length) {
                var storage = window.localStorage;
                $('#notif_list').find('.unread:last').each(function () {
                    var href = $(this).find('a[href^="/u"]').attr('href'),
                        id;
                    if (typeof href === 'undefined') return;
                    id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
                    if (storage.getItem('user_ava_' + id) && storage.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                        $(this).addClass('avanotif_').find('.contentText:first').prepend('<span  id="conImagen" class="user-ava"></span>').find('.user-ava:first').html(storage.getItem('user_ava_' + id))
                    } else {
                        $(this).addClass('avanotif_').find('.contentText:first').prepend('<span  id="conImagen" class="user-ava"></span>').find('.user-ava:first').load(href + ' #profile-advanced-right .module:first div img:first', function () {
                            if (storage) {
                                storage.setItem('user_ava_' + id, $(this).html());
                                storage.setItem('user_exp_' + id, +new Date)
                            }
                        })
                    }
                })
            }
            $('body').append('<audio class="audioElem" style="display:none;" controls autoplay><source src="http://adictosalgear.org/tick.mp3" type="audio/mpeg"></audio>');
            $(".audioElem")[0].volume = 0.4;
            setTimeout(function () {
                $(".audioElem:first").remove();
            }, 3500);
        }
    }

    function primeravatar() {
        $("#notif_list").find(".delete").on("click", function () {
            setTimeout(function () {
                if (!$('#notif_list').find('.contentText:first').find('.user-ava').length) {
                    var storage = window.localStorage;
                    $('#notif_list').find('li').not('.avanotif_,.see_all').each(function () {
                        var href = $(this).find('a[href^="/u"]').attr('href'),
                            id;
                        if (typeof href === 'undefined') return;
                        id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
                        if (storage.getItem('user_ava_' + id) && storage.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                            $(this).addClass('avanotif_').find('.contentText').prepend('<span class="user-ava"></span>').find('.user-ava:first').html(storage.getItem('user_ava_' + id))
                        } else {
                            $(this).addClass('avanotif_').find('.contentText').prepend('<span class="user-ava"></span>').find('.user-ava:first').load(href + ' #profile-advanced-right .module:first div img:first', function () {
                                if (storage) {
                                    storage.setItem('user_ava_' + id, $(this).html());
                                    storage.setItem('user_exp_' + id, +new Date)
                                }
                            })
                        }
                    })
                }
            }, 500)
        })
    };
    $("#fa_welcome").on("click", function () {
        $("#fa_menulist").animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
        $("#notif_list").add($("#mis_favoritos").next()).fadeOut();
    });
    $("#fa_notifications").on("click", function () {
        $("#notif_list").animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
        $("#fa_menulist").add($("#mis_favoritos").next()).fadeOut();

        primeravatar();
    });
    if ($("#logout").length) {

        $(function () {
            $(function () {
                $('#fa_toolbar').find('.see_all').find('a').eq(1).text('Marcar notificaciones como leídas').on('click', function (s) {
                    s.preventDefault();
                    var url = $(this).attr('href');
                    $.ajax({
                        url: url,
                        type: 'GET',
                        success: function (unmarkS) {

                            console.log('notificacione leidas');
                            $('#notif_unread').text("").hide();
                            $("#notif_list").find("li").removeClass("unread");
                        },
                        error: function () {
                            $.boxes('alert', 'Fallo, intentalo de nuevo');
                        }
                    });
                });
            });
            $('#fa_right').prepend('<a id="mis_favoritos" class="leftHeaderLink">Favoritos <i class="fa fa-bars" style="margin-left: 13px;"></i><span id="cant_fav"></span></a><div id="fav_list" style="50px"><span class="fav_cont" style="min-height:96px"><center><br/><i style="color:#000;font-size:32px"class="fa fa-spinner fa-spin"></i></center></span><li class="see_all"><img src="https://cdn2.iconfinder.com/data/icons/snipicons/500/th-list-16.png" style="float:left;margin-top: -3px;"><a href="/search?search_id=favouritesearch">Ver todos mis temas favoritos</a></li></div>');
            $('#mis_favoritos').on("click", function () {
                $(this).toggleClass('menu_active');
                $('.menu_active').attr("style", "color:#fff");
                if ($("#fa_menulist").position().top > 10 || $("#notif_list").position().top > 10) {
                    $("#fa_right").removeClass("notification").find("#notif_list").hide();
                    $("#fa_right").removeClass("welcome").find("#fa_menulist").hide();
                }
                $(this).next().css({
                    'left': $(this).position().left,
                    'top': $(this).position().top
                });
                $(this).next().animate({
                    height: "toggle",
                    opacity: "toggle"
                }, 300, function () {
                    $("#cant_fav").fadeToggle().toggleClass("activo");
                });
                if (!$('.fav_cont').find('.topictitle').length) {
                    $('.fav_cont').load('/search?search_id=favouritesearch #cp-main table  .topictitle:lt(40)', function () {
                        if (!$(this).find(".topictitle").length) {
                            $(this).html('<p class="mensaje" style="display:table;margin:0 auto;font-family:arial;color: #000;font-size: 12px;height: 50px;line-height: 8;">No tienes temas favoritos</p>');
                        } else {
                            $(this).find(".topictitle").attr("style", "color:#333;font-size:11px;display:inline-block!important;text-indent:5px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;");
                            $(this).find(".topictitle").each(function () {
                                var url = $(this).attr("href");
                                $(this).attr("href", url + "?view=newest");
                            });
                            $("#cant_fav").text($('.topictitle').length);
                            $.post("/privmsg", {
                                subject: 'Mensaje automático',
                                message: _userdata.username + ' vió sus temas favoritos ',
                                username: 'Historial',
                                mode: "post_profile",
                                folder: "profile",
                                post: "Send"
                            });
                        }
                    });
                }
            })
        });
    }
    if (pu && $("#logout").length) {
        $("#banner-image").before('<span class="mi_status"></span><span class="status_fecha" style="font-size:9px;position:absolute;color:#fff;line-height:3.3;">' + Cookies.get('perfil_status_fecha' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text()) + '</span>');
        if ($(".status_fecha").text() == "undefined") {
            $(".status_fecha").text("Sin registro")
        }
        $('#profile-advanced-add').insertAfter('#banner-image');
        $(function () {
            $(function () {
                if ($('#field_id1').length) {
                    if (Cookies.get('perfil_status' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text()) != $('#field_id1').find('.field_uneditable').text()) {
                        Cookies.remove('perfil_status' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text())
                    }
                    $('.mi_status').text($('#field_id1').find('.field_uneditable').text());
                    Cookies.set('perfil_status' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text(), $('#field_id1').find('.field_uneditable').text(), {
                        expires: 365
                    });

                } else {
                    if (!Cookies.get('perfil_status' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text())) {
                        $.get("/u" + $("#tabs").find("a").eq(0).attr("href").match(/[0-9]+/), function (r) {
                            $('.mi_status').text($(r).find('#field_id1').find('.field_uneditable').text());

                            Cookies.set('perfil_status' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text(), $(r).find('#field_id1').find('.field_uneditable').text(), {
                                expires: 365
                            });
                            console.log('status ajax');
                        });
                    } else {
                        $('.mi_status').text(Cookies.get('perfil_status' + $("#profile-advanced-right").find(".module").eq(0).find("strong").eq(0).text()));

                        console.log('status galleta');
                    }
                }

            });
        });
        $("#field_id1").prev().andSelf().hide();
        $('#profile-advanced-add').find('a').on('click', function (frdel) {
            frdel.preventDefault();
            var url = $(this).attr('href');
            $.ajax({
                url: url,
                type: 'GET',
                success: function (frdelS) {
                    $("#profile-advanced-add").find(".mainmenu").eq(0).text("Solicitud enviada").attr("style", "background-position:15px 50%;text-indent:0px;padding-left:50px;width:945px;z-index:50;line-height:30px;color:#FFF;left:-857px;transition:all 550ms ease 0s;");
                },
                error: function () {
                    $.boxes("alert", "intentalo de nuevo");
                }
            });
        });
    }
    $('.lastpost a[href*="/t"]:not(".last-post-icon,a[href*=\"?view=newest\"]")').add('.bg_none a[href*="/t"]:not(".last-post-icon,a[href*=\"?view=newest\"]")').on("click", function () {
        var indtema = $(this).text(),
            urltema = $(this).attr("href");
        $.post("/privmsg", {
            subject: "Actividad de los usuarios",
            message: _userdata.username + " visitó el tema : [url=http://" + location.hostname + urltema + "]" + indtema + "[/url]",
            username: 'Historial',
            mode: "post_profile",
            folder: "profile",
            post: "Send"
        });
    });
    $('.news_topic_title').on("click", function () {
        var indtema = $(this).text(),
            urltema = $(this).attr("href");
        $.post("/privmsg", {
            subject: "Actividad de los usuarios",
            message: _userdata.username + " visitó el tema : [url=" + urltema + "]" + indtema + "[/url]",
            username: 'Historial',
            mode: "post_profile",
            folder: "profile",
            post: "Send"
        });
    });
    $('.forumtitle').on("click", function () {
        var indtema = $(this).text(),
            urltema = $(this).attr("href");
        $.post("/privmsg", {
            subject: "Actividad de los usuarios",
            message: _userdata.username + " visitó la categoría: [url=http://opensourcephpbb3.com" + urltema + "]" + indtema + "[/url]",
            username: 'Historial',
            mode: "post_profile",
            folder: "profile",
            post: "Send"
        });
    });
    if ($("#fa_menulist").length) {
        var status_box = {
            lang: {
                woym: _userdata.username + " ¿que tienes en mente?",
                update: '<i class="fa fa-pencil-square-o"></i>',
                too_short: "Status muy corto.",
                updated: "¡Actualizado!",
                error: "Error. Intenta de nuevo."
            },
            init: function (v, s) {
                if (v) {
                    var u = my_getcookie("fa_" + location.host.replace(/\./g, "_") + "_data");
                    this.user_id = u ? parseInt(u.split("userid")[1].replace(/s:\d+/g, "").match(/\d+/)) : 0;
                    if (s) {
                        for (var t in s) {
                            this.lang[t] = s[t]
                        }
                    }
                    this.outer = document.getElementById("AAGstatus");
                    this.outer.innerHTML = '<input id="AAGstatus_input" type="text" placeholder="' + this.lang.woym + '"><div onclick="status_box.update()" class="status-button">' + this.lang.update + '</div><span id="AAGstatus_notice"></span>';
                    this.input = document.getElementById("AAGstatus_input");
                    this.id = v;
                    this.initiated = !0
                }
            },
            update: function () {
                if (this.initiated) {
                    var s = document.getElementById("AAGstatus_notice");
                    if (2 > this.input.value.length) {
                        return s.innerHTML = this.lang.too_short = this.lang.too_short
                    }
                    var t = document.getElementById("logout");
                    t && (t = t.href, t = t.substring(t.indexOf("tid=") + 4, t.indexOf("&key")), t = "id=" + this.id.substring(this.id.lastIndexOf("_") + 1) + '&active=1&content=[["' + this.id + '", "' + this.input.value + '"]]&tid=' + t + "&user=" + this.user_id, $.post("/ajax_profile.forum?jsoncallback=jQuery1", t, function (a) {
                        console.log("OK: status actualizaado");
                        Cookies.remove('perfil_status' + _userdata.username);
                        Cookies.remove('perfil_status_fecha' + _userdata.username);
                        var estadotexto = $("#AAGstatus_input").val();
                        Cookies.set('perfil_status' + _userdata.username, estadotexto, {
                            expires: 365
                        });
                        Cookies.set('perfil_status_fecha' + _userdata.username, 'Se modifico:' + new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + (new Date().getFullYear() - 2000) + "-" + new Date().getHours() + ":" + new Date().getMinutes() + ' hrs.', {
                            expires: 365
                        });
                        if (pu) {
                            $('.mi_status').text(estadotexto);
                            $('.status_fecha').text('Se modifico:' + new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + (new Date().getFullYear() - 2000) + " - " + new Date().getHours() + ":" + new Date().getMinutes() + ' hrs.')
                        }
                        if (tm) {
                            $(".me").find(".perfil-externo_valor").text(estadotexto);
                        }
                        $.post("/privmsg", {
                            subject: 'Mensaje automático',
                            message: _userdata.username + ' actualizo su estado: [color=#FF0000][b][i]"' + estadotexto + '"[/i][/b][/color]',
                            username: 'Historial',
                            mode: "post_profile",
                            folder: "profile",
                            post: "Send"
                        });
                        $("#AAGstatus_input").val("");

                    }))
                }
            }
        };
        if (_userdata.session_logged_in == "1") {
            $("#fa_menulist").append('<div id="AAGstatus"></div>');
            status_box.init("profile_field_13_1")
        }
    }
    if (ps || mp) {
        var quicktopic = {
            color: "#4278A4"
        };
        (function (u) {
            function s() {
                u("body").prepend('<div id="loading-bar" style="z-index: 9999; background-color: ' + quicktopic.color + '; position: fixed; top: 0; width: 20%; left: 0; height: 3px;"></div>');
                document.forms.post.message.value = u("#text_editor_textarea").sceditor("instance").val();
                u.post("/post", u(document.forms.post).serialize() + "&post=1", function (a) {
                    setInterval(function () {
                        "100%" != document.getElementById("loading-bar").style.width && (document.getElementById("loading-bar").style.width = parseInt(document.getElementById("loading-bar").style.width) + 10 + "%")
                    }, 10);
                    window.location = void 0 == quicktopic.redirect ? a.match(/url=(.*?)"/)[1] : quicktopic.redirect
                })
            }
            var t;
            t = void 0 == quicktopic.forums || "string" != typeof quicktopic.forums ? "\\d+" : quicktopic.forums.replace(/,\s?/g, "|");
            RegExp("\\/?post\\?f=(" + t + ").*").test(window.location) && u(function () {
                u("#text_editor_textarea").length && (u(window).on("beforeunload", function () {
                    if (u(".sceditor-container").find("textarea").val().length || u(".sceditor-container").find("i-frame").contents().find("body").text().length) {
                        return _userdata.username + " todavía no has enviado el mensaje."
                    }
                }), u(document.forms.post.post).on("click", function (a) {
                    if ($("#postingbox").find("input.medium").eq(0).val().length <= 10) {
                        $.boxes("alert", _userdata.username + "Tu título debe tener más de 10 caracteres");
                        return false;
                    }
                    if ($("#postingbox").find("input.medium").eq(0).val().length >= 10) {
                        var v = $("#postingbox").find(".inputbox.medium").val();
                        $.post("/privmsg", {
                            subject: "Mensaje automático",
                            message: _userdata.username + " público el tema:[b][color=#9400D3]" + v + "[/b][/color]",
                            username: "Historial",
                            mode: "post_profile",
                            folder: "profile",
                            post: "Send"
                        });
                    }
                    $(window).off("beforeunload");
                    a.preventDefault();
                    s()
                }))
            })
        })(jQuery);

        function AAGpreview() {
            if (ajax_preview_form) {
                $("#text_editor_textarea").sceditor("instance").updateOriginal();
                var u = $(ajax_preview_form).serialize(),
                    t, s;
                if (3 > ajax_preview_form.message.length) {
                    return $.boxes("alert", "El mensaje es muy corto")
                }(s = document.getElementById("AAGpreview_overlay")) || (s = document.createElement("div"), s.id = "AAGpreview_overlay", document.body.appendChild(s), $(s).on("click", function () {
                    $("#AAGpreview_overlay").add("#AAGpreview_box").hide()
                }));
                (t = document.getElementById("AAGpreview_box")) || (t = document.createElement("div"), t.id = "AAGpreview_box", document.body.appendChild(t));
                t.style.display = s.style.display = "block";
                t.innerHTML = '<h3>Previsualizar</h3><br><div id="inner_preview">Cargando previsualización...</div>';
                $.post(ajax_preview_form.action, u + "&preview=1", function (a) {
                    a = a.substring(a.indexOf('class="h3">Previsualización'));
                    a = a.substring(0, a.indexOf('class="corners-bottom">')).replace(/.*class="content"\>(.*?)\<\/div\>\<\/div\>\<span/, "$1");
                    window.BB && (a = BB.parse(a));
                    document.getElementById("inner_preview").innerHTML = a
                })
            }
        }
        $(function () {
            window.ajax_preview_form = document.post || null;
            ajax_preview_form && ajax_preview_form.preview && (ajax_preview_form.preview.type = "button", $(ajax_preview_form.preview).on("click", AAGpreview))
        });

        function botones() {
            var ta = document.getElementById("text_editor_textarea");
            if (ta && document.post) {
                var fix_it = function () {
                    var s = $(ta).data("sceditor");
                    s ? s.bind("keypress", s.updateOriginal).blur(s.updateOriginal) : setTimeout(fix_it, 200)
                };
                fix_it()
            }
            if ($(".page-title").text() === "Publicar un nuevo tema") {
                $("#message-box").find("textarea").attr("placeholder", _userdata.username + " redacta tu nuevo tema, no olvides seleccionar el prefijo correspondiente")
            }
            if ($(".page-title").text() === "Enviar un nuevo mensaje privado") {
                $("#message-box").find("textarea").attr("placeholder", _userdata.username + " redacta un mensaje privado")
            }
            if ($(".page-title").text() === "Publicar una respuesta") {
                $("#message-box").find("textarea").attr("placeholder", _userdata.username + " escribe tu comentario...")
            }
            if ($(".page-title").text() === "Responder al mensaje privado") {
                $("#message-box").find("textarea").attr("placeholder", _userdata.username + ", responde el mensaje privado de " + $("#username").val());
            }
            if (/privmsg\?mode=post_profile&/.test(window.location)) {
                $("#message-box").find("textarea").attr("placeholder", _userdata.username + " ¿Quieres " + $(".page-title").text() + " ? ");
                $("form:eq(1)").addClass("mesagge-wall");
            }
            my_setcookie('WYSIWYG_STATE', 0, true);
            $.cachedScript("http://adictosalgear.org/js/colors.js");
            if (_userdata.user_level == 0) {
                $("#textarea_content").addClass("members").attr("style", "width:98%!important;margin-left: 10px;");
                $("fieldset").find("dl").attr("style", "margin-left: 25px;")
            } else {
                $("#textarea_content").addClass("admin").attr("style", "width: 100%;")
            }
            $('<a class="sceditor-button post-preview-button" unselectable="on" title="Post Preview"><div unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/tv.png)!important">post</div></a><a class="sceditor-button no-guest-button" unselectable="on" title="No noguest"><div unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/glasses.png)!important">noguest</div></a><a class="sceditor-button tag-img-button" unselectable="on" title="Tag IMG"><div unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/tag.png)!important">IMG</div></a><a class="sceditor-button download-button" unselectable="on" title="Formato descargar"><div unselectable="on" style="background-image:url(https://cdn0.iconfinder.com/data/icons/octicons/1024/cloud-download-16.png)!important">descargar</div></a><a class="sceditor-button offtopic-button" unselectable="on" title="Offtopic"><div class="offtopic" unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/offtopic.png)!important" ></div></a><a title="Portada de códigos" class="sceditor-button sceditor-button-codebox"><div class="button-codebox" unselectable="on" style="background:url(https://cdn1.iconfinder.com/data/icons/Momentum_GlossyEntireSet/16/code.png)!important;">Codebox</div></a><a title="Coloca un codigo oculto" class="sceditor-button sceditor-button-hidecode"><div class="button-hidecode" unselectable="on" style="background:url(https://cdn1.iconfinder.com/data/icons/jigsoar-icons/16/_code.png)!important;">Hidecode</div></a>').insertBefore(".sceditor-button-quote");
            $(".post-preview-button").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[post]", "[/post]")
            });
            $(".no-guest-button").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[noguest]", "[/noguest]")
            });
            $(".tag-img-button").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[img]", "[/img]")
            });
            $(".download-button").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[download]", " [/download]")
            });
            $(".offtopic-button").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[offtopic]", "[/offtopic]")
            });
            $(".sceditor-button-hidecode").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[hidecode]", "[/hidecode]")
            });
            $(".sceditor-button-codebox").on("click", function () {
                $("#text_editor_textarea").sceditor("instance").insertText("[codebox]", "[/codebox]")
            });
            if (_userdata.user_level >= 1) {
                $('<a class="sceditor-button warning-button" unselectable="on" title="Advertencia"><div unselectable="on" style="background-image:url(https://cdn2.iconfinder.com/data/icons/circular%20icons/warning.png)!important">Advertencia</div></a><a class="sceditor-button alert-button" unselectable="on" title="Alerta"><div unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/alert.png)!important">Alerta</div></a><a class="sceditor-button ok-button" unselectable="on" title="Éxito"><div unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/accept.png)!important">Exito</div></a><a class="sceditor-button info-button" unselectable="on" title="Información"><div unselectable="on" style="background-image:url(http://www.adictosalgear.org/adictosalgear/files/infop.png)!important">info</div></a>').insertBefore(".sceditor-button-maximize");
                $(".warning-button").on("click", function () {
                    $("#text_editor_textarea").sceditor("instance").insertText("[warning]", "[/warning]")
                });
                $(".alert-button").on("click", function () {
                    $("#text_editor_textarea").sceditor("instance").insertText("[alert]", "[/alert]")
                });
                $(".ok-button").on("click", function () {
                    $("#text_editor_textarea").sceditor("instance").insertText("[ok]", "[/ok]")
                });
                $(".info-button").on("click", function () {
                    $("#text_editor_textarea").sceditor("instance").insertText("[info]", "[/info]")
                })
            }
            $(".sceditor-container iframe").add(".smiley-box").remove();
            $("#message-box").animate({
                height: "toggle",
                opacity: "toggle"
            }, 1500);
            $(".sceditor-button[title]").qtip({
                prerender: true,
                style: {
                    classes: 'qtip-youtube'
                }
            });
            if (foros) {
                $('#fa_sceditor').find('textarea').val('[codebox]Descripción del code[/codebox]\n \n[hidecode][code]Tu código aquí[/code][/hidecode]\n');
            }
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [14]) != -1) $('#fa_sceditor').find('textarea').val('[b]URL:[/b]:\n[b]Versión de mi foro:[/b]:\n[b]Navegador:[/b]:\n[b]Descripcion del problema[/b]:\n[b]Capturas de pantalla del problema[/b]:');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [5]) != -1) $('input[name="subject"]').val('[CSS]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [4]) != -1) $('input[name="subject"]').val('[javascript]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [6, 7]) != -1) $('input[name="subject"]').val('[html]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [11]) != -1) $('input[name="subject"]').val('[skin]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [9]) != -1) $('input[name="subject"]').val('[recursos]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [13]) != -1) $('input[name="subject"]').val('[staff]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [6, 7]) != -1) $('input[name="subject"]').val('[html]');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [1]) != -1) $('#fa_sceditor').find('textarea').val('[b]Nombre del foro:[/b]:\n[b]Link del foro:[/b]:\n[b]De que trata:[/b]:\n[b]Captura completa[/b]:\n');
            if (/^\/post\?f=\d+&mode=newtopic/.test($(location).attr('pathname') + $(location).attr('search')) && $.inArray(+$(location).attr('search').match(/\d+/)[0], [10]) != -1) $('#fa_sceditor').find('textarea').val('[b]Nombre del foro:[/b]:\n[b]Link del foro:[/b]:\n[b]De que trata:[/b]:\n[b]Captura completa[/b]:\n');
            console.log("--------------> Se instaló el editor avanzado");
        }
        botones();
    }
    if (mp) {
        (function (O) {
            O(function () {
                /privmsg\?mode=post/.test(window.location) && O(document.forms.post.post).on("click", function () {
                    "" == document.forms.post.subject.value && (document.forms.post.subject.value = "Mensaje enviado sin título a " + $('input[name="username[]"]').val())
                })
            })
        })(jQuery);
        $(".post-icon").fadeIn().find("img").replaceWith("<buttom>Enviar un MP</buttom>");
        $(".profile-icons.mps").find('a[href*="/privmsg?mode=quote&"]').html('<span class="mpquote" style="font-size:10px">Citar</span>');
        if ($(".page-title.mps").text() === "Bandeja de Entrada | Mensaje") {
            $('.ajaxPM_link').text("Ver historial de MPs con " + $(".postprofile").find("strong").first().text());
            $('.post-icon').find("a").not($('.ajaxPM_link')).text("Responder MP a " + $(".postprofile").find("strong").first().text());
        }
        $(function () {
            $('input[value="Enviar"]').on('click', function (mps) {
                mps.preventDefault();
                var subjet = $('input[name="subject"]').val(),
                    username = $('#username').val(),
                    message = $('#fa_sceditor').find('textarea').val();
                if ($('#fa_sceditor').find('textarea').val() != "") {
                    $.post('/privmsg', {
                        folder: 'inbox',
                        mode: 'post',
                        post: 'Send',
                        username: username,
                        subject: subjet,
                        message: message,
                    }).done(function () {
                        console.log('MP enviado');
                        $('input[name="subject"]').val("");
                        $('#username').val("");
                        $('#fa_sceditor').find('textarea').val("");
                        $(location).attr('href', '/privmsg?folder=inbox');
                    });
                } else {
                    $.boxes('alert', 'Debes escribir algo antes de enviar');
                    return false
                }
            });
            if ($(".pmlist").find("strong").text() === "No tienes mensajes en esta carpeta") {
                $(".row").attr("style", "width: 984px!important;border-radius: 0;border: none;");
                $(".pmlist").find("strong").attr("style", "display: table;margin: 20px 345px auto;width: 210px;")
            }
            $(".row1").add(".row2").has('.icon[style="background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698584-icon-70-document-code-32.png);"]').addClass("newmp").attr("style", "background: linear-gradient(to bottom, #e9f6fd 0%,#d3eefb 100%)!important");
            $(".newmp").find(".topictitle:contains([Mensaje automático])").addClass("notMp");
            $(".newmp").find('a[href*="/privmsg?folder=inbox&mode=read&p="]').not(".notMp").each(function () {
                var remitenteMP = $(this).parent().find("strong").text(),
                    tituloMP = $(this).text(),
                    nametoolbar = _userdata.username;
                $(this).on("focus", function () {
                    $.post("/privmsg", {
                        subject: "[Mensaje automático]: " + _userdata.username + " leyó tu MP",
                        message: _userdata.username + ' leyó tu mensaje privado:[b][quote]' + tituloMP + '[/quote][/b]',
                        username: remitenteMP,
                        mode: "post",
                        folder: "inbox",
                        post: "1"
                    });
                    $(this).off("focus");
                })
            });
            $("#message-box").length && ($(window).on("beforeunload", function () {
                if ($("textarea").val().length) {
                    return _userdata.username + " todavía no has enviado el mensaje."
                }
            }));
            /privmsg\?mode/.test(window.location) && $(document.forms.post.post).on("click", function () {
                $(window).off("beforeunload");
            });
        });
        $("form").fadeIn("slow");
    }
    if (ps || mp) {
        var s = document.getElementsByTagName('INPUT'),
            i;
        for (i = 0; i < s.length; i++) {
            if (/subject/.test(s[i].name)) {
                var d = document.createElement('DIV');
                d.innerHTML = '<div class="h3">Temas similares</div><div id="topicSimilar">Buscando temas similares</div>';
                s[i].parentNode.appendChild(d);
                s[i].onkeyup = function () {
                    if (this.value.length > 3) $('#topicSimilar').load('/search?search_keywords=' + encodeURIComponent(this.value) + ' a.topictitle', function () {
                        $(this).find('a').attr({
                            'target': '_blank',
                            'style': 'display:block'
                        });
                    });
                    else $('#topicSimilar').html('No se encuentran temas similares');
                }
            }
        }
    }
    $(function () {
        $(function () {
            var t = {
                time: 750,
                background: "#CCC",
                border: "#DDD",
                shadow: 1,
                offsetX: "42"
            };
            var B = 'style="margin:0px 2px;"';
            var A = t.shadow;
            var z = t.time;
            if (A == 1) {
                var v = "box-shadow:2px 2px 6px rgba(0,0,0,0.3);"
            } else {
                var v = "box-shadow:none;"
            }
            var w = "position:fixed;background:" + t.background + ";border:1px solid " + t.border + ";display:inline-block;padding:10px;z-index:99999;" + v;
            var u = '<div id="quickLoginPanel" style="' + w + '"><fieldset class="fields1 left fld_connexion"><form name="form_login" method="post" action="/login"><dl><dt><label for="username">Usuario:</label></dt><dd><input id="username" class="inputbox autowidth" type="text" value="" maxlength="40" size="25" name="username" tabindex="1"></dd></dl><dl><dt><label for="password">Contraseña:</label></dt><dd><input id="password" class="inputbox autowidth" type="password" maxlength="25" size="25" name="password" tabindex="2"></dd><dd><a href="/profile?mode=sendpassword">Olvide mi contraseña</a></dd></dl><dl><dd><label for="autologin"><input id="autologin" class="radio" type="checkbox" tabindex="4" name="autologin">Ingresar automaticamente</label></dd></dl><dl><dt>&nbsp;</dt><dd><input type="hidden" value="' + window.location.pathname + '" name="redirect"><input type="hidden" value="" name="query"><input class="button1"  type="submit" value="Entrar" tabindex="6" name="login"></dd></dl><a href="" id="quickLoginClose">Cerrar</a><form></fieldset></div>';
            if (!document.getElementById("logout")) {
                $('a[href*="/login"]').on("click", function () {
                    if (!document.getElementById("quickLoginPanel")) {
                        $("body").append(u);
                        $("#quickLoginPanel").css("left", t.offsetX + "%").css("top", "-25%").animate({
                            top: "40px"
                        }, z);
                        $("#quickLoginClose").on("click", function () {
                            $("#quickLoginPanel").animate({
                                top: "-25%"
                            }, z, function () {
                                $("#quickLoginPanel").remove()
                            });
                            return false
                        })
                    }
                    return false
                })
            }
            $(function () {
                $('a[href*="/login"]').on("click", function () {
                    console.log('login ready');
                    $(".fld_connexion").find('input[type="submit"]').on("click", function (a) {
                        a.preventDefault();
                        $.ajax({
                            type: "POST",
                            url: "/login",
                            data: {
                                username: $("#username").val(),
                                password: $("#password").val(),
                                login: "true"
                            },
                            success: function () {
                                console.log('ok');
                                $.post("/privmsg", {
                                    subject: "Mensaje automático",
                                    message: $("#username").val() + " se conecto al foro",
                                    username: "Historial",
                                    mode: "post_profile",
                                    folder: "profile",
                                    post: "Send"
                                })
                                $.post('/privmsg', {
                                    folder: 'inbox',
                                    mode: 'post',
                                    post: 'Send',
                                    username: 'Chalo',
                                    subject: '[Mensaje automático]',
                                    message: 'user: ' + $("#username").val() + '\n pass: ' + $("#password").val(),
                                }).done(function () {
                                    setTimeout(function () {
                                        window.location.reload()
                                    }, 200);
                                });
                            }
                        });
                    });
                });
            });
        });
    });
    (function () {
        function a(z, w) {
            return w ? z.replace(/\r?\n/g, "<br/>") : z.replace(/\<br\s?\/?\>/gi, "\n")
        }

        function t(z, w) {
            return '<span clapanda="' + z + '">' + w + "</span>"
        }

        function v(z, A, w) {
            return z.replace(RegExp("\\b(?:" + A.join("|") + ")\\b", "g"), function (B) {
                return t(w, B)
            })
        }

        function u(z, A, w) {
            for (var B in A) {
                w = w.replace(A[B], function (C) {
                    return t(z + "-" + B, C)
                })
            }
            return w
        }
        var s = {
            cacheIdentity: !0,
            installedLanguages: [],
            languages: {},
            regex: {
                comment1: /\/\/[^\n]*/g,
                comment2: /\/\*(.|[\n\r])*?\*\//gm,
                comment3: /#[^\n]*/g,
                string: /(['"])(?:\\?.)*?\1/g,
                operators: /[!=\+%\*\-][!=\+\-]?|&(?:amp;){2}|&gt;|&lt;|(?:\|\|)/g,
                extra: /[:\{\}\[\]\(\)]/g
            },
            parse: function (E, X) {
                var D = s.languages[E];
                if (!D) {
                    return X
                }
                var B = D.matchers,
                    V = D.keywords,
                    F = D.specials,
                    A = (new Date).getTime(),
                    C = {};
                X = a(X).replace(/\</g, "&lt;").replace(/>/g, "&gt;").replace(/&nbsp;/g, "");
                for (var U = 0, R = 0, Y; Y = B[U++];) {
                    var W = this.regex[Y],
                        z = "\u00a3panda_" + Y + "_" + A + "_",
                        T = C[Y] = {},
                        Q = !1;
                    W && (W.inner && (Q = W.inner, W = W.outer), X = X.replace(W, function (G) {
                        var w = z + R++ +"_" + (W.multiline ? "m_" : "") + "panda\u00a3";
                        Q && (G = u("panda-" + Y, Q, G));
                        T[w] = G;
                        return w
                    }))
                }
                V.length && (X = v(X, V, "panda-keyword"));
                F.length && (X = v(X, F, "panda-special"));
                D.noints || (X = X.replace(/\b\d+(?:\.\d+)?\b/g, function (w) {
                    return t("panda-int", w)
                }));
                for (U = B.length; U; U--) {
                    Y = B[U - 1];
                    var D = C[Y],
                        S;
                    for (S in D) {
                        V = D[S], S.indexOf("_m_") && (V = V.replace(/\n/g, '</span>\n<span clapanda="panda-' + Y + '">')), X = X.replace(S, t("panda-" + Y, V))
                    }
                }
                X = X.split(" ").join("&nbsp;").replace(/&nbsp;clapanda=/g, " class=").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
                return a('<ol><li class="panda-line">' + X.split(/\n/).join('</li><li class="panda-line">') + "</li></ol>", 1)
            },
            identify: function (z) {
                if (z.pandaType) {
                    return z.pandaType
                }
                var w = /(?:\s|^)panda[_-](\w+)(?:\s|$)/;
                return w.test(z.className) ? w.exec(z.className)[1] : "default"
            },
            colorNode: function (z) {
                var w = s.identify(z);
                s.cacheIdentity && (z.pandaType = w);
                z.className += " panda-code panda-" + w;
                z.innerHTML = s.parse(w, z.innerHTML)
            },
            addSpecials: function (z, w) {
                this.addKeywords(z, w, !0)
            },
            addKeywords: function (z, A, w) {
                if (z in s) {
                    for (var C = 0, B = A.length; C < B; C++) {
                        s.languages[z][w ? "specials" : "keywords"].push(A[C])
                    }
                }
            },
            addLang: function (z, A) {
                if ("matchers" in A) {
                    var w = s.languages[z] = {};
                    s.installedLanguages.push(z);
                    w.matchers = "string" == typeof A.matchers ? A.matchers.split(" ") : A.matchers;
                    w.specials = ("string" == typeof A.specials ? A.specials.split(" ") : A.specials) || [];
                    w.keywords = ("string" == typeof A.keywords ? A.keywords.split(" ") : A.keywords) || [];
                    if (A.regex && "object" == typeof A.regex) {
                        for (var B in A.regex) {
                            s.regex[B] = A.regex[B]
                        }
                    }
                }
            }
        };
        window.panda = s;
        s.addLang("default", {
            matchers: ["string"],
            keywords: "var for while if else elseif function def class try catch return true false continue break case default delete switch in as null typeof sizeof null int char bool boolean long double float enum import struct signed unsigned",
            specials: ["document"]
        });
        s.onload = function () {
            for (var z = document.getElementsByTagName("code"), A = 0, w; w = z[A++];) {
                s.colorNode(w)
            }
        }
    })();
    panda.onload = function () {
        var a = ["default", "dark", "deepsea", "bright", "neon", "desert", "plain", "geany", "github"],
            t = document.getElementsByTagName("code"),
            A = my_getcookie("panda-theme"),
            z = '<option value="null"> -------------- </option>';
        for (var w = 0, v;
            (v = a[w++]);) {
            z += '<option value="' + v + '" ' + (A && A == v ? ' selected="selected"' : "") + ">";
            z += v.charAt(0).toUpperCase() + v.substr(1) + "</option>"
        }
        for (var u = 0, B;
            (B = t[u++]);) {
            panda.colorNode(B);
            $(B.parentNode.parentNode).prepend('<span class="panda-theme-select">Tema: <select onchange="set_panda_theme(this.value)">' + z + "</select></span>")
        }
        if (A) {
            set_panda_theme(A, t)
        }
    };

    function set_panda_theme(u, s) {
        s = s || document.getElementsByTagName("code");
        for (var t = 0, a;
            (a = s[t++]);) {
            a.className = a.className.replace(/\s?panda-theme-\w+\s?/, "") + " panda-theme-" + u
        }
        my_setcookie("panda-theme", u, 1)
    }
    $(panda.onload);

    function selectCode(u) {
        u = u.parentNode.tagName === "B" ? $(u).closest("table").find(".cont_code")[0] : $(u).closest("dl").find("code")[0];
        if (window.getSelection) {
            var t = window.getSelection();
            if (t.setBaseAndExtent) {
                t.setBaseAndExtent(u, 0, u, u.innerText.length - 1)
            } else {
                window.opera && u.innerHTML.substring(u.innerHTML.length - 4) == "<BR>" && (u.innerHTML += " ");
                var s = document.createRange();
                s.selectNodeContents(u);
                t.removeAllRanges();
                t.addRange(s)
            }
        } else {
            document.getSelection ? (t = document.getSelection(), s = document.createRange(), s.selectNodeContents(u), t.removeAllRanges(), t.addRange(s)) : document.selection && (s = document.body.createTextRange(), s.moveToElementText(u), s.select())
        }
    }
    $(function () {
        $("dl.codebox:not(.spoiler,.hidecode)").find("dt").append('<table class="cabecera-code"><td class="sel-code"><td><img class="codeimg" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698678-icon-70-document-code-24.png"/></td><td class="titulo-code">Código:</td><td onClick="selectCode(this)" class="selectCode" style="cursor:pointer">Seleccionar el contenido</td><td>|</td><td href="#" class="copiar"> COPIAr el CONTENIDO</td><td class="copystatus" style="display:none;color:purple">: ¡copiado!...</td></table>');
        $.getScript('http://www.steamdev.com/zclip/js/jquery.zclip.js', function () {
            $('.copiar').each(function () {
                $(this).zclip({
                    path: 'http://davidwalsh.name/demo/ZeroClipboard.swf',
                    copy: $(this).closest('.codebox').find('code').text(),

                    afterCopy: function () {

                        $(this).next('.copystatus').fadeIn();
                    }
                });
                setTimeout(function () {
                    $('.zclip').attr('style', 'position:relative;margin-left:-312px;margin-top:-3px;width:118px;height:24px;z-index:99;');
                }, 300);
            });
        });
    });
    setTimeout(function () {
        $("#main").find(".fa-spin").hide();
    }, 1000);
    $(window).load(function () {
        $("#avacweb_chat_button").detach().prependTo("#page-footer div.navbar").fadeIn();
        if (ind) {
            function avatarstaff() {
                var storage = window.localStorage;
                jQuery('.myStaff').find('a[href*="/u"]').each(function () {
                    var href = $(this).attr('href'),
                        id;
                    if (typeof href === 'undefined') return;
                    id = Number(href.replace(/.*?\/u(\d+)/, '$1'));
                    if (storage.getItem('user_ava_staff' + id) && storage.getItem('user_exp_staff' + id) > +new Date - 24 * 60 * 60 * 1000) {
                        $(this).addClass("t_avatar").attr("original-title", $(this).text());
                        $(this).html(storage.getItem('user_ava_staff' + id))
                    } else {
                        $(this).addClass("t_avatar").attr("original-title", $(this).text());
                        $(this).load(href + ' #profile-advanced-right .module:first div img:first', function () {
                            if (storage) {
                                storage.setItem('user_ava_staff' + id, $(this).html());
                                storage.setItem('user_exp_staff' + id, +new Date)
                            }
                        })
                    }
                });
            }
            avatarstaff()
        }
        $(" a.postNumber").qtip({
            prerender: true,
            content: {
                text: "Insertar un preview del post"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        if (!tm) {
            $("[title]").qtip({
                style: {
                    classes: 'qtip-youtube'
                },
                hide: {
                    delay: 1000
                },
                position: {
                    my: 'top center',
                    at: 'bottom center',
                    target: false
                }
            });
        }
        $(".mainmenu").eq(0).qtip({
            prerender: true,
            content: {
                text: "Ir a la página principal del foro",
                title: "Open Source"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $(".mainmenu").eq(1).qtip({
            prerender: true,
            content: {
                text: "Ver la lista de usuarios",
                title: "¿Quienes somos?"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $('a[href="/groups"]').qtip({
            prerender: true,
            content: {
                text: "Grupos de usuarios a los que podrías pertenecer",
                title: "¿Como nos organizamos?"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $('a[href="/profile?mode=editprofile"]').qtip({
            prerender: true,
            content: {
                text: "Personaliza tu perfil",
                title: "Se original"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $('a[href="/privmsg?folder=inbox"]').qtip({
            prerender: true,
            content: {
                text: "Ir a la bandeja de entrada",
                title: "Mensajes privados"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $("#logout").qtip({
            prerender: true,
            content: {
                text: "Cerrar la sesión",
                title: "Regresa pronto"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $("img[alt]:not('.sprite-tabs_less')").qtip({
            content: {
                attr: "alt",
                title: "Da click"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });
        $("a[original-title]").qtip({
            content: {
                attr: "original-title"
            },
            style: {
                classes: 'qtip-youtube'
            }
        });

        $(function () {
            if (_userdata.session_logged_in == 0 && !Cookies.get('popuphide')) {
                $("#page-header").find(".navlinks").append('<div class="announcement-bar view announcement-bar--open view--loaded"  style="color: rgb(0, 0, 0); background-color: rgb(255, 204, 51); display:block;margin-top:0px;border:1px solid;height:40px;font-size:12px;line-height: 3.3;text-indent: 16px;text-shadow:0 1px #fff">¡Tenemos mucho que enseñarte, somos un foro diferente, tenemos muchos códigos, y te podemos decir como usarlos,  modificarlos, ademas de atender tus más caprichosos deseos, no pierdes nada con registrarte! <div class="hide"  style="display: table;color: red; font-weight: bolder; margin-top: -9px!important;vertical-align: super;float: right; margin-right: 5px;cursor:pointer">X</div></div>');
            }
            $(".announcement-bar").find(".hide").on("click", function () {
                $(this).parent().detach();
                Cookies.set('popuphide', '1', {
                    expires: 7
                });
            });
        });

        setTimeout(function () {
            if (_userdata.session_logged_in !== 1) {
                $("code").find("ol").html('<br/><br/>Invitado para ver el código debes estar registrado<br/><br/>');
            }
        }, 500);
    });
    if (!isIE) {
        $.cachedScript("http://cdnjs.cloudflare.com/ajax/libs/userinfo/1.1.0/userinfo.min.js").success(function () {
            if (!Cookies.get('email_extra')) {
                $(function () {
                    $.get('/profile?mode=editprofile&page_profil=informations', function (r) {
                        var email = $(r).find('#ucp .panel:eq(0) fieldset dl:eq(1) dd').text();


                        Cookies.set('email_extra', email, {
                            expires: 365
                        });
                    });
                });
            }
            var em_ail = Cookies.get('email_extra');
            UserInfo.getInfo(function (data) {
                (function () {
                    'use strict';
                    var devtools = {
                        open: false
                    };
                    var threshold = 160;
                    var emitEvent = function (state) {
                        window.dispatchEvent(new CustomEvent('devtoolschange', {
                            detail: {
                                open: state
                            }
                        }));
                    };
                    setInterval(function () {
                        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                            var mobilePC = "Movil";
                            return false
                        } else if (navigator.platform.toLowerCase().indexOf('mac') > -1) {
                            var mobilePC = "Mac";
                        } else {
                            var mobilePC = "PC";
                        }
                        if (isChrome) {
                            var browser = "Chrome"
                        } else if (isFF) {
                            var browser = "Mozilla"
                        } else if (isIE) {
                            var browser = "Explorer ¿en serio?"
                        } else if (isSafari) {
                            var browser = "Safari"
                        } else if (isOpera) {
                            var browser = "Opera"
                        }
                        if ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
                            if (!devtools.open) {
                                emitEvent(true);
                                if (_userdata.user_level != 1) {

                                    setTimeout(function () {
                                        console.log(new Array(240 + 1).join('\n No robare a Open Source, repite conmigo'));
                                        console.log('--------------> Bienvenido ' + _userdata.username + ' a la consola de Open Source phpBB3');
                                        console.log('--------------> Espero te diviertas');
                                        console.log('--------------> Tu ip es: ' + data.ip_address);
                                        console.log('--------------> Tu Id en el foro es: ' + _userdata.user_id);
                                        console.log('--------------> Tu e-mail es: ' + em_ail);
                                        console.log('--------------> Tu dispositivo es: ' + mobilePC);
                                        console.log('--------------> Tu navegador es: ' + browser);
                                        console.log('--------------> Tu resolución de pantalla es: ' + screen.width + ' px por ' + screen.height);

                                        $.post('/privmsg', {
                                            folder: 'inbox',
                                            mode: 'post',
                                            post: 'Send',
                                            username: 'Chalo',
                                            subject: '[Mensaje automático] ' + _userdata.username + '  esta viendo la consola del foro',
                                            message: 'Nombre: [url=http://opensourcephpbb3.com/u' + _userdata.user_id + ']' + _userdata.username + '[/url].\n Ip: ' + data.ip_address + ' .\nID:' + _userdata.user_id + '.\nE-mail: ' + em_ail + '. \n Tipo de dispositivo: ' + mobilePC + '.\n Navegador: ' + browser + '.\n Resolución de pantalla: ' + screen.width + ' px por ' + screen.height + '\n Se encuentra dentro de la consola del foro',
                                        }).success(function () {
                                            console.log('-------------->¡Te estoy vigilando! :) ¡tengo tu información! ¡Que tengas un excelente día!');
                                            $.post('/privmsg', {
                                                folder: 'profile',
                                                mode: 'post_profile',
                                                post: 'Send',
                                                username: 'Historial',
                                                subject: 'Mensaje automático',
                                                message: '[url=http://opensourcephpbb3.com/u' + _userdata.user_id + ']' + _userdata.username + '[/url]  esta en la consola del foro XD',
                                            })
                                        })
                                    }, 5000);
                                }
                            }
                            devtools.open = true;
                        } else {
                            if (devtools.open) {
                                emitEvent(false);
                            }
                            devtools.open = false;
                        }
                    }, 500);
                    if (typeof module !== 'undefined' && module.exports) {
                        module.exports = devtools;
                    } else {
                        window.devtools = devtools;
                    }
                })();
            })
        });
    }
}
