console.log('//-----Written by Chalo ------- Open Source 2014-2016 -----//');
console.log('//------------ http://www.opensourcephpbb3.com ------------//');
console.log('//--------------------- Version: 1.6.1---------------------//');
console.log('//Reply, preview, quote, delete and more, without reload   //');
var os = {
    config: {
        beroreunload: 1,
        edit: 1,
        quote: 1,
        delete: 1,
        preview: 1,
        reply: 1,
        vote: 0,
        vote_img: 'http://i97.servimg.com/u/f97/19/54/65/02/th/68691610.png',
        placeholder: 1,
        letters: 5, //min words in the textarea before reply
        time: 3000,
        speed: 400,
        color_a: 'linear-gradient(to bottom, #ffff88 0%,#ffff88 100%)',
        color_b: 'linear-gradient(to bottom, #ffaf4b 0%,#ff920a 100%)',
        color_c: 'linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 100%)',
        color_d: 'linear-gradient(to bottom, #ff3019 0%,#cf0404 100%)',
        color_e: 'linear-gradient(to bottom, #d2ff52 0%,#91e842 100%)'
    },
    lang: {
        success_reply: 'Your message has been entered successfully', // <--- change this text exactly like is display in your language board
        flood: 'Flood control is active on this forum, please wait 10 second(s) before replying or posting',
        newpost: 'A new message has been posted',
        error_reply: 'Try again',
        reply_words: 'You must write ',
        reply_btn_send: 'Send data...',
        notice_default: 'No predefined text',
        no_message: 'There is nothing written in the editor',
        no_subject: 'You must specify a subject for your message.',
        pm_error_a: 'You must specify a username to whom to send this message.',
        pm_error_b: 'This or these user(s) do not exist',
        pm_error_c: 'You cannot make another post so soon after your last',
        pm_success: 'Your message has been sent',
        placeholder: 'write something here...',
        edit_subject_placeholder: 'The length of the title for this topic must be ranging between 10 and 255 characters',
        delete_main: 'Do you want delete the post #',
        delete_yes: 'Delete',
        delete_cancel: 'Cancel',
        edit_mode: 'Editing post #',
        quote_mode: 'Quoting post #',
        loading: 'Loading...',
        save: 'Save',
        notice_wait: 'Please be patient, sending data to the server',
        vote: 'like'
    },
    previewHTML: '<div id="preview_content"><a id="close" style="float:right;cursor:pointer;" onclick="os.close(\'preview\')"><img src="http://illiweb.com/fa/prosilver/icon_post_delete.gif"></a></div>',
    delete_style: '#confirm_content { color: #fff; margin-bottom: 7px; padding-bottom: 5px; font-size: 30px}#confirm >a { display: inline-block; padding: 4px 12px; margin-bottom: 0; font-size: 12px; line-height: 20px; color: #333; text-align: center; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; cursor: pointer; text-decoration: none!important;}#yes { color: #fff!important; text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); background-color: #5bb75b; background-image: linear-gradient(to bottom, #62c462, #51a351)!important; background-repeat: repeat-x; border-color: #51a351 #51a351 #387038; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25)!important;}#cancel { margin-left: 5px; color: #fff!important; background: linear-gradient(to bottom, #db5530 5%, #db1f1f 100%)!important; background-color: #db5530; text-shadow: 0 1px 0 #854629;}',
    init: function () {
        os.isTheme = /\/t\d+/g.test(window.location.pathname);
        os.isPost = /\/post\?f=(\d+)&mode=(newtopic)/.test(window.location.href);
        os.isEditPost = /\/post\?p=(\d+)&mode=(editpost)/.test(window.location.href);
        os.isMP = /\/privmsg\?mode=(post|reply|edit)/.test(window.location.href);
        os.phpbb2 = os.getEl('.bodylinewidth').length;
        os.phpbb3 = os.getEl('#phpbb');
        os.invision = os.getEl('#ipbwrapper');
        os.punbb = os.getEl('#pun-intro');
        os.subject = os.isTheme && os.getEl('h1')[0].textContent;
        os.body = os.getEl('body');
        os.form = os.getEl('forms').post;
        os.b_r = os.form.post;
        os.b_r_v = os.form.post.value;
        os.textarea = os.form.message;
        os.action = os.form.action;
        os.group = os.getEl('.sceditor-group')[0];
        os.b_p = os.form.preview;
        os.b_p_v = os.b_p.value;
        os.url = os.isTheme ? '/post?t=' + os.form.t.value + '&mode=reply' : os.isPost && document.location.href;
        os.sceditor = $(os.textarea).sceditor('instance');
        os.content = os.punbb ? '.entry-content' : os.phpbb3 ? '.content' : os.invision ? '.post-entry' : os.phpbb2 && '.postbody';
        os.a = os.getEl('a');
        os.config.placeholder == 1 && (os.getEl('.sceditor-grip', os.form)[0].previousElementSibling.placeholder = os.lang.placeholder);
        os.config.beroreunload == 1 && os.beforeunload();
        os.config.vote == 1 && os.set_vote();
        os.buttons(os.a);
    },
    buttons: function (a) {
        var b = 'os.get(this, \'quote\');return false',
            c = 'os.set_delete(this);return false',
            d = 'os.get(this,\'edit\');return false',
            e = 'os.post(this, \'preview\');return false',
            f = os.isMP ? 'os.post(this, \'mp\');return false' : 'os.post(this, \'reply\');return false',
            i;
        for (i = 0; i < a.length; i++) {
            os.config.quote == 1 && /(?!\&(mode)\=)(quote)/.test(a[i].href) && a[i].setAttribute('onclick', b);
            os.config.delete == 1 && /(?!\&(mode)\=)(delete)/.test(a[i].href) && a[i].setAttribute('onclick', c);
            os.config.edit == 1 && /(?!\&(mode)\=)(edit)/.test(a[i].href) && a[i].setAttribute('onclick', d);
        }
        os.config.preview == 1 && os.b_p.setAttribute('onclick', e);
        os.config.reply == 1 && os.b_r.setAttribute('onclick', f);
    },
    title_content: function (c) {
        return os.punbb || os.phpbb3 ? os.getEl('a', os.getEl('h2', c)[0])[0] : os.invision ? os.getEl('a', os.getEl('h3', c)[0])[0] : os.phpbb2 && os.getEl('.postdetails', c)[1].childNodes[1]
    },
    get: function (c, d) {
        os.url_universal = 'undefined' != typeof c.href ? c.href : c;
        var a = os.url_universal.match(/(?!\/post\?p=(\w+)\&mode=)(editpost|quote|vote)|viewtopic/)[0],
            b = os.post_number(os.url_universal),
            f, g, h, i, j, k, l, m, n, o, q, t, u, x;
        m = os.getEl('.post--' + b);
        os.XML('', os.url_universal, function (e) {
            x = e.responseXML;
            switch (a) {
            case 'editpost':
                os.sceditor.updateOriginal();
                f = x.forms.post.message.value;
                g = os.cr_el('input');
                g.className = 'inputbox medium edit_subject';
                g.placeholder = os.lang.edit_subject_placeholder;
                g.name = 'subject';
                g.setAttribute('style', 'display:table;margin:0 auto;width: 99%;margin-bottom: 5px');
                g.value = x.forms.post.subject.value;
                !os.getEl('.edit_subject').length && os.group.parentNode.insertBefore(g, os.group);
                os.edit_subject = os.getEl('.edit_subject')[0];
                m.length && (m[0].style.border = '1px solid orange!important');
                os.sceditor.val(f);
                os.b_r.setAttribute('onclick', 'os.post(this, \'edit\');return false');
                os.encode_edit = os.serialize(x.forms.post);
                os.url_edit = c.href, os.edit_number = b;
                os.b_r.value = os.lang.save;
                os.notice(os.lang.edit_mode + b, os.config.color_b, 'false');
                os.scroll(os.form, os.config.speed);
                break;
            case 'quote':
                os.sceditor.updateOriginal();
                os.scroll(os.form, os.config.speed);
                f = x.forms.post.message.value;
                h = os.sceditor.val();
                os.sceditor.val(h + f);
                os.notice(os.lang.quote_mode + b, os.config.color_a, 'false');
                break;
            case 'viewtopic':
                k = os.getEl('.post--' + b, x)[0];
                k.style.display = 'none';
                k.className += ' new_ajax_post';
                j = m[0];
                'reply' == d && (os.buttons(os.getEl('a', k)), os.set_post(k));
                'edit' == d && (t = os.getEl(os.content, k), u = t[0].innerHTML, os.getEl(os.content, j)[0].innerHTML = u,
                    os.title_content(m[0]).textContent = os.edit_subject.value, os.edit_subject.remove(), os.b_r.setAttribute('onclick', 'os.post(this, \'reply\');return false'), os.fadeIn(j, 500), os.scroll(j, os.config.speed));
                os.sceditor.val('');
                os.notice(os.lang.success_reply, os.config.color_e, 'true');
                break;
            case 'vote':
                i = os.getEl('.counter', c.parentNode);
                o = parseInt(i[0].innerHTML) + parseInt(1);
                i.length && (i[0].innerHTML = o + ' ' + os.lang.vote + (o == 1 ? '' : 's'));
                os.getEl('img', c)[0].style.opacity = '.3';
                c.removeAttribute('onclick');
                c.removeAttribute('href');
                break;
            }
        })
    },
    post: function (f, m) {
        var a, b, c, d, g, h, i, j, k, l, n, o, p, q, r, s, u, v, w, x, y, w;
        console.log(m);
        os.sceditor.updateOriginal();
        clearInterval(a);
        n = 'edit' == m && encodeURIComponent(os.sceditor.val());
        x = 'edit' == m && encodeURIComponent(os.edit_subject.value);
        os.url_post = m == 'delete' ? f.href : os.form.action;
        os.uritexto = 'reply' == m || 'mp' == m ? os.serialize(os.form) + '&post=1&prevent_post=1' : 'preview' == m ? os.serialize(os.form) + '&preview=Preview' : 'delete' == m ? '&confirm=1' : '&subject=' + x + '&message=' + n + '&mode=editpost&p=' + os.edit_number + '&notify=on&&post=1&prevent_post=1';
        k = os.getEl('.new_ajax_post');
        k.length && k[0].classList.remove('new_ajax_post');
        y = os.sceditor.val();
        if (y.length > 0 && y.match(/\w{2,}\b/g).length >= os.config.letters || 'delete' == m) {
            if ((os.isPost || os.isMP) && (os.form.subject && os.form.subject.value.length >= 10) || m == 'preview' || os.isEditPost || os.isTheme) {
                'delete' != m && (f.value = 'preview' == m ? os.lang.loading : os.lang.reply_btn_send, 'preview' == m ? os.b_p.setAttribute('style', 'color:#fff;background:' + os.config.color_d) : os.b_r.setAttribute('style', 'color:#fff;background:' + os.config.color_d));
                os.XML(os.uritexto, os.url_post, function (e) {
                    h = e.responseXML;
                    j = os.getEl(os.phpbb2 ? '#page-body' : '#main', h);
                    o = os.getEl('.postbody', h)[0];
                    a = j.innerHTML.indexOf(os.lang.success_reply);
                    b = j.innerHTML.indexOf(os.lang.flood);
                    l = j.innerHTML.indexOf(os.lang.newpost);
                    s = j.innerHTML.indexOf(os.lang.pm_error_b);
                    u = j.innerHTML.indexOf(os.lang.pm_error_c);
                    v = j.innerHTML.indexOf(os.lang.pm_success);
                    w = j.innerHTML.indexOf(os.lang.pm_error_a);
                    if (/mp/.test(m)) {
                        if (w > 0) {
                            os.notice(os.lang.pm_error_a, os.config.color_c, 'true');
                            os.refresh(os.b_r, os.b_r_v);
                        } else if (s > 0) {
                            os.notice(os.lang.pm_error_b, os.config.color_c, 'true');
                            os.refresh(os.b_r, os.b_r_v);
                        } else if (u > 0) {
                            os.notice(os.lang.pm_error_c, os.config.color_c, 'true');
                            os.refresh(os.b_r, os.b_r_v);
                        } else if (v > 0) {
                            os.sceditor.val('');
                            os.refresh(os.b_r, os.b_r_v);
                            setTimeout(function () {
                                document.location.href = '/privmsg?folder=inbox'
                            }, 2e3)
                        }
                    } else if (/(reply|edit)/.test(m)) {
                        os.viewtopic(h);
                        c = os.view_url;
                        os.b_r.setAttribute('style', 'color:#fff;background:' + os.config.color_d);
                        if (b > 0) {
                            os.notice(os.lang.flood, os.config.color_b, 'true');
                            os.refresh(os.b_r, os.b_r_v);
                        } else if (l > 0) {
                            os.notice(os.lang.newpost, os.config.color_b, 'true');
                            os.refresh(os.b_r, os.b_r_v);
                        } else if (0 > a) {
                            os.notice(os.lang.error_reply, '', 'true');
                            os.refresh(os.b_r, os.b_r_v);
                        } else {
                            if (os.isTheme) {
                                'undefined' != typeof c && os.get(c, m);
                                m == 'edit' && (os.get(c, 'title'));
                                os.notice(os.lang.notice_wait, os.config.color_c, 'true');
                                os.refresh(os.b_r, os.b_r_v);
                            } else {
                                os.overlay(os.lang.loading);
                                os.sceditor.val('');
                                setTimeout(function () {
                                    document.location.href = c
                                }, 2e3);
                                os.refresh(os.b_r, os.b_r_v);
                            }
                        };
                    } else if (/preview/.test(m)) {
                        os.create_preview();
                        p = os.getEl('#preview_content');
                        p.appendChild(o);
                        os.fadeIn(o, 500);
                        os.b_p.value = os.b_p_v;
                        os.b_p.setAttribute('style', '')
                    } else if (/delete/.test(m)) {
                        d = os.getEl('.post--' + os.post_number(os.url_post));
                        r = os.getEl('#confirm_wrap');
                        q = os.getEl('#overlay');
                        d.length && (os.phpbb2 ? (os.fadeOut(d[0].nextElementSibling, 500), os.fadeOut(d[0], 500)) : os.fadeOut(d[0], 500));
                        r && r.remove();
                        q && q.remove();
                    }
                })
            } else {
                os.notice(os.lang.no_subject, os.config.color_d, 'true');
                os.refresh(os.b_r, os.b_r_v);
                os.b_r.setAttribute('style', '');
            }
        } else {
            w = y.length > 0 && y.match(/\w{2,}\b/g) != null ? (os.config.letters - y.match(/\w{2,}\b/g).length) : 5;
            os.notice(os.lang.reply_words + w + ' word' + (w <= 1 ? '' : 's'), os.config.color_d, 'true');
            m == 'reply' ? os.refresh(os.b_r, os.b_r_v) : os.refresh(os.b_p, os.b_p_v);
        }
    },
    set_vote: function () {
        var i, a, b, c, d, e, f, g, m, o, p, l = os.config.vote_img,
            s = os.style,
            h = os.getEl('.vote');
        for (i = 0; i < h.length; i++) {
            f = h[i];
            a = os.getEl('.vote-button', f);
            b = a.length && os.getEl('a', a[0])[0];
            c = os.getEl('.vote-no-bar', f);
            d = os.getEl('.vote-bar', f)[0];
            p = a.length && a[0].parentNode;
            os.number = os.getEl('.vote-bar', f).length && d.title.match(/(\d+)/g)[1];
            f.setAttribute('style', 'margin-bottom: 20px;float: inherit;width: auto');
            if (h[i].childNodes.length == 1) {
                d.className = 'like';
                d.removeAttribute('style');
                d.setAttribute('style', 'float:right;display:inline-block;width: 65px');
                g = os.cr_el('img');
                g.setAttribute('style', 'opacity: .3;float:left');
                g.src = l;
                m = os.cr_el('span');
                m.className = 'counter';
                m.setAttribute('style', 'margin-left: 5px;float:right');
                m.innerHTML = os.number + ' ' + os.lang.vote + (os.number == 1 ? '' : 's');
                d.innerHTML = '';
                d.appendChild(g);
                d.appendChild(m);
            } else {
                o = b;
                o.className = 'like';
                o.setAttribute('style', 'float:right;display:inline-block;width: 65px;font-size: 11px;');
                o.innerHTML = '<img src="' + l + '"/>';
                o.setAttribute('href', b.href);
                o.setAttribute('onclick', 'os.get(this,\'vote\');return false');
                e = os.cr_el('span');
                e.className = 'counter';
                e.setAttribute('style', 'margin-left: 5px;float:right');
                e.innerHTML = os.number + ' ' + os.lang.vote + (os.number == 1 ? '' : 's');
                o.appendChild(e);
                p.innerHTML = '';
                p.appendChild(o);
            }
        }
    },
    refresh: function (c, d) {
        c.value = d;
        c.setAttribute('style', '');
    },
    overlay: function (c) {
        var a = os.cr_el('div');
        a.setAttribute('style', 'font-family:arial;display:block;position:fixed;top:0;left:0;min-height:101%;width:100%;background-color:rgba(0, 0, 0, .4);z-index:999;color:#fff;font-size: 45px; text-align: center; line-height: 13');
        a.id = 'overlay';
        'undefined' != typeof c && (a.textContent = c);
        os.body.appendChild(a);
    },
    create_preview: function () {
        var m = os.cr_el('div');
        m.setAttribute('style', 'background:#fff;left:15%;position:fixed;top:10%;width:70%;height:65%;overflow:auto;z-index:999;box-shadow:10px 10px 40px black;border-radius:3px;font-size:1.2em;padding:10px;font-family:Arial;text-shadow:0 1px 1px white;color:#666;');
        m.id = 'preview_content';
        m.innerHTML = os.previewHTML;
        os.overlay();
        os.body.appendChild(m);
    },
    set_delete: function (f) {
        var d, b, c;
        b = os.cr_el('div');
        b.innerHTML = '<div id="confirm_content">' + os.lang.delete_main + os.post_number(f.href) + '?' + '</div><div id="confirm"><a id="yes" class="yes" href="' + f.href + '" onclick="os.post(this,\'delete\');return false">' + os.lang.delete_yes + '</a><a id="cancel" onclick="os.close(\'delete\')">' + os.lang.delete_cancel + '</a></div>';
        b.id = 'confirm_wrap';
        b.setAttribute('style', 'font-family:arial;display: inline-block; vertical-align: top; width: auto; text-align: center; z-index: 9999; padding: 7px 13px; position: fixed; top: 35%; left: 30%');
        os.body.appendChild(b);
        os.overlay();
        os.delete_cr_style():
    },
    set_post: function (h) {
        var e = os.punbb ? os.getEl('.topic')[0] : os.phpbb2 ? os.getEl('.catBottom')[0].parentNode.previousElementSibling : os.phpbb3 ? os.getEl('*bottomtitle')[0].previousElementSibling : os.invision && os.getEl('.topic-footer')[0].previousElementSibling;
        os.punbb ? e.appendChild(h) : e.parentNode.insertBefore(h, e.nextSibling);
        os.scroll(h, os.config.speed);
        os.fadeIn(h, 500);
    },
    delete_cr_style: function () {
        var  c = os.cr_el('style', os.delete_style);
        c.innerHTML = os.delete_style;
        c.type = 'text/css';
        c.id = 'd_style';
        !os.getEl('#d_style') && os.getEl('head').appendChild(c);
    },
    XML: function (a, b, f) {
        var c;
        c = window.XMLHttpRequest ? new XMLHttpRequest : window.ActiveXObject && (new ActiveXObject('Microsoft.XMLHTTP'));
        'undefined' != typeof a ? c.open('POST', b) : c.open('GET', b, true);
        c.responseType = 'document';
        c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        c.send('undefined' != typeof a ? a : '');
        c.onreadystatechange = function () {
            this.readyState == 4 && this.status == 200 && (f(this));
        };
    },
    serialize: function (b) {
        var a, i, j, l, s = [];
        if ('object' == typeof b && 'FORM' == b.nodeName) {
            l = b.elements.length;
            for (i = 0; l > i; i++)
                if (a = b.elements[i], a.name && !a.disabled && 'file' != a.type && 'reset' != a.type && 'submit' != a.type && 'button' != a.type)
                    if ('select-multiple' == a.type)
                        for (j = b.elements[i].options.length - 1; j >= 0; j--) a.options[j].selected && (s[s.length] = encodeURIComponent(a.name) + '=' + encodeURIComponent(a.options[j].value));
                    else('checkbox' != a.type && 'radio' != a.type || a.checked) && (s[s.length] = encodeURIComponent(a.name) + '=' + encodeURIComponent(a.value))
        }
        return s.join('&').replace(/%20/g, '+');
    },
    notice: function (c, f, h) {
        var a, b, d, e, g;
        g = os.getEl('.notice_reply');
        b = os.group;
        d = b.parentNode;
        a = !g.length ? os.cr_el('DIV') : g[0];
        e = 'height:20px;line-height: 1.5;border-radius: 3px; text-shadow: 0 1px rgba(255, 255, 255, 0.46);text-align:center';
        !g.length && (a.classList.add('notice_reply'), a.setAttribute('style', e), d.insertBefore(a, b));
        os.fadeIn(a, 500);
        a.innerHTML = 'undefined' == typeof c ? os.lang.notice_default : c;
        a.style.background = ('undefined' == typeof f || f == '') ? os.config.color_a : f;
        'false' != h && setTimeout(function () {
            '' == a.style.display && (os.fadeOut(a, 500))
        }, os.config.time);
    },
    fadeIn: function (a, b) {
        var e, d;
        if (!a) return;
        a.style.opacity = 0, a.style.filter = 'alpha(opacity=0)', a.style.display = '', a.style.visibility = 'visible',
            b ? (e = 0, d = setInterval(function () {
                e += 50 / b, e >= 1 && (clearInterval(d), e = 1), a.style.opacity = e, a.style.filter = 'alpha(opacity=' + e * 100 + ')'
            }, 50)) : (a.style.opacity = 1, a.style.filter = 'alpha(opacity=1)')
    },
    fadeOut: function (o, e) {
        if (o)
            if (e) var s = 1,
                t = setInterval(function () {
                    s -= 50 / e, s > 0 || (clearInterval(t), s = 0, o.style.display = 'none', o.style.visibility = 'hidden'), o.style.opacity = s, o.style.filter = 'alpha(opacity=' + 100 * s + ')'
                }, 50);
            else o.style.opacity = 0, o.style.filter = 'alpha(opacity=0)', o.style.display = 'none', o.style.visibility = 'hidden'
    },
    close: function (c) {
        var a = os.getEl(c == 'delete' ? '#confirm_wrap' : '#preview_content'),
            b = os.getEl('#overlay');
        a.remove();
        b.remove();
    },
    scroll: function (o, e, t, s) {
        e = e || 500, s = s || window;
        var n = s.scrollTop || window.pageYOffset;
        if ('number' == typeof o) var r = parseInt(o);
        else var r = os.getTop(o, n);
        var l = Date.now(),
            i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (o) {
                window.setTimeout(o, 15)
            },
            a = function () {
                var c = Date.now() - l;
                s !== window ? s.scrollTop = os.position(n, r, c, e) : window.scroll(0, os.position(n, r, c, e)), c > e ? 'function' == typeof t && t(o) : i(a)
            };
        a()
    },
    beforeunload: function () {
        var a = os.sceditor;
        a && (window.onbeforeunload = function () {
            if (a.val().length) {
                return 'ok'
            }
        });
    },
    easeInOutCubic: function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    position: function (o, e, s, t) {
        return s > t ? e : o + (e - o) * os.easeInOutCubic(s / t)
    },
    getTop: function (o, e) {
        return 'HTML' === o.nodeName ? -e : o.getBoundingClientRect().top + e
    },
    viewtopic: function (h) {
        var i, g = os.getEl('a', h);
        for (i = 0; i < g.length; i++) {
            /\/viewtopic/g.test(g[i].href) && (os.view_url = g[i].href)
        }
    },
    post_number: function (c) {
        return c.match(/viewtopic/) ? c.match(/(\w+)$/g)[0] : c.match(/[\p\=](\w+)(?=\&)/)[1]
    },
    cr_el: function (o, e) {
        var t = document.createElement(o);
        if (e) {
            for (var s in e) 'style' != s && (t[s] = e[s]);
            e.style && this.style(t, e.style)
        }
        return t
    },
    getEl: function (o, e) {
        e = 'undefined' != typeof e ? e : document;
        switch (o.charAt(0).match(/\W/) ? o.charAt(0) : o) {
        case '#':
            return e.getElementById(o.substr(1));
        case '.':
            return e.getElementsByClassName(o.substr(1));
        case '*':
            return e.getElementsByName(o.substr(1));
        case 'body':
            return e.body;
        case 'head':
            return e.head;
        case 'forms':
            return e.forms;
        default:
            return e.getElementsByTagName(o)
        }
    }
};
$(function () {
    $(function () {
        (document.getElementById('logout') && /\/t\d+/g.test(window.location.pathname) || /\/post/.test(window.location.pathname) || /\/privmsg\?mode=(post|reply|edit)/.test(window.location.href)) && os.init()
    });
});
