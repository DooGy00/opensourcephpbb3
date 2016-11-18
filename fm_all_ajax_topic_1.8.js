console.log('//-----Written by Chalo ------- Open Source 2014-2016 -----//');
console.log('//------------ http://www.opensourcephpbb3.com ------------//');
console.log('//--------------------- Version: 1.8---------------------//');
console.log('//Reply, preview, quote, delete and more, without reload   //');
var _ = {
    config: {
        beroreunload: 1,
        edit: 1,
        quote: 1,
        delete: 1,
        preview: 1,
        reply: 1,
        vote: 1, // by default is disable vote system
        vote_img: 'https://i97.servimg.com/u/f97/19/54/65/02/th/68691610.png',
        placeholder: 1,
        words: 2, //min words in the textarea before reply
        time: 3000,
        speed: 400,
        color_a: 'linear-gradient(to bottom, #ffff88 0%,#ffff88 100%)',
        color_b: 'linear-gradient(to bottom, #ffaf4b 0%,#ff920a 100%)',
        color_c: 'linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 100%)',
        color_d: 'linear-gradient(to bottom, rgba(255,26,0,0.5) 0%,rgba(255,26,0,0.5) 100%)',
        color_e: 'linear-gradient(to bottom, #d2ff52 0%,#91e842 100%)',
        height: 250,
        img_close: 'http://illiweb.com/fa/prosilver/icon_post_delete.gif',
        color_border_edit: 'darkorange',
        vote_location: '.profile-icons',
        vote_position: 'append',
        editor_id: 1,
        autofocus: 1,
        autoexpand: 1,
        id: 'fm_editor',
        staff: [{ // if you no want any staff button, just set it this way: staff:[],
            name: 'ok',
            bg_button: 'https://i37.servimg.com/u/f37/19/54/26/00/accept11.png',
            bgc_post: '#effeb9',
            bg_post: 'https://i37.servimg.com/u/f37/19/54/26/00/accept10.png',
            color: 'green'
        }, {
            name: 'info',
            bg_button: 'https://i37.servimg.com/u/f37/19/54/26/00/info_c10.png',
            bgc_post: '#d1e4f3',
            bg_post: 'https://i37.servimg.com/u/f37/19/54/26/00/info10.png',
            color: 'blue'
        }, {
            name: 'alert',
            bg_button: 'https://i37.servimg.com/u/f37/19/54/26/00/warnin10.png',
            bgc_post: '#ffeaa9',
            bg_post: 'https://i37.servimg.com/u/f37/19/54/26/00/01_war10.png',
            color: 'brown'
        }, {
            name: 'warning',
            bg_button: 'https://i37.servimg.com/u/f37/19/54/26/00/error-11.png',
            bgc_post: '#fccac3',
            bg_post: 'https://i37.servimg.com/u/f37/19/54/26/00/error-10.png',
            color: 'red'
        }, {
            name: 'tip',
            bg_button: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-16.png',
            bgc_post: '#f2f2f2',
            bg_post: 'https://www.iconfinder.com/data/icons/fugue/bonus/icons-32/mail.png',
            color: '#aaa'
                // if you want another bbcode just add a comma in the last line and write it
                // the last line always must be without comma
        }],
        //  change this sentences below exactly like is display in your board's language
        // this sentences must be exactly like is shown in your forum
        sr: 'entered successfully',
        fd: 'Flood control',
        nt: 'A new message',
        tg: 'is too long.',
        pa: 'You must specify',
        pb: 'do not exist',
        pc: 'You cannot make',
        ps: 'message has been sent',
        da: 'deleted successfully'
    },
    lang: {
        // you can change any sentences below
        success_reply: 'Your message has been entered successfully',
        flood: 'Flood control is active on this forum, please wait 10 second(s) before replying or posting',
        newpost: 'A new message has been posted',
        too_long: 'The posted message is too long.',
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
        wait: 'Please be patient, sending data to the server',
        doubleclick: 'Be patient, getting the data',
        vote: 'like'
    },
    init: function () {
        _.loc = window.location.href;
        _.isTheme = /\/t\d+/g.test(_.loc);
        _.isPost = /\/post\?f=(\d+)&mode=(newtopic)/.test(_.loc);
        _.isEditPost = /\/post\?p=(\d+)&mode=(editpost)/.test(_.loc);
        _.isNewReply = /\/post\?t=(\d+)&mode=(reply)/.test(_.loc);
        _.isMP = /\/privmsg\?mode=(post|reply|edit)/.test(_.loc);
        _.phpbb2 = _.e('.bodylinewidth').length;
        _.phpbb3 = _.e('#phpbb');
        _.invision = _.e('#ipbwrapper');
        _.punbb = _.e('#pun-intro');
        _.subject = _.isTheme && _.e('h1')[0];
        _.body = _.e('body');
        _.form = _.e('forms').post;
        _.b_r = _.form.post;
        _.b_r_v = _.form.post.value;
        _.textarea = _.form.message;
        _.action = _.form.action;
        _.b_p = _.form.preview;
        _.b_p_v = _.b_p.value;
        _.url = _.isTheme ? '/post?t=' + _.form.t.value + '&mode=reply' : _.isPost && document.location.href;
        _.content = _.punbb ? '.entry-content' : _.phpbb3 ? '.content' : _.invision ? '.post-entry' : _.phpbb2 && '.postbody';
        _.a = _.e('a');
        _.config.vote == 1 && _.setVote();
        _.oc_a = '_.g(this, \'quote\');return false';
        _.oc_b = '_.g(this);return false';
        _.oc_c = '_.g(this,\'edit\');return false';
        _.oc_d = '_.p(this, \'preview\');return false';
        _.oc_e = _.isMP ? '_.p(this, \'mp\');return false' : '_.p(this, \'reply\');return false';
        _.oc_f = '_.p(this, \'edit\');return false';
        _.setButtons(_.a);
        _.sE();
    },
    setButtons: function (a) {
        var i;
        for (i in a) {
            _.config.quote == 1 && /(?!\&(mode)\=)(quote)/.test(a[i].href) && a[i].setAttribute('onclick', _.oc_a);
            _.config.delete == 1 && /(?!\&(mode)\=)(delete)/.test(a[i].href) && a[i].setAttribute('onclick', _.oc_b);
            _.config.edit == 1 && /(?!\&(mode)\=)(edit)/.test(a[i].href) && a[i].setAttribute('onclick', _.oc_c);
        }
        _.config.preview == 1 && _.b_p.setAttribute('onclick', _.oc_d);
        _.config.reply == 1 && _.b_r.setAttribute('onclick', _.oc_e);
    },
    prev_edit: function (j, e) {
        _.style(j, {
            border: '1px solid ' + _.config.color_border_edit
        });
        !_.e('.edit_subject').length && (_.create('input', {
            className: 'inputbox medium edit_subject',
            placeholder: _.lang.edit_subject_placeholder,
            name: 'subject',
            value: e,
            style: {
                display: 'table',
                margin: '0 auto',
                width: '99%',
                marginBottom: '5px'
            }
        }, _.group, 'before'));
    },
    set_cancel: function () {
        _.create('input', {
            id: 'cancel_form',
            type: 'submit',
            name: 'cancel',
            value: _.lang.delete_cancel,
            onclick: '_.cancel(this);return false'
        }, _.b_r, 'after');
    },
    cancel: function (c) {
        var a = _.e('.notice_reply');
        _.setButtons(_.e('a', _.post_target));
        _.remove(c);
        a.length && _.remove(a[0]);
        _.sceditor.val('');
    },
    g: function (c, d) {
        _.url = 'undefined' != typeof c.href ? c.href : c;
        var a = _.url.match(/(?!\/post\?p=(\w+)\&mode=)(editpost|quote|vote|delete)|viewtopic/)[0],
            b = _.pN(_.url),
            e, f, g, h, i, j, k, l, m, n, o, q, t, u, x;
        _.post_target = _.closest(c, '.post') != null ? _.closest(c, '.post') : _.e('.post--' + b)[0];
        j = _.post_target;
        
        !/viewtopic/.test(a) && c.setAttribute('onclick', '_.w();return false');
        (/quote/.test(a) && _.gS() != 0) ? _.quickQuote(_.name(j)) : /delete/.test(a) ? _.setDelete_.url) : 
        (_.XML('', _.url, function (e) {
            x = e.responseXML;
            f = a != 'vote' && x.forms.post.message.value;
            e = a != 'vote' && x.forms.post.subject && (x.forms.post.subject.value);
            switch (a) {
            case 'editpost':
                _.set_cancel();
                _.prev_edit(j, e);
                _.vSave = _.e('.vote', j).length && (_.e('.vote', j)[0]);
                _.edit_subject = _.e('.edit_subject')[0];
                _.edit_subject.val = _.edit_subject.value;
                _.sceditor.val(f);
                _.b_r.setAttribute('onclick', _.oc_f);
                _.edit_number = b;
                _.b_r.value = _.lang.save;
                _.notice(_.lang.edit_mode + b, _.config.color_b, 'false');
                _.scroll(_.form, _.config.speed);
                break;
            case 'quote':
                _.set_cancel();
                _.scroll(_.form, _.config.speed);
                _.iT(f);
                _.notice(_.lang.quote_mode + b, _.config.color_a, 'false');
                break;
            case 'viewtopic':
                k = _.e('.post--' + b, x)[0];
                _.attr(k, {
                    style: {
                        display: 'none',
                    },
                    className: k.className + ' new_ajax_post',
                    innerHTML: _.parse(k.innerHTML)
                });
                switch (d) {
                case 'reply':
                    _.setButtons(_.e('a', k));
                    _.setPost(k);
                    break;
                case 'edit':
                    t = _.e(_.content, k);
                    u = t[0].innerHTML;
                    var vote = _.e('.vote', j);
                    _.setButtons(_.e('a', j));
                    _.e(_.content, j)[0].innerHTML = u;
                    vote.length && (_.move(_.vSave, vote[0], 'replaceWith'));
                    _.edit_subject.val != _.edit_subject.value && (_.tC(j).textContent = _.edit_subject.value, _.c_title(j, _.edit_subject.value));
                    _.remove(_.edit_subject);
                    _.b_r.setAttribute('onclick', _.oc_e);
                    _.fadeIn(j, 500);
                    _.scroll(j, _.config.speed);
                    break;
                }
                _.sceditor.val('');
                _.e('#cancel_form') && _.remove(_.e('#cancel_form'));
                _.backColor('#000');
                _.oC(false);
                _.notice(_.lang.success_reply, _.config.color_e, 'true');
                break;
            case 'vote':
                i = _.e('span', c.parentNode);
                o = parseInt(i[0].innerHTML) + parseInt(1);
                i.length && (i[0].innerHTML = o + ' ' + _.lang.vote + (o == 1 ? '' : 's'));
                _.e('img', c)[0].style.opacity = '.3';
                c.removeAttribute('onclick');
                c.removeAttribute('href');
                break;
            }
        }))
    },
    p: function (f, m) {
        var a, b, c, d, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, w, z, da;
        _.E = /edit/.test(m);
        _.R = /reply/.test(m);
        _.D = /delete/.test(m);
        _.Q = /quote/.test(m);
        _.M = /mp/.test(m);
        _.P = /preview/.test(m);
        _.regex = /\w{2,}\b/g;
        n = _.E && encodeURIComponent(_.sceditor.val());
        x = _.E && encodeURIComponent(_.edit_subject.value);
        k = _.e('.new_ajax_post');
        k.length && k[0].classList.remove('new_ajax_post');
        y = _.sceditor.val();
        _.url_post = _.D ? f.href : _.form.action;
        _.uritexto = (_.M || _.R) ? _.serialize(_.form) + '&post=1&prevent_post=1' : _.P ? _.serialize(_.form) + '&preview=Preview' : _.D ? '&confirm=1' : '&subject=' + x + '&message=' + n + '&mode=editpost&p=' + _.edit_number + '&notify=on&&post=1&prevent_post=1';
        if (y.length > 0 && y.match(_.regex) != null && y.match(_.regex).length >= _.config.words || _.D) {
            if ((_.isPost || _.isMP) && (_.form.subject && _.form.subject.value.length >= 10) || _.isNewReply || _.P || _.isEditPost || _.isTheme) {
                !_.D && (_.prev_post(f));
                _.XML(_.uritexto, _.url_post, function (e) {
                    h = e.responseXML;
                    j = _.e(_.phpbb2 ? '#page-body' : '#main', h);
                    o = _.e(_.content, h).length && _.e(_.content, h)[0];
                    t = j.innerHTML;
                    a = t.indexOf(_.config.sr);
                    b = t.indexOf(_.config.fd);
                    l = t.indexOf(_.config.nt);
                    s = t.indexOf(_.config.pb);
                    u = t.indexOf(_.config.pc);
                    v = t.indexOf(_.config.ps);
                    w = t.indexOf(_.config.pa);
                    z = t.indexOf(_.config.tg);
                    da = t.indexOf(_.config.da);
                    switch (m) {
                    case 'mp':
                        if (w > 0) {
                            _.response(_.lang.pm_error_a, _.config.color_c, 'true', _.b_r, _.b_r_v, '#000', 1)
                        } else if (s > 0) {
                            _.response(_.lang.pm_error_b, _.config.color_c, 'true', _.b_r, _.b_r_v, '#000', 1)
                        } else if (u > 0) {
                            _.response(_.lang.pm_error_c, _.config.color_c, 'true', _.b_r, _.b_r_v, '#000', 1)
                        } else if (v > 0) {
                            _.sceditor.val('');
                            _.rF(_.b_r, _.b_r_v);
                            setTimeout(function () {
                                document.location.href = '/privmsg?folder=inbox'
                            }, 2e3)
                        }
                        break;
                    case 'reply':
                    case 'edit':
                        _.getViewtopic(h);
                        c = _.view_url;
                        _.style(_.b_r, {
                            color: '#fff',
                            background: _.config.color_d
                        });
                        if (b > 0) {
                            _.response(_.lang.flood, _.config.color_b, 'true', _.b_r, _.b_r_v, '#000', 1)
                        } else if (l > 0) {
                            _.response(_.lang.newpost, _.config.color_b, 'true', _.b_r, _.b_r_v, '#000', 1)
                        } else if (0 > a) {
                            _.response(_.lang.error_reply, '', 'true', _.b_r, _.b_r_v, '#000', 1)
                        } else {
                            if (_.isTheme) {
                                'undefined' != typeof c && _.g(c, m);
                                _.response(_.lang.wait, _.config.color_c, 'true', _.b_r, _.b_r_v, '#dededf', 0);
                            } else {
                                _.overlay(_.lang.loading);
                                _.backColor('#dededf');
                                setTimeout(function () {
                                    window.onbeforeunload = false;
                                    document.location.href = c
                                }, 2e3);
                                _.rF(_.b_r, _.b_r_v);
                            }
                        }
                        break;
                    case 'preview':
                        if (!o || z > 0) {
                            _.response(_.lang.too_long, _.config.color_d, 'true', _.b_p, _.b_p_v, '#000', 1);
                        } else {
                            _.setPreview(o);
                            _.rF(_.b_p, _.b_p_v);
                        }
                        break;
                    case 'delete':
                        d = _.post_target;
                        r = _.e('#confirm_wrap');
                        q = _.e('#overlay');

                        if (da > 0) {
                            d && (_.phpbb2 ? (_.fadeOut(d.nextElementSibling, 500), _.fadeOut(d, 500)) : _.fadeOut(d, 500));
                            r && _.remove(r);
                            q && _.remove(q);
                        } else {
                            _.text_init(_.e('#confirm_content'), 'Error, try again or later')
                        }
                        break;
                    }
                })
            } else {
                _.response(_.lang.no_subject, _.config.color_d, 'true', _.b_r, _.b_r_v, '#000', 1);
                _.b_r.removeAttribute('style');
            }
        } else {
            w = y.length > 0 && y.match(_.regex) != null ? (_.config.words - y.match(_.regex).length) : _.config.words;
            _.notice((y.length == 0 ? _.lang.no_message : _.lang.reply_words + w + ' more word' + (w <= 1 ? '' : 's')), _.config.color_d, 'true');
            _.R ? _.rF(_.b_r, _.b_r_v) : _.rF(_.b_p, _.b_p_v);
        }
    },
    
    prev_post: function (f) {
        f.value = _.P ? _.lang.loading : _.lang.reply_btn_send, (_.isTheme || _.isPost && _.P) && (_.oC(_.lang.loading), _.backColor('#dededf')), _.P ? _.attr(_.b_p, {
            onclick: '',
            style: {
                color: '#fff',
                background: _.config.color_d
            }
        }) : _.attr(_.b_r, {
            onclick: '',
            style: {
                color: '#fff',
                background: _.config.color_d
            }
        });
    },
    setVote: function () {
        var i, a, b, c, d, e, f, g, j, k, m, o, p, fr, l = _.config.vote_img,
            s = _.s,
            h = _.e('.vote');
        for (i = 0; i < h.length; i++) {
            f = h[i];
            k = _.closest(f, '.post');
            a = _.e('.vote-button', f);
            b = a.length && _.e('a', a[0])[0];
            d = _.e('.vote-bar', f)[0];
            p = a.length && a[0].parentNode;
            _.nv = _.e('.vote-bar', f).length && d.title.match(/(\d+)/g)[1];
            _.attr(f, {
                className: 'vote new_vote',
                style: {
                    marginBottom: '20px',
                    float: 'inherit',
                    width: 'auto'
                }
            });
            if (h[i].childNodes.length == 1) {
                fr = document.createDocumentFragment();
                _.attr(d, {
                    className: 'like',
                    innerHTML: '',
                    style: {
                        float: 'right',
                        display: 'inline-block',
                    }
                });
                _.create('img', {
                    src: l,
                    style: {
                        opacity: '.3',
                        float: 'left',
                        width: '18px',
                        height: '18px'
                    }
                }, fr, 'append');
                _.create('span', {
                    className: 'counter',
                    innerHTML: _.nv + ' ' + _.lang.vote + (_.nv == 1 ? '' : 's'),
                    style: {
                        marginLeft: '5px',
                        float: 'right',
                        lineHeight: '1.7',
                        fontSize: '11px'
                    }
                }, fr, 'append');
                _.move(fr, d, 'append');
            } else {
                o = b;
                fr = document.createDocumentFragment();
                _.move(o, fr, 'append');
                _.attr(o, {
                    className: 'like',
                    href: b.href,
                    onclick: '_.g(this,\'vote\');return false',
                    innerHTML: '',
                    style: {
                        float: 'right',
                        display: 'inline-block',
                        fontSize: '11px',
                    }
                });
                _.create('img', {
                    src: l,
                    style: {
                        width: '18px',
                        height: '18px'
                    }
                }, fr.firstChild, 'append');
                _.create('span', {
                    className: 'counter',
                    innerHTML: _.nv + ' ' + _.lang.vote + (_.nv == 1 ? '' : 's'),
                    style: {
                        marginLeft: '5px',
                        float: 'right',
                        lineHeight: '1.7'
                    }
                }, fr.firstChild, 'append');
                p.innerHTML = '';
                _.move(fr, p, 'append');
            }
            _.config.vote_location != 0 && (_.e(_.config.vote_location, k).length && _.move(f, _.e(_.config.vote_location, k)[0], _.config.vote_position))
        }
    },
    setPreview: function (o) {
        var a = document.createDocumentFragment();
        _.create('div', {
            id: 'preview_content',
            style: {
                background: '#fff',
                left: '15%',
                position: 'fixed',
                top: '10%',
                width: '70%',
                height: '65%',
                overflow: 'auto',
                zIndex: '999',
                boxSshadow: '10px 10px 40px black',
                borderRradius: '3px',
                fontSize: '1.2em',
                padding: '10px',
                fontFamily: 'Arial',
                textShadow: '0 1px 1px white',
                color: '#666',
            }
        }, a, 'append'), _.create('div', {
            className: 'preview_inner',
            innerHTML: _.parse(o.innerHTML),
            style: {
                textAlign: 'justify',
                display: 'inline-block',
                width: '100%'
            }
        }, a.childNodes[0], 'append'), _.create('a', {
            id: 'close',
            onclick: '_.close(\'preview\')',
            style: {
                float: 'right',
                cursor: 'pointer'
            },
        }, a.childNodes[0], 'prepend'), _.create('img', {
            src: _.config.img_close
        }, a.firstChild.firstChild, 'append');
        _.overlay(_.b_p_v);
        _.body.appendChild(a);
    },
    setDelete: function (f) {
        var a = document.createDocumentFragment();
        _.create('div', {
            id: 'confirm_wrap',
            style: {
                fontFamily: 'arial',
                display: ' inline-block',
                verticalAlign: 'top',
                width: '100%',
                textAlign: 'center',
                zIndex: '9999',
                padding: '7px 13px',
                position: 'fixed',
                top: '35%'
            }
        }, a, 'append');
        _.create('div', {
            id: 'confirm_content',
            innerHTML: _.lang.delete_main + _.pN(f),
            style: {
                color: '#fff',
                marginBottom: '7px',
                paddingBottom: '5px',
                fontSize: '30px'
            }
        }, a.childNodes[0], 'append');
        _.create('div', {
            id: 'confirm'
        }, a.childNodes[0], 'append');
        _.create('a', {
            id: 'yes',
            className: 'yes',
            href: f,
            onclick: '_.p(this, \'delete\');return false',
            innerHTML: _.lang.delete_yes,
            style: {
                color: '#fff',
                textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)',
                background: 'linear-gradient(to bottom, #62c462, #51a351)',
                borderColor: '#51a351 #51a351 #387038',
                display: 'inline-block',
                padding: '4px 12px',
                marginBottom: '0',
                fontSize: '12px',
                lineHeight: '20px',
                textAlign: 'center',
                verticalAlign: 'middle',
                cursor: 'pointer',
                textDecoration: 'none'
            }
        }, a.childNodes[0].lastChild, 'append');
        _.create('a', {
            id: 'cancel',
            onclick: '_.close(\'delete\')',
            innerHTML: _.lang.delete_cancel,
            style: {
                marginLeft: '5px',
                color: '#fff',
                background: 'linear-gradient(to bottom, #db5530 5%, #db1f1f 100%)',
                backgroundColor: '#db5530',
                textShadow: '0 1px 0 #854629',
                display: 'inline-block',
                padding: '4px 12px',
                marginBottom: '0',
                fontSize: '12px',
                lineHeight: '20px',
                textAlign: 'center',
                verticalAlign: 'middle',
                cursor: 'pointer',
                textDecoration: 'none'
            }
        }, a.childNodes[0].lastChild, 'append');
        _.body.appendChild(a);
        _.overlay();
    },
    setPost: function (h) {
        var e = _.punbb ? _.e('.topic')[0] : _.phpbb2 ? _.e('.catBottom')[0].parentNode.previousElementSibling : _.phpbb3 ? _.e('*bottomtitle')[0].previousElementSibling : _.invision && _.e('.topic-footer')[0].previousElementSibling;
        _.punbb ? _.move(h, e, 'append') : _.move(h, e, 'after');
        _.scroll(h, _.config.speed);
        _.fadeIn(h, 500);
    },
    overlay: function (c) {
        _.create('div', {
            id: 'overlay',
            style: {
                fontFamily: 'arial',
                display: 'none',
                position: 'fixed',
                top: '0',
                left: '0',
                minHeight: '101%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, .4)',
                zIndex: '999',
                color: '#fff',
                fontSize: '45px',
                textAlign: 'center',
                lineHeight: '13'
            }
        }, _.body, 'append');
        var a = _.e('#overlay');
        ('undefined' != typeof c && c != false) && (a.textContent = c);
        c == false && (_.fadeOut(a, 500), setTimeout(function () {
            _.remove(a)
        }, 600));
        _.fadeIn(a, 500);
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
        var b, g;
        g = _.e('.notice_reply');
        b = _.group;
        !g.length ? (_.create('div', {
            innerHTML: 'undefined' == typeof c ? _.lang.notice_default : c,
            className: 'notice_reply',
            style: {
                background: ('undefined' == typeof f || f == '') ? _.config.color_a : f,
                height: '20px',
                lineHeight: '1.5',
                borderRadius: '3px',
                textShadow: '0 1px rgba(255, 255, 255, 0.46)',
                textAlign: 'center'
            }
        }, b, 'before'), g = _.e('.notice_reply')) : _.attr(g[0], {
            innerHTML: 'undefined' == typeof c ? _.lang.notice_default : c,
            style: {
                background: ('undefined' == typeof f || f == '') ? _.config.color_a : f,
            }
        });
        _.fadeIn(g[0], 500);
        'false' != h && setTimeout(function () {
            '' == g[0].style.display && (_.fadeOut(g[0], 500))
        }, _.config.time);
    },
    fadeIn: function (a, b) {
        var e, d;
        if (!a) return;
        _.style(a, {
            opacity: 0,
            filter: 'alpha(opacity=0)',
            display: '',
            visibility: 'visible'
        }), b ? (e = 0, d = setInterval(function () {
            e += 50 / b, e >= 1 && (clearInterval(d), e = 1), _.style(a, {
                opacity: e,
                filter: 'alpha(opacity=' + e * 100 + ')',
            })
        }, 50)) : (_.style(a, {
            opacity: '1',
            filter: 'alpha(opacity=1)'
        }))
    },
    fadeOut: function (o, e) {
        var t, s;
        o && (e ? (s = 1, t = setInterval(function () {
            s -= 50 / e, s > 0 || (clearInterval(t), s = 0, _.style(o, {
                display: 'none',
                visibility: 'hidden'
            })), _.style(o, {
                opacity: s,
                filter: 'alpha(opacity=" + 100 * s + ")'
            })
        }, 50)) : _.style(o, {
            opacity: 0,
            filter: 'alpha(opacity=0)',
            display: 'none',
            visibility: 'hidden'
        }));
    },
    closest: function (t, e) {
        var n;
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (t) {
            return 'function' == typeof document.body[t] ? (n = t, !0) : !1
        });
        for (var r; t;) {
            if (r = t.parentElement, r && r[n](e)) return r;
            t = r
        }
        return null
    },
    close: function (c) {
        var i, a = _.e(/delete/.test(c) ? '#confirm_wrap' : '#preview_content'),
            b = _.e('#overlay');
        _.fadeOut(a, 500);
        _.fadeOut(b, 500);
        setTimeout(function () {
            _.remove(a);
            _.remove(b);
        }, 600);
        _.rC.style.display = 'block' && (_.rC.style.display = 'none');
        /preview/.test(c) && _.dC('#000')
    },
    scroll: function (o, e, t, s) {
        e = e || 500, s = s || window;
        var a = o.clientHeight < 150 ? o.clientHeight * 2 : o.clientHeight < 399 ? o.clientHeight : o.clientHeight > 400 && '',
            n = s.scrollTop - a || window.pageYOffset - a;
        if ('number' == typeof o) var r = parseInt(o);
        else var r = _.gT(o, n);
        var l = Date.now(),
            i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (o) {
                window.setTimeout(o, 15)
            },
            a = function () {
                var c = Date.now() - l;
                s !== window ? s.scrollTop = _.pS(n, r, c, e) : window.scroll(0, _.pS(n, r, c, e)), c > e ? 'function' == typeof t && t(o) : i(a)
            };
        a()
    },
    
    parseBBcode: function () {
        var i, b, d, e, f, g, a = _.e('.post'),
            c = a.length;
        _.post_data = [];
        for (i = 0; i < c; i++) {
            f = a[i];
            d = f.className;
            e = /post--/.test(d);
            e && (f.innerHTML = _.parse(f.innerHTML));
            e && Array.isArray([d]) && _.post_data.push({
                class: [d.match(/(\d+)$/)[0]],
                position: i
            });
        }
    },
    parse: function (c) {
        var e = _.config.staff,
            i, e, r, v, u, m, n, o, p, s = 'text-align: justify;padding: 8px 8px 8px 40px;min-height: 20px;margin-top: 5px; font-size: 14px; font-style: initial; width: 90.5%; margin-left: 14px;display:block;line-height: 1.6;text-shadow: 0 1px rgba(255, 255, 255, 0.68);border-radius: 5px;';
        _.compreg = [];
        _.bbhtml = [];
        for (i in e) {
            r = e[i].name;
            m = e[i].bg_post;
            n = e[i].color;
            p = e[i].bgc_post;
            o = '<span class="' + r + '" style="background: url(' + m + ') no-repeat 6px ' + p + ';border:1px solid ' + n + ';color:' + n + ';' + s + '">$1</span>';
            v = '[' + r + ']';
            u = '[/' + r + ']';
            _.compreg.push(_.reg(v, u));
            _.bbhtml.push(o);
        };
        var a = _.compreg,
            b = _.bbhtml;
        for (i in a) {
            c = c.replace(a[i], b[i]);
        }
        return c
    },
    sE: function () {
        if (!$.sceditor || !toolbar) return;
        _.opts = $.sceditor.defaultOptions;
        _.config.editor_id == 1 && (_.opts.id = _.config.id);
        _.config.autofocus == 1 && (_.opts.autofocus = true);
        _.config.autoExpand == 1 && (_.opts.autoExpand = true);
        _.opts.autoUpdate = true; //this value always must be true
        _.setBBcode();
    },
    setBBcode: function () {
        var i, c, f, d, b, a;
        if ($.sceditor && toolbar && _.config.staff.length && _userdata.user_level > 0) {
            _.trp = [], a = _.config.staff, c = a.length, f = [];
            for (i in a) d = a[i].name, _.trp.push(d), f.push(function (e) {
                $.sceditor.command.set(e, {
                    exec: function () {
                        this.insertText('[' + e + ']', '[/' + e + ']')
                    },
                    txtExec: function () {
                        this.insertText('[' + e + ']', '[/' + e + ']')
                    },
                    tooltip: 'Mod tool ' + e
                })
            });
            for (i in f) f[i](a[i].name)
        }
        toolbar = _userdata.user_level > 0 ? toolbar.replace(/source/, 'maximize,source|' + _.trp.join()) : toolbar.replace(/source/, 'maximize,source');
        $(document).ready(function ($) {
            _.sc();
        });
    },
    sc: function () {
        _.sceditor = $(_.textarea).sceditor('instance');
        _.group = _.e('.sceditor-group')[0];
        _.rC = _.e('.sceditor-resize-cover')[0];
        _.bM = _.e('.sceditor-button-maximize');
        _.fa = _.e('#fa_toolbar');
        _.text_a = _.e('textarea', _.form)[1];
        _.config.placeholder == 1 && (_.text_a.placeholder = _.lang.placeholder);
        _.config.beroreunload == 1 && _.bU();
        _.isTheme && (_.sceditor.height(_.config.height), _.parseBBcode());
        _.bM.length && (_.bM[0].onclick = function () {
            if (!_.fa) return;
            _.sceditor.maximize() && (_.fadeOut(_.fa, 300));
            !_.sceditor.maximize() && (_.fadeIn(_.fa, 300));
        });
        if (_userdata.user_level > 0) {
            var b, c, i, a;
            b = _.config.staff;
            c = b.length;
            for (i in b) {
                _.e('div', _.e('.sceditor-button-' + b[i].name)[0])[0].style.backgroundImage = 'url(' + b[i].bg_button + ')'
            }
        }
    },
    text_int: function (a, c) {
        return a.textContent = c
    },
    iT: function (c) {
        insertIntoEditor(c + '\n')
    },
    eC: function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    pS: function (o, e, s, r) {
        return o + (e - o) * _.eC(s / r)
    },
    gT: function (o, e) {
        return 'HTML' === o.nodeName ? -e : o.getBoundingClientRect().top + e
    },
    getViewtopic: function (h) {
        var i, g = _.e('a', h);
        for (i in g) {
            /\/viewtopic/g.test(g[i].href) && (_.view_url = g[i].href)
        }
    },
    tC: function (c) {
        return _.punbb || _.phpbb3 ? _.e('a', _.e('h2', c)[0])[0] : _.invision ? _.e('a', _.e('h3', c)[0])[0] : _.phpbb2 && _.e('.postdetails', c)[1].childNodes[1]
    },
    c_title: function (j, e) {
        (!location.href.match(/p(\d+)/) && _.check_first(j)) && (_.subject.textContent = e);
    },
    check_first: function (b) {
        var n = _.post_data[0].class[0];
        return n == b.className.match(/(\d+)/)[0]
    },
    regexEscaped: function (str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    },
    gS: function () {
        var e = '';
        return window.getSelection ? e = window.getSelection().toString() : document.selection && 'Control' != document.selection.type && (e = document.selection.createRange().text), e
    },
    quickQuote: function (p) {
        _.scroll(_.form, _.config.speed), _.iT('[quote="' + p + '"]' + _.gS() + '[/quote]')
    },
    rF: function (c, d) {
        _.attr(c, {
            value: d,
            onclick: _.R ? _.oc_e : _.oc_d
        });
        c.removeAttribute('style');
    },
    reg: function (a, b) {
        var f;
        f = 'g';
        a = _.regexEscaped(a);
        b = _.regexEscaped(b);
        return new RegExp(a + '(.*?)' + b, f);
    },
    pN: function (c) {
        return c.match(/viewtopic/) ? c.match(/(\w+)$/g)[0] : c.match(/[\p\=](\w+)(?=\&)/)[1]
    },
    move: function (e, r, a) {
        switch (a) {
        case 'append':
            r.appendChild(e);
            break;
        case 'prepend':
            r.insertBefore(e, r.childNodes[0]);
            break;
        case 'before':
            r.parentNode.insertBefore(e, r);
            break;
        case 'after':
            r.parentNode.insertBefore(e, r.nextSibling);
            break;
        case 'replaceWith':
            r.parentNode.replaceChild(e, r);
            break;
        }
    },
    bU: function () {
        var a = _.sceditor;
        a && (window.onbeforeunload = function () {
            if (a.val().length) {
                return ''
            }
        });
    },
    oC: function (c) {
        _.attr(_.rC, {
            innerHTML: c != false ? c : '',
            style: {
                display: c != false ? 'block' : 'none',
                color: '#fff',
                fontSize: '20px',
                lineHeight: '12',
                textAlign: 'center'
            }
        })
    },
    w: function () {
        _.overlay(_.lang.doubleclick);
        setTimeout(function () {
            _.overlay(false);
        }, _.config.time)
    },
    name: function (j) {
        var b, c, a = _.punbb ? '.username' : _.invision || _.phpbb3 ? '.author' : _.phpbb2 && '.name';
        b = _.e(a, j)[0];
        c = _.punbb ? b.childNodes[0] : _.invision || _.phpbb3 ? b.childNodes[2] : _.phpbb2 && b.childNodes[1];
        return c.textContent;
    },
    response: function (a, b, c, d, e, f, g) {
        _.notice(a, b, c), _.rF(d, e), _.dC(f), g == 1 && _.oC(false)
    },
    backColor: function (c) {
        _.sceditor.css('body { color: ' + c + '; }');
        _.text_a.style.color = c;
    },
    create: function (e, r, n, a) {
        var t = 1 == e.nodeType ? e : document.createElement(e);
        _.attr(t, r), _.move(t, n, a)
    },
    remove: function (a) {
      a.parentNode.removeChild(a);
    },
    attr: function (s, e) {
        for (var t in e) 'style' != t && (s[t] = e[t], /^on/.test(t) && s.setAttribute(t, e[t]));
        e.style && _.style(s, e.style)
    },
    style: function (o, e) {
        if ('string' == typeof o && (o = _.e(o)), o.style)
            for (var s in e) o.style[s] = e[s];
        return this
    },
    e: function (o, e) {
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
    },
};
$(function () {
    (document.getElementById('logout') && /\/t\d+/g.test(window.location.pathname) || /\/post/.test(window.location.pathname) || /\/privmsg\?mode=(post|reply|edit)/.test(window.location.href)) && (_.init());
});
